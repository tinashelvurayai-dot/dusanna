import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type LegalType = "privacy" | "terms";

interface LegalModalProps {
  open: boolean;
  type: LegalType | null;
  onClose: () => void;
}

export function LegalModal({ open, type, onClose }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">
            {type === "privacy" ? "Privacy Policy" : "Terms of Use"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-blue-900 text-sm leading-relaxed">
          {type === "privacy" ? <PrivacyBody /> : <TermsBody />}
        </div>
        <DialogFooter className="sticky bottom-0 bg-white pt-4">
          <Button onClick={onClose} className="premium-button">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold text-blue-900 mt-4 mb-2">{children}</h2>;
}

function PrivacyBody() {
  return (
    <>
      <p className="text-blue-600">Last updated: January 2024</p>
      <section>
        <H>1. Introduction</H>
        <p>Edusanna ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website and use our online learning platform.</p>
      </section>
      <section>
        <H>2. Information We Collect</H>
        <p className="font-semibold">Personal Information</p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>Full name, email address and phone number</li>
          <li>Country, city and location information</li>
          <li>School or institution name (for Academia plan users)</li>
          <li>Password and account credentials</li>
        </ul>
        <p className="font-semibold">Usage Data</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Course enrollment and completion data</li>
          <li>Learning progress and module completion</li>
          <li>Device information and IP addresses</li>
        </ul>
      </section>
      <section>
        <H>3. How We Use Your Information</H>
        <ul className="list-disc list-inside space-y-1">
          <li>Create and manage your account</li>
          <li>Deliver course content and learning materials</li>
          <li>Track your progress and issue credentials</li>
          <li>Process payments for certificates</li>
          <li>Improve our platform and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>
      <section>
        <H>4. Data Security</H>
        <p>We implement comprehensive security measures including encryption in transit and at rest, Row Level Security and regular security audits.</p>
      </section>
      <section>
        <H>5. Payments &amp; No Refunds</H>
        <p>Learning is free. You pay only when you choose to receive an official Certificate or Diploma. All credential payments are final and <strong>non-refundable</strong> once the credential is issued.</p>
      </section>
      <section>
        <H>6. Third-Party Services</H>
        <p>We use PayPal for payment processing and analytics providers for product insights. These services have their own privacy policies.</p>
      </section>
      <section>
        <H>7. Your Privacy Rights</H>
        <p>You can access, correct, download or request deletion of your data, and opt-out of marketing communications at any time.</p>
      </section>
      <section>
        <H>8. Contact Us</H>
        <p>Questions about this policy? Email edusannaonlinelearning@gmail.com</p>
      </section>
    </>
  );
}

function TermsBody() {
  return (
    <>
      <p className="text-blue-600">Last updated: January 2024</p>
      <section>
        <H>1. Acceptance of Terms</H>
        <p>By accessing and using Edusanna, you accept and agree to be bound by these terms. If you do not agree, please do not use this service.</p>
      </section>
      <section>
        <H>2. User Accounts</H>
        <p>You agree to provide accurate information and to maintain the confidentiality of your account. You are responsible for all activity under your account.</p>
      </section>
      <section>
        <H>3. Course Content</H>
        <p>All course materials are protected by copyright. You may use them for personal, non-commercial educational purposes only. Do not redistribute or share account credentials.</p>
      </section>
      <section>
        <H>4. Certificates and Credentials</H>
        <p>Certificates and diplomas are issued by Edusanna and represent completion of our courses. They should not be represented as accredited degrees unless explicitly stated.</p>
      </section>
      <section>
        <H>5. Payments and No Refunds</H>
        <p>Learning is free. Payment is only required if you want an official Certificate ($12) or Diploma ($18). <strong>All credential payments are final and non-refundable</strong> once the credential is issued. Please make sure you have completed the course and reviewed the details before paying.</p>
      </section>
      <section>
        <H>6. Prohibited Activities</H>
        <ul className="list-disc list-inside space-y-1">
          <li>Harassment, abuse or discrimination</li>
          <li>Malicious code or phishing</li>
          <li>Unauthorized access attempts</li>
          <li>Infringing intellectual property</li>
        </ul>
      </section>
      <section>
        <H>7. Limitation of Liability</H>
        <p>Edusanna and its affiliates are not liable for any indirect, incidental or consequential damages arising from use of the platform, to the fullest extent permitted by law.</p>
      </section>
      <section>
        <H>8. Modifications</H>
        <p>We may update these terms at any time. Continued use of the platform after notice constitutes acceptance of the updated terms.</p>
      </section>
      <section>
        <H>9. Contact Us</H>
        <p>Questions about these terms? Email edusannaonlinelearning@gmail.com</p>
      </section>
    </>
  );
}