import { Turnstile } from "@marsidev/react-turnstile";

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

/** Renders the Cloudflare Turnstile widget when a site key is configured. */
export const captchaEnabled = Boolean(siteKey);

export function TurnstileCaptcha({ onVerify }: { onVerify: (token: string | null) => void }) {
  if (!siteKey) return null;
  return (
    <div className="flex justify-center">
      <Turnstile
        siteKey={siteKey}
        onSuccess={(token) => onVerify(token)}
        onError={() => onVerify(null)}
        onExpire={() => onVerify(null)}
        options={{ theme: "light", size: "normal" }}
      />
    </div>
  );
}
