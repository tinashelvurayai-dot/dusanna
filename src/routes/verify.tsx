import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ShieldCheck, CheckCircle2, XCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { verifyCertificate } from "@/lib/verify.functions";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Verify a Certificate or Diploma | Edusanna" },
      {
        name: "description",
        content:
          "Verify the authenticity of any Edusanna certificate or diploma. Enter the verification ID printed on the credential to confirm the holder, course and credential level.",
      },
      { property: "og:title", content: "Verify a Credential - Edusanna" },
      {
        property: "og:description",
        content: "Confirm an Edusanna certificate or diploma in seconds using its verification ID.",
      },
    ],
  }),
  component: VerifyPage,
});

type Result =
  | { valid: true; certificateId: string; level: "certificate" | "diploma"; studentName: string; courseName: string; issuedAt: string }
  | { valid: false; reason: "not_found" | "not_issued" | "lookup_failed" };

function VerifyPage() {
  const verify = useServerFn(verifyCertificate);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = id.trim();
    if (trimmed.length < 3) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await verify({ data: { certificateId: trimmed } });
      setResult(res as Result);
    } catch {
      setResult({ valid: false, reason: "lookup_failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SiteNavbar />
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-800">Credential Verification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black gradient-text mb-3">Verify a Credential</h1>
            <p className="text-blue-800">
              Enter the verification ID printed on the certificate or diploma to confirm it was
              issued by Edusanna.
            </p>
          </div>

          <form onSubmit={onSubmit} className="glass-card-light p-6 space-y-4">
            <div>
              <Label htmlFor="cid" className="text-blue-900 font-semibold">Verification ID</Label>
              <Input
                id="cid"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="e.g. EDU-CASH-XXXXXX"
                className="h-12 text-base mt-1"
                autoComplete="off"
                autoFocus
              />
              <p className="text-xs text-blue-500 mt-1">
                You can find this ID near the bottom of the credential.
              </p>
            </div>
            <Button type="submit" disabled={loading || id.trim().length < 3} className="premium-button w-full">
              <Search className="w-4 h-4 mr-2" />
              {loading ? "Verifying..." : "Verify credential"}
            </Button>
          </form>

          {result && (
            <div className="mt-6">
              {result.valid ? (
                <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                    <div>
                      <h2 className="text-xl font-bold text-green-900">Verified - genuine credential</h2>
                      <p className="text-sm text-green-700">
                        This {result.level} was issued by Edusanna.
                      </p>
                    </div>
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <Row label="Holder" value={result.studentName || "-"} />
                    <Row label="Level" value={result.level === "diploma" ? "Diploma" : "Certificate"} />
                    <Row label="Course" value={result.courseName || "-"} />
                    <Row label="Verification ID" value={result.certificateId} />
                    <Row
                      label="Issued"
                      value={new Date(result.issuedAt).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    />
                  </dl>
                </div>
              ) : (
                <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-8 h-8 text-red-600" />
                    <div>
                      <h2 className="text-xl font-bold text-red-900">Not verified</h2>
                      <p className="text-sm text-red-700">
                        {result.reason === "not_found"
                          ? "We could not find a credential with that ID. Double-check the ID and try again."
                          : result.reason === "not_issued"
                          ? "A credential with that ID exists but has not been officially issued yet."
                          : "Something went wrong checking this ID. Please try again."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-green-700 font-semibold">{label}</dt>
      <dd className="text-green-950 font-semibold break-words">{value}</dd>
    </div>
  );
}
