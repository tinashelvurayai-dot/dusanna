import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** Return the current authenticated user's full name (for the cert verification step). */
export const getMyFullName = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase
      .from("profiles")
      .select("full_name")
      .eq("id", context.userId)
      .maybeSingle();
    return { fullName: data?.full_name ?? "" };
  });

/** Verify / update the authenticated user's full name. Used right before the
 * student is issued a certificate so the name printed on the credential is
 * the one they actually want. */
export const verifyFullName = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { fullName: string }) => {
    const name = (input?.fullName ?? "").trim();
    if (name.length < 2) throw new Error("Please enter your full name.");
    if (name.length > 120) throw new Error("Name is too long.");
    if (!/\s/.test(name)) throw new Error("Please enter both first and last name.");
    return { fullName: name };
  })
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("profiles")
      .update({ full_name: data.fullName })
      .eq("id", context.userId);
    if (error) throw new Error(error.message);
    return { fullName: data.fullName };
  });
