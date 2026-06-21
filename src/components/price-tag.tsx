/**
 * Shared price display showing a struck-through "old" anchor price next to the
 * real discounted price. Anchor prices ($16 Certificate / $24 Diploma) are
 * psychological reference values only - actual charges remain $12 / $18.
 */
import { cn } from "@/lib/utils";

export const CERT_PRICE = 12;
export const DIPLOMA_PRICE = 18;
export const CERT_OLD = 16;
export const DIPLOMA_OLD = 24;

interface PriceTagProps {
  level: "certificate" | "diploma";
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
}

export function PriceTag({ level, size = "md", className, showLabel = false }: PriceTagProps) {
  const isCert = level === "certificate";
  const now = isCert ? CERT_PRICE : DIPLOMA_PRICE;
  const old = isCert ? CERT_OLD : DIPLOMA_OLD;
  const pct = Math.round(((old - now) / old) * 100);

  const sizes = {
    sm: { now: "text-sm font-bold", old: "text-xs", badge: "text-[10px] px-1.5 py-0.5" },
    md: { now: "text-base font-bold", old: "text-sm", badge: "text-xs px-2 py-0.5" },
    lg: { now: "text-2xl font-black", old: "text-base", badge: "text-xs px-2 py-1" },
  }[size];

  return (
    <span className={cn("inline-flex items-baseline gap-1.5 whitespace-nowrap", className)}>
      {showLabel && <span className="text-blue-700 mr-1">{isCert ? "Certificate" : "Diploma"}</span>}
      <span className={cn("text-blue-400 line-through", sizes.old)}>${old}</span>
      <span className={cn("text-green-700", sizes.now)}>${now}</span>
      <span className={cn("rounded-full bg-green-100 text-green-700 font-bold", sizes.badge)}>
        -{pct}%
      </span>
    </span>
  );
}
