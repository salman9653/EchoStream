"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          EchoStream
          <span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-foreground transition-colors">FAQs</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:inline-block text-sm font-medium hover:text-foreground transition-colors">
            Sign In
          </Link>
          <Link href="/dashboard" className={buttonVariants({ variant: "default", className: "rounded-full px-6" })}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
