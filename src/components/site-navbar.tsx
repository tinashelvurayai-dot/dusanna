import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, LogOut, ShieldCheck, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { checkIsAdmin } from "@/lib/admin.functions";
const logo = { url: "/logo.webp" };



export function SiteNavbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const checkAdmin = useServerFn(checkIsAdmin);
  const { data: adminData } = useQuery({
    queryKey: ["is-admin", user?.id],
    queryFn: () => checkAdmin(),
    enabled: !!user,
    staleTime: 5 * 60_000,
  });

  // Admin gate access lives only on the footer logo. The header logo is a
  // plain link home with no hidden shortcut.

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSignOut = async () => {
    setMobileMenuOpen(false);
    await signOut();
    navigate({ to: "/" });
  };

  const mobileLink =
    "block w-full rounded-xl px-4 py-3 text-base font-semibold !text-blue-900 bg-white border border-blue-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600";

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[rgba(7,9,26,0.7)] border-b border-[rgba(139,124,255,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition min-w-0">
            <img src={logo.url} alt="Edusanna logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-lg sm:text-2xl font-bold gradient-text leading-tight truncate">EDUSANNA</span>
              <span className="text-xs text-blue-600 font-medium truncate">Elevate Your Mind</span>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
            <Link to="/courses" className="hidden sm:inline">
              <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 text-sm">Courses</Button>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-blue-700 hover:bg-blue-50 text-sm">
                    <LayoutDashboard className="w-4 h-4 mr-1.5" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Button>
                </Link>
                {adminData?.isAdmin && (
                  <Link to="/admin">
                    <Button variant="ghost" className="text-purple-700 hover:bg-purple-50 text-sm">
                      <ShieldCheck className="w-4 h-4 sm:mr-1.5" />
                      <span className="hidden sm:inline">Admin</span>
                    </Button>
                  </Link>
                )}
                <Button onClick={handleSignOut} variant="ghost" className="text-blue-700 hover:bg-blue-50 text-sm">
                  <LogOut className="w-4 h-4 sm:mr-1.5" />
                  <span className="hidden sm:inline">Sign out</span>
                </Button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-nav"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <Link to="/auth" search={{ mode: "login" }} className="hidden sm:inline">
                  <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 text-sm">Login</Button>
                </Link>
                <Link to="/auth" search={{ mode: "signup" }}>
                  <Button className="premium-button text-xs sm:text-base px-3 sm:px-6 py-2 h-auto sm:h-10">
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Start</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-20 z-40 bg-black/40 cursor-default"
          />
          <div
            id="mobile-nav"
            className="relative z-50 border-t border-blue-100 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-xl"
          >
            <Link to="/courses" className={mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Courses
            </Link>
            <Link to="/verify" className={mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Verify Certificate
            </Link>
            <Link
              to="/auth"
              search={{ mode: "login" }}
              className={mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link to="/auth" search={{ mode: "signup" }} onClick={() => setMobileMenuOpen(false)} className="block">
              <Button className="premium-button w-full py-3 text-base">Get Started Free</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
