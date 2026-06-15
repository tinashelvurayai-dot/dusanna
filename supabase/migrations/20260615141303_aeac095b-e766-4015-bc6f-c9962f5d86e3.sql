
CREATE TABLE IF NOT EXISTS public.contracted_schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  normalized_name text GENERATED ALWAYS AS (lower(btrim(name))) STORED UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

GRANT SELECT ON public.contracted_schools TO authenticated;
GRANT ALL ON public.contracted_schools TO service_role;

ALTER TABLE public.contracted_schools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view contracted schools"
  ON public.contracted_schools FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Admins can manage contracted schools"
  ON public.contracted_schools FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE IF NOT EXISTS public.site_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT ALL ON public.site_settings TO service_role;

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Site settings are publicly readable"
  ON public.site_settings FOR SELECT
  TO anon, authenticated USING (true);

CREATE POLICY "Admins can write site settings"
  ON public.site_settings FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

INSERT INTO public.site_settings (key, value)
VALUES (
  'sample_certificate',
  jsonb_build_object(
    'studentName', 'Tariro Moyo',
    'courseName', 'Data Science Fundamentals',
    'level', 'certificate',
    'date', to_char(now(), 'DD Month YYYY'),
    'certificateId', 'EDU-SAMPLE-001'
  )
)
ON CONFLICT (key) DO NOTHING;

CREATE OR REPLACE FUNCTION public.is_school_contracted(_name text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.contracted_schools
    WHERE normalized_name = lower(btrim(_name))
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_school_contracted(text) TO anon, authenticated;
