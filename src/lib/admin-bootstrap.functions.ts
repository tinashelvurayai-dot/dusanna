import { createServerFn } from "@tanstack/react-start";

/**
 * Hardcoded server-side allowlist of admin email addresses. The list never
 * leaves the server; an attacker can only abuse this endpoint by guessing an
 * email that is already on the list AND a password they want to use.
 *
 * On call:
 *   1. Verify the requested email is in the allowlist.
 *   2. Look up the user by email; create them with `email_confirm: true` if
 *      missing, otherwise update their password to whatever was supplied.
 *   3. Ensure the `admin` role is granted in `public.user_roles`.
 *
 * After this returns, the client can call `supabase.auth.signInWithPassword`
 * with the same credentials and land in the admin dashboard without having
 * to wait for an email confirmation.
 */
const ADMIN_ALLOWLIST = new Set([
  "edusannaonlinelearning@gmail.com",
  "tinashelvurayai@gmail.com",
]);

export const provisionAdmin = createServerFn({ method: "POST" })
  .inputValidator((input: { email: string; password: string }) => {
    const email = (input?.email ?? "").trim().toLowerCase();
    const password = input?.password ?? "";
    if (!email.includes("@")) throw new Error("Invalid email");
    if (password.length < 6) throw new Error("Password too short");
    if (!ADMIN_ALLOWLIST.has(email)) throw new Error("Not an admin account");
    return { email, password };
  })
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Find existing user by email by paginating the auth admin list.
    let foundId: string | null = null;
    let page = 1;
    // Cap at 10 pages (10k users) - far beyond expected admin count.
    while (page <= 10 && !foundId) {
      const { data: list, error } = await supabaseAdmin.auth.admin.listUsers({
        page,
        perPage: 1000,
      });
      if (error) throw error;
      const hit = list.users.find((u) => u.email?.toLowerCase() === data.email);
      if (hit) {
        foundId = hit.id;
        break;
      }
      if (list.users.length < 1000) break;
      page += 1;
    }

    let userId = foundId;
    if (!userId) {
      const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
        email: data.email,
        password: data.password,
        email_confirm: true,
        user_metadata: {
          full_name: data.email.split("@")[0],
          signup_type: "standard",
          is_admin_signup: "true",
        },
      });
      if (error) throw error;
      userId = created.user!.id;
    } else {
      // Reset password to whatever the admin just typed so they can sign in.
      const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        password: data.password,
        email_confirm: true,
      });
      if (error) throw error;
    }

    // Idempotently grant the admin role.
    const { error: roleError } = await supabaseAdmin
      .from("user_roles")
      .upsert(
        { user_id: userId, role: "admin" as const },
        { onConflict: "user_id,role", ignoreDuplicates: true },
      );
    if (roleError) throw roleError;

    return { success: true };
  });
