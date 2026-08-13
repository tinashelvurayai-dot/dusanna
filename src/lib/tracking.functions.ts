import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { isSpecialCourse } from "@/lib/special-courses";

/** Record a one-time event so the same Telegram alert is never sent twice.
 *  Returns true when this is the first time the event happens. */
async function claimEvent(eventKey: string, userId: string): Promise<boolean> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin
    .from("notification_log")
    .insert({ event_key: eventKey, user_id: userId });
  return !error;
}

async function loadProfile(userId: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin
    .from("profiles")
    .select("full_name, email, signup_type, school_name")
    .eq("id", userId)
    .maybeSingle();
  return data;
}

function methodLabel(signupType: string, special: boolean) {
  if (special) return "Flexible payment options (AHEP special programme)";
  if (signupType === "academia") return "Cash via school admin (Academia)";
  return "PayPal or alternative method (Standard)";
}

/** Fired the first time an authenticated learner is seen after signing up. */
export const notifySignupEvent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const profile = await loadProfile(context.userId);
    if (!profile) return { sent: false };
    if (!(await claimEvent(`signup:${context.userId}`, context.userId))) return { sent: false };

    const signupType = (profile.signup_type ?? "standard") === "academia" ? "Academia" : "Standard";
    const { notifyAdminTelegram } = await import("@/lib/notify.server");
    await notifyAdminTelegram(
      [
        "🆕 <b>New sign up</b>",
        `Student: <b>${profile.full_name ?? "Unnamed"}</b>`,
        `Sign up method: <b>${signupType}</b>`,
        profile.school_name ? `School: ${profile.school_name}` : null,
        profile.email ? `Email: ${profile.email}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    return { sent: true };
  });

/** Fired when a learner starts the AHEP special programme. */
export const notifyCourseStarted = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { courseId: string; courseName: string; level: string }) => {
    if (!input?.courseId) throw new Error("Missing course");
    return {
      courseId: input.courseId,
      courseName: (input.courseName ?? "").slice(0, 200),
      level: input.level === "diploma" ? "diploma" : "certificate",
    };
  })
  .handler(async ({ data, context }) => {
    if (!isSpecialCourse(data.courseId)) return { sent: false };
    const profile = await loadProfile(context.userId);
    if (!profile) return { sent: false };
    const key = `start:${context.userId}:${data.courseId}:${data.level}`;
    if (!(await claimEvent(key, context.userId))) return { sent: false };

    const signupType = (profile.signup_type ?? "standard") === "academia" ? "Academia" : "Standard";
    const { notifyAdminTelegram } = await import("@/lib/notify.server");
    await notifyAdminTelegram(
      [
        "🌍 <b>Special programme started</b>",
        `Student: <b>${profile.full_name ?? "Unnamed"}</b>`,
        `Sign up method: <b>${signupType}</b>`,
        `Programme: ${data.courseName}`,
        profile.email ? `Email: ${profile.email}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    return { sent: true };
  });

/** Fired the first time a learner finishes every module of a course. */
export const notifyCourseCompleted = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { courseId: string; courseName: string; level: string }) => {
    if (!input?.courseId) throw new Error("Missing course");
    return {
      courseId: input.courseId,
      courseName: (input.courseName ?? "").slice(0, 200),
      level: input.level === "diploma" ? "diploma" : "certificate",
    };
  })
  .handler(async ({ data, context }) => {
    const profile = await loadProfile(context.userId);
    if (!profile) return { sent: false };
    const key = `complete:${context.userId}:${data.courseId}:${data.level}`;
    if (!(await claimEvent(key, context.userId))) return { sent: false };

    const special = isSpecialCourse(data.courseId);
    const signupTypeRaw = profile.signup_type ?? "standard";
    const signupType = signupTypeRaw === "academia" ? "Academia" : "Standard";
    const { notifyAdminTelegram } = await import("@/lib/notify.server");
    await notifyAdminTelegram(
      [
        special ? "⭐ <b>Special programme completed</b>" : "🏁 <b>Course completed</b>",
        `Student: <b>${profile.full_name ?? "Unnamed"}</b>`,
        `Sign up method: <b>${signupType}</b>`,
        `Course: ${data.courseName} (${data.level})`,
        `Payment method: ${methodLabel(signupTypeRaw, special)}`,
        profile.school_name ? `School: ${profile.school_name}` : null,
        profile.email ? `Email: ${profile.email}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    return { sent: true };
  });

/** Admin only: the private credential ID allocated to every enrolment. */
export const listEnrollmentCertificateIds = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden: admin access required");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("enrollment_certificate_ids")
      .select("id, user_id, course_id, level, course_title, certificate_id, student_name, created_at")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) throw new Error(error.message);
    return { rows: data ?? [] };
  });
