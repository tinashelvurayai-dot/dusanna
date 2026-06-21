
CREATE TABLE IF NOT EXISTS public.school_admins (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  school_name text NOT NULL,
  normalized_school text GENERATED ALWAYS AS (lower(btrim(school_name))) STORED,
  contact_name text,
  contact_phone text,
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_school_admins_normalized ON public.school_admins (normalized_school);

GRANT SELECT ON public.school_admins TO authenticated;
GRANT ALL ON public.school_admins TO service_role;

ALTER TABLE public.school_admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "School admins can view their own record"
  ON public.school_admins FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all school admins"
  ON public.school_admins FOR SELECT
  TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage school admins"
  ON public.school_admins FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE IF NOT EXISTS public.school_rosters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_admin_id uuid NOT NULL REFERENCES public.school_admins(user_id) ON DELETE CASCADE,
  school_name text NOT NULL,
  normalized_school text GENERATED ALWAYS AS (lower(btrim(school_name))) STORED,
  full_name text NOT NULL,
  normalized_name text GENERATED ALWAYS AS (lower(btrim(full_name))) STORED,
  class_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_school_rosters_admin ON public.school_rosters (school_admin_id);
CREATE INDEX IF NOT EXISTS idx_school_rosters_match ON public.school_rosters (normalized_school, normalized_name);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.school_rosters TO authenticated;
GRANT ALL ON public.school_rosters TO service_role;

ALTER TABLE public.school_rosters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "School admins manage their own roster"
  ON public.school_rosters FOR ALL
  TO authenticated
  USING (auth.uid() = school_admin_id)
  WITH CHECK (auth.uid() = school_admin_id);

CREATE POLICY "Edusanna admins can view rosters"
  ON public.school_rosters FOR SELECT
  TO authenticated USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.certificate_payments
  ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'paypal',
  ADD COLUMN IF NOT EXISTS school_name text,
  ADD COLUMN IF NOT EXISTS class_name text;

CREATE OR REPLACE FUNCTION public.school_for_admin(_user_id uuid)
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT normalized_school FROM public.school_admins WHERE user_id = _user_id LIMIT 1;
$$;
GRANT EXECUTE ON FUNCTION public.school_for_admin(uuid) TO authenticated;

CREATE POLICY "School admins can view their school's profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'school_admin')
    AND lower(btrim(COALESCE(school_name, ''))) = public.school_for_admin(auth.uid())
    AND public.school_for_admin(auth.uid()) IS NOT NULL
    AND public.school_for_admin(auth.uid()) <> ''
  );

CREATE POLICY "School admins can view their school's payments"
  ON public.certificate_payments FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'school_admin')
    AND lower(btrim(COALESCE(school_name, ''))) = public.school_for_admin(auth.uid())
    AND public.school_for_admin(auth.uid()) IS NOT NULL
    AND public.school_for_admin(auth.uid()) <> ''
  );
