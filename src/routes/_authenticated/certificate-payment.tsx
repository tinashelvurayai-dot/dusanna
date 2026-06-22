import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Award, ArrowLeft, Loader2, ShieldCheck, UserCheck, GraduationCap, Smartphone, Wallet, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { toast } from "sonner";
import { getCatalogItem, getCourseTitle, PRICES, type CourseLevel } from "@/lib/courses";
import { createPayPalOrder } from "@/lib/paypal.functions";
import { getMyFullName, verifyFullName, submitAcademiaCertificate } from "@/lib/profile.functions";
import { submitAltPaymentRequest } from "@/lib/alt-payment.functions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Search = { courseId: string; level: CourseLevel; error?: string };

export const Route = createFileRoute("/_authenticated/certificate-payment")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    courseId: String(search.courseId ?? ""),
    level: search.level === "diploma" ? "diploma" : "certificate",
    error: typeof search.error === "string" ? search.error : undefined,
  }),
  component: CertificatePaymentPage,
});

function CertificatePaymentPage() {
  const { courseId, level, error } = Route.useSearch();
  const navigate = useNavigate();
  const createOrder = useServerFn(createPayPalOrder);
  const fetchName = useServerFn(getMyFullName);
  const saveName = useServerFn(verifyFullName);
  const submitAcademia = useServerFn(submitAcademiaCertificate);
  const [loading, setLoading] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);
  const [fullName, setFullName] = useState("");
  const [signupType, setSignupType] = useState<"standard" | "academia">("standard");
  const [schoolName, setSchoolName] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [savingName, setSavingName] = useState(false);

  const item = getCatalogItem(courseId);
  const title = item ? getCourseTitle(item, level) : courseId;
  const price = PRICES[level as CourseLevel];
  const isAcademia = signupType === "academia";

  useEffect(() => {
    if (error === "cancelled") toast.info("Payment cancelled. You can try again any time.");
  }, [error]);

  useEffect(() => {
    let active = true;
    fetchName({})
      .then((r) => {
        if (!active) return;
        setFullName(r.fullName ?? "");
        setSignupType(r.signupType === "academia" ? "academia" : "standard");
        setSchoolName(r.schoolName ?? null);
        setNameLoaded(true);
      })
      .catch(() => setNameLoaded(true));
    return () => {
      active = false;
    };
  }, [fetchName]);

  const handleVerify = async () => {
    setSavingName(true);
    try {
      const r = await saveName({ data: { fullName } });
      setFullName(r.fullName);
      setVerified(true);
      toast.success("Name verified. This is what will appear on your certificate.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save name.");
    } finally {
      setSavingName(false);
    }
  };

  const handlePay = async () => {
    if (!item) {
      toast.error("Course not found.");
      return;
    }
    if (!verified) {
      toast.error("Please verify your full name first.");
      return;
    }
    setLoading(true);
    try {
      const { approveUrl } = await createOrder({
        data: { courseId, courseName: title, level },
      });
      window.location.href = approveUrl;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not start PayPal checkout.");
      setLoading(false);
    }
  };

  const handleAcademiaSubmit = async () => {
    if (!verified) {
      toast.error("Please verify your full name first.");
      return;
    }
    setLoading(true);
    try {
      const r = await submitAcademia({ data: { courseId, courseName: title, level } });
      if (r.alreadySubmitted) {
        toast.info("You already submitted a request for this credential.");
      } else {
        toast.success("Submitted! Your school's admin will issue your credential.");
      }
      navigate({ to: "/dashboard" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not submit request.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-lg mx-auto">
          <button onClick={() => navigate({ to: "/course/$id", params: { id: courseId } })} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to course
          </button>

          <div className="glass-card-light p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-5">
              {isAcademia ? <GraduationCap className="w-8 h-8 text-white" /> : <Award className="w-8 h-8 text-white" />}
            </div>
            <h1 className="text-2xl font-bold text-blue-900 mb-1">
              {isAcademia ? "Request your" : "Official"} {level === "diploma" ? "Diploma" : "Certificate"}
            </h1>
            <p className="text-blue-600 mb-6">{title}</p>

            {/* Full name verification - required before checkout / submission */}
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-6 text-left">
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="w-4 h-4 text-amber-700" />
                <span className="text-sm font-bold text-amber-900">Verify your Full Name</span>
              </div>
              <p className="text-xs text-amber-800 mb-3">
                This is exactly how your name will appear on your certificate. Please double-check the spelling.
              </p>
              <Label htmlFor="full-name" className="text-xs text-blue-900">Full name</Label>
              <Input
                id="full-name"
                value={fullName}
                disabled={!nameLoaded || savingName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setVerified(false);
                }}
                placeholder="Your full legal name"
                className="mt-1 mb-3"
              />
              <Button
                type="button"
                onClick={handleVerify}
                disabled={!nameLoaded || savingName || verified}
                variant={verified ? "outline" : "default"}
                className="w-full"
              >
                {savingName ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                {verified ? "Name verified ✓" : "Verify name"}
              </Button>
            </div>

            {isAcademia ? (
              <>
                <div className="rounded-xl bg-purple-50 border border-purple-100 p-5 mb-6 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-purple-700" />
                    <span className="text-sm font-bold text-purple-900">Academia learner</span>
                  </div>
                  <p className="text-sm text-purple-800">
                    {schoolName ? <>Your school <strong>{schoolName}</strong> covers</> : "Your school covers"} your credential as a cash arrangement with Edusanna. No online payment is required. Submit your request and our team will issue your {level === "diploma" ? "Diploma" : "Certificate"}.
                  </p>
                </div>
                <Button onClick={handleAcademiaSubmit} disabled={loading || !verified} className="premium-button w-full py-3 text-lg">
                  {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
                  Submit request
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-xs text-blue-500 mt-3">
                  <ShieldCheck className="w-4 h-4" /> Your request will appear in the admin dashboard
                </p>
              </>
            ) : (
              <>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 mb-6 text-left">
                  <div className="flex justify-between items-center text-blue-800 mb-2">
                    <span>{level === "diploma" ? "Diploma" : "Certificate"} credential</span>
                    <span className="inline-flex items-baseline gap-2">
                      <span className="text-blue-400 line-through text-sm">${level === "diploma" ? 24 : 16}</span>
                      <span className="font-semibold text-green-700">${price.toFixed(2)}</span>
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-green-700 mb-3">
                    You save ${(level === "diploma" ? 24 : 16) - price}.00 - launch pricing
                  </div>
                  <div className="flex justify-between text-blue-900 font-bold text-lg border-t border-blue-200 pt-2">
                    <span>Total</span>
                    <span>${price.toFixed(2)} USD</span>
                  </div>
                </div>

                <Button onClick={handlePay} disabled={loading || !verified} className="premium-button w-full py-3 text-lg">
                  {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
                  Pay with PayPal
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-xs text-blue-500 mt-3">
                  <ShieldCheck className="w-4 h-4" /> Secure checkout via PayPal
                </p>
              </>
            )}
          </div>

          {!item && (
            <p className="text-center text-sm text-red-600 mt-4">
              Course not found. <Link to="/courses" className="underline">Browse courses</Link>
            </p>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
