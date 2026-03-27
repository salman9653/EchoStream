"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/auth-context";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ's", href: "#faq" },
];

const DASHBOARD_LINKS = [
  { label: "Generator", href: "/dashboard" },
  { label: "History", href: "/dashboard/history" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDashboard = pathname.startsWith("/dashboard");
  const linksToShow = isDashboard ? DASHBOARD_LINKS : NAV_LINKS;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pt-6 pointer-events-none">
      <div className="glass-header shadow-[0px_20px_40px_rgba(17,28,45,0.06)] rounded-full flex justify-between items-center px-8 py-4 w-full max-w-7xl border border-white/20 pointer-events-auto bg-surface-container-lowest/80 backdrop-blur-xl">
        <Link 
          href="/" 
          onClick={() => setActiveLink(null)}
          className="text-2xl font-black tracking-tighter text-foreground font-heading"
        >
          EchoStream
        </Link>
        
        {/* Navigation Links - Only show on landing or large screens */}
        <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-muted-foreground mr-12 bg-surface-container-low p-1.5 rounded-full border border-outline-variant/20">
          {linksToShow.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full transition-colors ${
                  isActive ? "text-on-surface" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-bubble"
                    className="absolute inset-0 bg-surface-container-highest rounded-full -z-10 shadow-sm border border-outline-variant/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden hover:scale-105 active:scale-95 transition-all"
              >
                {user.photoURL ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.photoURL} alt={user.displayName || "User"} className="w-full h-full object-cover" />
                ) : (
                  user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"
                )}
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsProfileOpen(false)}
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-14 w-64 bg-surface-container-highest rounded-2xl shadow-2xl border border-outline-variant/20 p-4 z-50 overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-outline-variant/20">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl overflow-hidden shrink-0">
                          {user.photoURL ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={user.photoURL} alt={user.displayName || "User"} className="w-full h-full object-cover" />
                          ) : (
                            user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"
                          )}
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-bold text-on-surface truncate">{user.displayName || "User"}</p>
                          <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Link 
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="w-full px-4 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors text-sm font-bold text-primary flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[18px]">dashboard</span>
                          Dashboard
                        </Link>
                        <button 
                          onClick={() => {
                            setIsProfileOpen(false);
                            logout();
                          }}
                          className="w-full px-4 py-2.5 rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors text-sm font-bold text-on-surface flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[18px]">logout</span>
                          Log out
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              {pathname === "/login" ? (
                <Link href="/register" className="editorial-gradient text-white px-6 py-2.5 rounded-full font-bold shadow-lg transform transition-transform hover:scale-105 active:scale-95 text-sm md:text-base">
                  Create Account
                </Link>
              ) : pathname === "/register" ? (
                <Link href="/login" className="bg-surface-container-highest text-on-surface border border-outline-variant/20 px-6 py-2.5 rounded-full font-bold shadow-sm hover:bg-surface-container-high transition-all transform hover:scale-105 active:scale-95 text-sm md:text-base">
                  Sign In
                </Link>
              ) : (
                <>
                  <Link href="/login" className="hidden sm:block text-primary font-bold px-4 py-2 hover:bg-surface-container-low rounded-full transition-all text-sm md:text-base">
                    Sign In
                  </Link>
                  <Link href="/register" className="editorial-gradient text-white px-6 py-2.5 rounded-full font-bold shadow-lg transform transition-transform hover:scale-105 active:scale-95 text-sm md:text-base">
                    Get Started
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
