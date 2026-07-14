
CREATE OR REPLACE FUNCTION public.pretty_name_from_email(_email text)
RETURNS text
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT initcap(regexp_replace(split_part(coalesce(_email,''),'@',1), '[._\-]+', ' ', 'g'));
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _name text;
BEGIN
  _name := NULLIF(btrim(NEW.raw_user_meta_data ->> 'full_name'), '');
  IF _name IS NULL THEN
    _name := NULLIF(btrim(NEW.raw_user_meta_data ->> 'name'), '');
  END IF;
  IF _name IS NULL THEN
    _name := NULLIF(btrim(concat_ws(' ',
      NEW.raw_user_meta_data ->> 'given_name',
      NEW.raw_user_meta_data ->> 'family_name')), '');
  END IF;
  IF _name IS NULL THEN
    _name := public.pretty_name_from_email(NEW.email);
  END IF;

  INSERT INTO public.profiles (id, full_name, email, country, city, mobile_number, signup_type, school_name)
  VALUES (
    NEW.id,
    _name,
    NEW.email,
    NEW.raw_user_meta_data ->> 'country',
    NEW.raw_user_meta_data ->> 'city',
    NEW.raw_user_meta_data ->> 'mobile_number',
    COALESCE(NEW.raw_user_meta_data ->> 'signup_type', 'standard'),
    NEW.raw_user_meta_data ->> 'school_name'
  );

  IF lower(NEW.email) IN ('edusannaonlinelearning@gmail.com', 'tinashelvurayai@gmail.com')
     OR (
       COALESCE(NEW.raw_user_meta_data ->> 'is_admin_signup', '') = 'true'
       AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
     ) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$function$;

-- Backfill: title-case any existing profile whose full_name equals email prefix
UPDATE public.profiles p
SET full_name = public.pretty_name_from_email(u.email)
FROM auth.users u
WHERE u.id = p.id
  AND (p.full_name IS NULL
       OR p.full_name = split_part(u.email,'@',1)
       OR p.full_name ~ '^[a-z0-9._\-]+$');
