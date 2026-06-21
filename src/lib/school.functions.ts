import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/* -------------------------- Edusanna admin creates a school admin ----------- */

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (!data) throw new Error("Forbidden: admin access required");
}

export const createSchoolAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input: {
      email: string;
      password: string;
      schoolName: string;
      contactName?: string;
      contactPhone?: string;
    }) => {
      const email = (input?.email ?? "").trim().toLowerCase();
      const password = input?.password ?? "";
      const schoolName = (input?.schoolName ?? "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Valid email is required");
      if (password.length < 8) throw new Error("Password must be at least 8 characters");
      if (schoolName.length < 2 || schoolName.length > 200) throw new Error("School name is required");
      return {
        email,
        password,
        schoolName,
        contactName: (input.contactName ?? "").trim().slice(0, 120) || null,
        contactPhone: (input.contactPhone ?? "").trim().slice(0, 40) || null,
      };
    },
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // 1) Create the auth user (email confirmed so they can sign in immediately)
    const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
      user_metadata: {
        full_name: data.contactName ?? data.schoolName,
        signup_type: "school_admin",
        school_name: data.schoolName,
      },
    });
    if (createErr || !created?.user) {
      throw new Error(createErr?.message ?? "Could not create school admin account");
    }
    const userId = created.user.id;

    // 2) Insert school_admins record
    const { error: saErr } = await supabaseAdmin.from("school_admins").insert({
      user_id: userId,
      school_name: data.schoolName,
      contact_name: data.contactName,
      contact_phone: data.contactPhone,
      created_by: context.userId,
    });
    if (saErr) {
      await supabaseAdmin.auth.admin.deleteUser(userId).catch(() => {});
      throw saErr;
    }

    // 3) Grant the school_admin role
    const { error: roleErr } = await supabaseAdmin.from("user_roles").insert({
      user_id: userId,
      role: "school_admin",
    });
    if (roleErr) throw roleErr;

    return { success: true, userId };
  });

export const listSchoolAdmins = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("school_admins")
      .select("user_id, school_name, contact_name, contact_phone, created_at")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return { schoolAdmins: data ?? [] };
  });

export const deleteSchoolAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { userId: string }) => {
    if (!input?.userId) throw new Error("Missing userId");
    return input;
  })
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    // Cascades through school_admins + user_roles via FK
    await supabaseAdmin.auth.admin.deleteUser(data.userId);
    return { success: true };
  });

/* -------------------------- School admin self-service ----------------------- */

async function getMySchool(context: { supabase: any; userId: string }): Promise<string> {
  const { data, error } = await context.supabase
    .from("school_admins")
    .select("school_name, normalized_school")
    .eq("user_id", context.userId)
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("You are not registered as a school administrator");
  return data.school_name as string;
}

export const getMySchoolAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase
      .from("school_admins")
      .select("school_name, contact_name, contact_phone")
      .eq("user_id", context.userId)
      .maybeSingle();
    return { schoolAdmin: data };
  });

/** List the students at this admin's school + their progress, joined by school_name. */
export const listSchoolStudents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const schoolName = await getMySchool(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const target = schoolName.trim().toLowerCase();

    // Pull all profiles for the school (case-insensitive)
    const { data: profiles, error: pErr } = await supabaseAdmin
      .from("profiles")
      .select("id, full_name, email, mobile_number, school_name, created_at");
    if (pErr) throw pErr;
    const myProfiles = (profiles ?? []).filter(
      (p) => (p.school_name ?? "").trim().toLowerCase() === target,
    );
    const ids = myProfiles.map((p) => p.id);

    // Roster (used for class assignment + show students yet to sign up)
    const { data: roster } = await supabaseAdmin
      .from("school_rosters")
      .select("full_name, normalized_name, class_name")
      .eq("school_admin_id", context.userId);

    const rosterByName = new Map<string, { class_name: string | null }>();
    for (const r of roster ?? []) {
      rosterByName.set(r.normalized_name as string, { class_name: r.class_name as string | null });
    }

    // Progress + payments for these students
    const [progRes, payRes] = await Promise.all([
      ids.length
        ? supabaseAdmin
            .from("course_progress")
            .select("user_id, course_id, level, completed_modules, is_completed, updated_at")
            .in("user_id", ids)
        : Promise.resolve({ data: [] as any[], error: null }),
      ids.length
        ? supabaseAdmin
            .from("certificate_payments")
            .select("id, user_id, course_id, course_name, certificate_type, amount, payment_status, created_at")
            .in("user_id", ids)
            .order("created_at", { ascending: false })
        : Promise.resolve({ data: [] as any[], error: null }),
    ]);
    const progress = (progRes.data as any[]) ?? [];
    const payments = (payRes.data as any[]) ?? [];

    const students = myProfiles.map((p) => {
      const key = (p.full_name ?? "").trim().toLowerCase();
      const fromRoster = rosterByName.get(key);
      const myProg = progress.filter((q) => q.user_id === p.id);
      const myPay = payments.filter((q) => q.user_id === p.id);
      return {
        id: p.id,
        fullName: p.full_name,
        email: p.email,
        mobileNumber: p.mobile_number,
        className: fromRoster?.class_name ?? null,
        enrolledAt: p.created_at,
        coursesStarted: myProg.length,
        coursesCompleted: myProg.filter((q) => q.is_completed).length,
        payments: myPay,
        totalPaid: myPay.reduce((s, q) => s + Number(q.amount ?? 0), 0),
      };
    });

    // Roster entries with no matching signup yet
    const signedUpKeys = new Set(myProfiles.map((p) => (p.full_name ?? "").trim().toLowerCase()));
    const unmatched = (roster ?? [])
      .filter((r) => !signedUpKeys.has(r.normalized_name as string))
      .map((r) => ({ fullName: r.full_name, className: r.class_name }));

    return { schoolName, students, unmatched };
  });

/** Roster CRUD */
export const listRoster = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("school_rosters")
      .select("id, full_name, class_name, created_at")
      .order("class_name", { ascending: true })
      .order("full_name", { ascending: true });
    if (error) throw error;
    return { roster: data ?? [] };
  });

export const bulkAddRoster = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input: { entries: Array<{ fullName: string; className?: string }> }) => {
      if (!Array.isArray(input?.entries)) throw new Error("Invalid payload");
      const entries = input.entries
        .map((e) => ({
          fullName: (e.fullName ?? "").trim().slice(0, 160),
          className: (e.className ?? "").trim().slice(0, 80) || null,
        }))
        .filter((e) => e.fullName.length >= 2);
      if (entries.length === 0) throw new Error("No valid names found");
      if (entries.length > 1000) throw new Error("Limit is 1000 students per upload");
      return { entries };
    },
  )
  .handler(async ({ data, context }) => {
    const schoolName = await getMySchool(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const rows = data.entries.map((e) => ({
      school_admin_id: context.userId,
      school_name: schoolName,
      full_name: e.fullName,
      class_name: e.className,
    }));
    const { data: inserted, error } = await supabaseAdmin
      .from("school_rosters")
      .insert(rows)
      .select("id");
    if (error) throw error;
    return { added: inserted?.length ?? 0 };
  });

export const removeRosterEntry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { id: string }) => {
    if (!input?.id) throw new Error("Missing id");
    return input;
  })
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("school_rosters")
      .delete()
      .eq("id", data.id)
      .eq("school_admin_id", context.userId);
    if (error) throw error;
    return { success: true };
  });

/** Verify a manual cash payment a student paid at the school. */
export const verifySchoolPayment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input: {
      studentId: string;
      courseId: string;
      courseName: string;
      level: "certificate" | "diploma";
      amount: number;
    }) => {
      if (!input?.studentId) throw new Error("Pick a student");
      if (!input?.courseName?.trim()) throw new Error("Course name is required");
      if (input.level !== "certificate" && input.level !== "diploma") throw new Error("Invalid level");
      const amount = Number(input.amount);
      if (!Number.isFinite(amount) || amount < 0 || amount > 1000) throw new Error("Invalid amount");
      return { ...input, amount };
    },
  )
  .handler(async ({ data, context }) => {
    const schoolName = await getMySchool(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Look up student profile + roster class
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("full_name, email, school_name")
      .eq("id", data.studentId)
      .maybeSingle();
    if (!profile) throw new Error("Student not found");
    if ((profile.school_name ?? "").trim().toLowerCase() !== schoolName.trim().toLowerCase()) {
      throw new Error("This student is not assigned to your school");
    }

    const nameKey = (profile.full_name ?? "").trim().toLowerCase();
    const { data: rosterRow } = await supabaseAdmin
      .from("school_rosters")
      .select("class_name")
      .eq("school_admin_id", context.userId)
      .eq("normalized_name", nameKey)
      .maybeSingle();

    // Block duplicates
    const { data: existing } = await supabaseAdmin
      .from("certificate_payments")
      .select("id")
      .eq("user_id", data.studentId)
      .eq("course_id", data.courseId)
      .eq("certificate_type", data.level)
      .in("payment_status", ["paid_pending_admin", "noted", "certificate_sent"]);
    if (existing && existing.length > 0) {
      return { success: false, error: "This student already has a payment for this credential." };
    }

    const certificateId = `EDU-SCH-${Date.now().toString(36).toUpperCase()}`;
    const { error } = await supabaseAdmin.from("certificate_payments").insert({
      user_id: data.studentId,
      student_name: profile.full_name,
      email: profile.email,
      course_id: data.courseId,
      course_name: data.courseName,
      certificate_type: data.level,
      amount: data.amount,
      payment_status: "paid_pending_admin",
      certificate_id: certificateId,
      source: "school",
      school_name: schoolName,
      class_name: rosterRow?.class_name ?? null,
    });
    if (error) throw error;

    // Telegram alert (non-blocking)
    try {
      const { notifyAdminTelegram } = await import("@/lib/notify.server");
      const label = data.level === "diploma" ? "Diploma" : "Certificate";
      await notifyAdminTelegram(
        `🏫 School-cash payment verified\n` +
          `<b>School:</b> ${escapeHtml(schoolName)}\n` +
          (rosterRow?.class_name ? `<b>Class:</b> ${escapeHtml(rosterRow.class_name)}\n` : "") +
          `<b>Student:</b> ${escapeHtml(profile.full_name ?? "(unknown)")}\n` +
          `<b>Course:</b> ${escapeHtml(data.courseName)} (${label})\n` +
          `<b>Amount:</b> $${data.amount.toFixed(2)}\n` +
          `<b>Cert ID:</b> ${certificateId}`,
      );
    } catch {
      /* never block payment recording */
    }

    return { success: true, certificateId };
  });

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Class-level analytics: counts and revenue grouped by class_name. */
export const getSchoolClassAnalytics = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const schoolName = await getMySchool(context);
    const target = schoolName.trim().toLowerCase();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const [profilesRes, rosterRes] = await Promise.all([
      supabaseAdmin.from("profiles").select("id, full_name, school_name"),
      supabaseAdmin
        .from("school_rosters")
        .select("normalized_name, class_name")
        .eq("school_admin_id", context.userId),
    ]);
    const profiles = (profilesRes.data ?? []).filter(
      (p) => (p.school_name ?? "").trim().toLowerCase() === target,
    );
    const ids = profiles.map((p) => p.id);
    const rosterClassByName = new Map<string, string | null>();
    for (const r of rosterRes.data ?? []) {
      rosterClassByName.set(r.normalized_name as string, (r.class_name as string | null) ?? null);
    }

    const [progRes, payRes] = await Promise.all([
      ids.length
        ? supabaseAdmin
            .from("course_progress")
            .select("user_id, is_completed")
            .in("user_id", ids)
        : Promise.resolve({ data: [] as any[] }),
      ids.length
        ? supabaseAdmin
            .from("certificate_payments")
            .select("user_id, amount, certificate_type, payment_status")
            .in("user_id", ids)
        : Promise.resolve({ data: [] as any[] }),
    ]);

    type Bucket = {
      className: string;
      students: number;
      coursesStarted: number;
      coursesCompleted: number;
      certificatesPaid: number;
      diplomasPaid: number;
      revenue: number;
    };
    const buckets = new Map<string, Bucket>();
    const get = (cls: string) => {
      let b = buckets.get(cls);
      if (!b) {
        b = {
          className: cls,
          students: 0,
          coursesStarted: 0,
          coursesCompleted: 0,
          certificatesPaid: 0,
          diplomasPaid: 0,
          revenue: 0,
        };
        buckets.set(cls, b);
      }
      return b;
    };

    const classByUser = new Map<string, string>();
    for (const p of profiles) {
      const cls = rosterClassByName.get((p.full_name ?? "").trim().toLowerCase()) ?? "Unassigned";
      classByUser.set(p.id, cls);
      get(cls).students += 1;
    }
    for (const row of (progRes.data as any[]) ?? []) {
      const cls = classByUser.get(row.user_id);
      if (!cls) continue;
      const b = get(cls);
      b.coursesStarted += 1;
      if (row.is_completed) b.coursesCompleted += 1;
    }
    for (const row of (payRes.data as any[]) ?? []) {
      const cls = classByUser.get(row.user_id);
      if (!cls) continue;
      if (!["paid_pending_admin", "noted", "certificate_sent"].includes(row.payment_status)) continue;
      const b = get(cls);
      b.revenue += Number(row.amount ?? 0);
      if (row.certificate_type === "diploma") b.diplomasPaid += 1;
      else b.certificatesPaid += 1;
    }

    const classes = Array.from(buckets.values()).sort((a, b) =>
      a.className.localeCompare(b.className),
    );
    const totals = classes.reduce(
      (acc, b) => ({
        students: acc.students + b.students,
        coursesStarted: acc.coursesStarted + b.coursesStarted,
        coursesCompleted: acc.coursesCompleted + b.coursesCompleted,
        certificatesPaid: acc.certificatesPaid + b.certificatesPaid,
        diplomasPaid: acc.diplomasPaid + b.diplomasPaid,
        revenue: acc.revenue + b.revenue,
      }),
      { students: 0, coursesStarted: 0, coursesCompleted: 0, certificatesPaid: 0, diplomasPaid: 0, revenue: 0 },
    );
    return { schoolName, classes, totals };
  });
