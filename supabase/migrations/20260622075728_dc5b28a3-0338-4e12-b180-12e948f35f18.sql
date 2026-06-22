CREATE TABLE public.alt_payment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_name text,
  email text,
  course_id text NOT NULL,
  course_name text NOT NULL,
  level text NOT NULL CHECK (level IN ('certificate','diploma')),
  amount numeric NOT NULL,
  methods text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','received','cancelled')),
  notes text,
  received_at timestamptz,
  received_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.alt_payment_requests TO authenticated;
GRANT ALL ON public.alt_payment_requests TO service_role;

ALTER TABLE public.alt_payment_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users insert own alt payment" ON public.alt_payment_requests
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users view own alt payment" ON public.alt_payment_requests
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin'));

CREATE POLICY "admin update alt payment" ON public.alt_payment_requests
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(),'admin'))
  WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TRIGGER alt_payment_requests_updated_at
  BEFORE UPDATE ON public.alt_payment_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_alt_payment_requests_user ON public.alt_payment_requests(user_id);
CREATE INDEX idx_alt_payment_requests_status ON public.alt_payment_requests(status);