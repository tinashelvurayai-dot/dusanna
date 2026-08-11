import { Component, type ReactNode } from "react";
import { reportLovableError } from "@/lib/lovable-error-reporting";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Last-resort boundary around the whole app. Instead of a blank white screen
 * when a chunk fails to load or a render throws, learners get a branded card
 * with a refresh action.
 */
export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    reportLovableError(error, { boundary: "app_error_boundary" });
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-blue-200 bg-white/90 p-8 text-center shadow-xl backdrop-blur">
          <img
            src="/logo.webp"
            alt="Edusanna logo"
            width={72}
            height={72}
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h1 className="text-xl font-bold text-blue-900">Something went wrong</h1>
          <p className="mt-2 text-sm text-blue-700">Please try refreshing the page.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="premium-button mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
}
