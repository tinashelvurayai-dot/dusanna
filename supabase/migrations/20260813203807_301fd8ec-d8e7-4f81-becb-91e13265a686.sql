
CREATE TABLE IF NOT EXISTS public.enrollment_certificate_ids (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id text NOT NULL,
  level text NOT NULL,
  student_name text,
  course_title text,
  certificate_id text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id, level)
);
GRANT ALL ON public.enrollment_certificate_ids TO service_role;
ALTER TABLE public.enrollment_certificate_ids ENABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS public.notification_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  event_key text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.notification_log TO service_role;
ALTER TABLE public.notification_log ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.allocate_enrollment_certificate_id()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.enrollment_certificate_ids (user_id, course_id, level, course_title, certificate_id, student_name)
  VALUES (
    NEW.user_id,
    NEW.course_id,
    NEW.level,
    NEW.course_title,
    'EDU-' || upper(substr(encode(gen_random_bytes(6), 'hex'), 1, 10)),
    (SELECT full_name FROM public.profiles WHERE id = NEW.user_id)
  )
  ON CONFLICT (user_id, course_id, level) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enrollments_allocate_certificate_id ON public.enrollments;
CREATE TRIGGER enrollments_allocate_certificate_id
AFTER INSERT ON public.enrollments
FOR EACH ROW EXECUTE FUNCTION public.allocate_enrollment_certificate_id();

INSERT INTO public.enrollment_certificate_ids (user_id, course_id, level, course_title, certificate_id, student_name)
SELECT e.user_id, e.course_id, e.level, e.course_title,
       'EDU-' || upper(substr(encode(gen_random_bytes(6), 'hex'), 1, 10)),
       p.full_name
FROM public.enrollments e
LEFT JOIN public.profiles p ON p.id = e.user_id
ON CONFLICT (user_id, course_id, level) DO NOTHING;
