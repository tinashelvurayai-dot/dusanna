// Client-only error monitoring. Loads lazily so SSR/Worker bundles stay clean
// and so the app works fine when no DSN is configured.

let initPromise: Promise<void> | null = null;

const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;

export function initSentry() {
  if (typeof window === "undefined" || !dsn || initPromise) return initPromise ?? Promise.resolve();
  initPromise = import("@sentry/react").then((Sentry) => {
    Sentry.init({
      dsn,
      integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0.01,
      replaysOnErrorSampleRate: 1.0,
      environment: import.meta.env.MODE,
    });
  });
  return initPromise;
}

export function captureError(error: unknown, context?: Record<string, unknown>) {
  if (typeof window === "undefined" || !dsn) return;
  void import("@sentry/react").then((Sentry) => {
    Sentry.captureException(error, context ? { extra: context } : undefined);
  });
}
