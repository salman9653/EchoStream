"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[100px]">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
              <Sparkles className="mr-2 h-4 w-4" />
              The Content Engine
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground balance">
              Turn a Spark into a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 italic">
                Multi-Platform Fire
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              The AI-powered topic-to-content engine designed for modern creators. Transform a single thought into a week of high-performance strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard" className={buttonVariants({ size: "lg", className: "rounded-full text-base h-14 px-8 group" })}>
                Start Creating for Free 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#demo" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full text-base h-14 px-8" })}>
                View Demo
              </Link>
            </div>
          </motion.div>

          {/* Abstract Interface Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-2 sm:p-4 backdrop-blur-3xl border border-white/10 shadow-2xl">
              <div className="rounded-2xl bg-background/90 backdrop-blur-md overflow-hidden aspect-square border border-white/5 relative shadow-inner">
                {/* Decorative Elements simulating AI generation visual */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-background/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-lg flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/3 bg-primary/40 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-primary/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
