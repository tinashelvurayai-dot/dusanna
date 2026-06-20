INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin'::app_role
FROM auth.users u
WHERE lower(u.email) IN ('edusannaonlinelearning@gmail.com', 'tinashelvurayai@gmail.com')
ON CONFLICT (user_id, role) DO NOTHING;