"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px]">
        <div className="h-[300px] w-[800px] rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative background for the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to amplify your voice?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Join 2,000+ creators who are scaling their presence without sacrificing their soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full text-base h-14 px-8 font-semibold" })}>
                Get Started for Free
              </Link>
              <Link href="#demo" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full text-base h-14 px-8 border-white/20 hover:bg-white/10 hover:text-white" })}>
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
