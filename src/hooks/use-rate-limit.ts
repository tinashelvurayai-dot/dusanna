import { useCallback, useRef } from "react";

/** Simple client-side throttle for submit actions (defence in depth, not a substitute for server limits). */
export function useRateLimit(maxAttempts: number = 5, windowMs: number = 60_000) {
  const attempts = useRef<number[]>([]);

  const checkLimit = useCallback(() => {
    const now = Date.now();
    attempts.current = attempts.current.filter((t) => now - t < windowMs);
    if (attempts.current.length >= maxAttempts) return false;
    attempts.current.push(now);
    return true;
  }, [maxAttempts, windowMs]);

  const remainingTime = useCallback(() => {
    if (attempts.current.length === 0) return 0;
    const oldest = attempts.current[0];
    return Math.max(0, windowMs - (Date.now() - oldest));
  }, [windowMs]);

  return { checkLimit, remainingTime };
}
