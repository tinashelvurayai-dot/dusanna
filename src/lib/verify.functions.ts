import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Public credential verification. Anyone (employer, certificate owner, etc.)
 * can look up a certificate or diploma by its verification ID without being
 * signed in. Only credentials that the admin has actually sent
 * (payment_status = "certificate_sent") are treated as valid.
 *
 * Returns only the minimal information needed to verify - never PII like
 * email or payment amounts.
 */
export const verifyCertificate = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({ certificateId: z.string().trim().min(3).max(64) }).parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const id = data.certificateId.toUpperCase();

    const { data: row, error } = await supabaseAdmin
      .from("certificate_payments")
      .select("certificate_id, certificate_type, student_name, course_name, payment_status, updated_at")
      .ilike("certificate_id", id)
      .maybeSingle();

    if (error) {
      return { valid: false as const, reason: "lookup_failed" as const };
    }
    if (!row || !row.certificate_id) {
      return { valid: false as const, reason: "not_found" as const };
    }
    if (row.payment_status !== "certificate_sent") {
      return { valid: false as const, reason: "not_issued" as const };
    }

    return {
      valid: true as const,
      certificateId: row.certificate_id,
      level: row.certificate_type === "diploma" ? ("diploma" as const) : ("certificate" as const),
      studentName: row.student_name ?? "",
      courseName: row.course_name ?? "",
      issuedAt: row.updated_at,
    };
  });
