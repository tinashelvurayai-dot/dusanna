import { supabase } from "@/integrations/supabase/client";

/**
 * Decides where to send a user right after they sign in.
 * - app admin -> /admin
 * - school admin -> /school-admin
 * - everyone else -> /dashboard
 */
export async function resolvePostLoginRoute(userId: string): Promise<"/admin" | "/school-admin" | "/dashboard"> {
  try {
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const set = new Set((roles ?? []).map((r) => r.role));
    if (set.has("admin")) return "/admin";
    if (set.has("school_admin")) return "/school-admin";
  } catch {
    /* fall through */
  }
  return "/dashboard";
}
