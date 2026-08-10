import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

import { getCoursePrice, type PriceLevel } from "@/lib/pricing";
const ALLOWED_METHODS = ["ecocash", "mukuru", "wechat_pay"] as const;
type Method = (typeof ALLOWED_METHODS)[number];

/** Standard user submits an alt-payment request after picking 1-3 methods. */
export const submitAltPaymentRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    (input: {
      courseId: string;
      courseName: string;
      level: "certificate" | "diploma";
      methods: string[];
    }) => {
      if (!input?.courseId) throw new Error("Missing course");
      if (!input?.courseName?.trim()) throw new Error("Missing course name");
      if (input.level !== "certificate" && input.level !== "diploma") throw new Error("Invalid level");
      const methods = Array.from(
        new Set((input.methods ?? []).filter((m): m is Method => ALLOWED_METHODS.includes(m as Method))),
      );
      if (methods.length === 0) throw new Error("Pick at least one payment method");
      return { courseId: input.courseId, courseName: input.courseName.trim(), level: input.level, methods };
    },
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("full_name, email, signup_type")
      .eq("id", context.userId)
      .maybeSingle();
    if (!profile) throw new Error("Profile not found.");
    if ((profile.signup_type ?? "standard") !== "standard") {
      throw new Error("Alt payment is only available for standard learners.");
    }

    // De-dup pending requests for same course+level
    const { data: existing } = await supabaseAdmin
      .from("alt_payment_requests")
      .select("id")
      .eq("user_id", context.userId)
      .eq("course_id", data.courseId)
      .eq("level", data.level)
      .eq("status", "pending");
    if (existing && existing.length > 0) {
      return { success: true, alreadySubmitted: true };
    }

    const { error } = await supabaseAdmin.from("alt_payment_requests").insert({
      user_id: context.userId,
      student_name: profile.full_name,
      email: profile.email ?? null,
      course_id: data.courseId,
      course_name: data.courseName,
      level: data.level,
      amount: getCoursePrice(data.courseId, data.level as PriceLevel),
      methods: data.methods,
      status: "pending",
    });
    if (error) throw new Error(error.message);

    // Telegram alert (non-blocking)
    try {
      const { notifyAdminTelegram } = await import("@/lib/notify.server");
      const label = data.level === "diploma" ? "Diploma" : "Certificate";
      const methodLabel = data.methods
        .map((m) => (m === "wechat_pay" ? "WeChat Pay" : m === "mukuru" ? "Mukuru" : "Ecocash"))
        .join(", ");
      await notifyAdminTelegram(
        `Alt-payment request: ${label} for "${data.courseName}" by ${profile.full_name ?? profile.email ?? "learner"} (${profile.email ?? "no email"}). Preferred: ${methodLabel}. Amount: $${getCoursePrice(data.courseId, data.level as PriceLevel)}.`,
      );
    } catch {
      /* never block */
    }

    return { success: true, alreadySubmitted: false };
  });

/** Student: list their own alt-payment requests (for dashboard status). */
export const listMyAltPaymentRequests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("alt_payment_requests")
      .select("id, course_id, course_name, level, methods, status, amount, created_at, received_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return { requests: data ?? [] };
  });

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
  if (error || !data) throw new Error("Forbidden: admin access required");
}

/** Admin: list all alt-payment requests. */
export const listAltPaymentRequests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("alt_payment_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return { requests: data ?? [] };
  });

/** Admin: mark alt-payment request as received (payment confirmed offline). */
export const markAltPaymentReceived = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { id: string }) => {
    if (!input?.id) throw new Error("Missing id");
    return input;
  })
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Load the request to also create a certificate_payments row so the
    // standard cert workflow picks the learner up.
    const { data: req, error: reqErr } = await supabaseAdmin
      .from("alt_payment_requests")
      .select("*")
      .eq("id", data.id)
      .maybeSingle();
    if (reqErr) throw reqErr;
    if (!req) throw new Error("Request not found");
    if (req.status === "received") return { success: true, alreadyReceived: true };

    const certificateId = `EDU-ALT-${Date.now().toString(36).toUpperCase()}`;
    const { error: payErr } = await supabaseAdmin.from("certificate_payments").insert({
      user_id: req.user_id,
      student_name: req.student_name,
      email: req.email,
      course_id: req.course_id,
      course_name: req.course_name,
      certificate_type: req.level,
      amount: req.amount,
      payment_status: "noted",
      certificate_id: certificateId,
    });
    if (payErr) throw payErr;

    const { error } = await supabaseAdmin
      .from("alt_payment_requests")
      .update({ status: "received", received_at: new Date().toISOString(), received_by: context.userId })
      .eq("id", data.id);
    if (error) throw error;
    return { success: true, certificateId };
  });
