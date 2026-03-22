"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pt-6">
      <div className="glass-header shadow-[0px_20px_40px_rgba(17,28,45,0.06)] rounded-full flex justify-between items-center px-8 py-4 w-full max-w-7xl border border-white/20">
        <Link href="/" className="text-2xl font-black tracking-tighter text-foreground font-heading">
          The Content Engine
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground mr-12">
          <Link href="#features" className="text-primary font-bold border-b-2 border-primary transition-all">
            Features
          </Link>
          <Link href="#features" className="hover:text-primary transition-all">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-all">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-primary transition-all">
            FAQ&apos;s
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="hidden sm:block text-primary font-bold px-4 py-2 hover:bg-surface-container-low rounded-full transition-all">
            Sign In
          </Link>
          <Link href="/dashboard" className="editorial-gradient text-white px-6 py-2.5 rounded-full font-bold shadow-lg transform transition-transform hover:scale-105 active:scale-95">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
