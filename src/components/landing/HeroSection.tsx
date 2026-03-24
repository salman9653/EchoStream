"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center max-w-[1400px] mx-auto px-6 md:px-16 pt-24 md:pt-32 overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10 transform -translate-x-1/3 translate-y-1/4" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        <div className="lg:col-span-7">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/50 backdrop-blur-md border border-secondary/20 text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <span className="material-symbols-outlined text-[14px] text-primary">auto_awesome</span>
            The Future of Curation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] text-on-surface leading-[1.05] mb-8 font-heading flex flex-col"
          >
            <span>Turn a Spark into</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#6c88ff] to-secondary italic font-heading pr-2 w-fit">
              Multi-Platform Fire
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12 font-medium"
          >
            The AI-powered topic-to-content engine designed for modern curators. Transform a single thought into a week of high-performance strategy.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-20"
          >
            <Link href="/register" className="editorial-gradient text-white px-8 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_60px_-15px_rgba(var(--primary-rgb),0.7)] transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
              Start Creating for Free
              <span className="material-symbols-outlined text-white">bolt</span>
            </Link>
            <Link href="#demo" className="bg-surface-container-lowest/50 backdrop-blur-md border border-outline-variant/30 text-on-surface px-8 py-5 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-sm">
              View Demo
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Glowing Aura Behind Card */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/40 via-secondary/20 to-primary/40 blur-[60px] rounded-full opacity-60 animate-pulse -z-10" />
          
          <div className="aspect-square rounded-[3rem] editorial-gradient p-[2px] shadow-2xl overflow-hidden group relative">
            <div className="w-full h-full bg-surface-container-lowest/90 backdrop-blur-2xl rounded-[2.9rem] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,var(--primary),transparent_70%)] mix-blend-plus-lighter"></div>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_80%,var(--secondary),transparent_70%)] mix-blend-plus-lighter"></div>
              
              <img 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[1500ms] ease-out mix-blend-overlay" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnn_PYw3Mw-Nh1k95uWJfmLjnWs4r_68EQa1hi0mQl4XiiCV7-hBU9fwYIk90_vjirKbSf4f0aA9n7gWBmhjVZvtaydslpclfo1p5hXLeblQDLMRWSzrtULDHwbOPsiPwwerkg2nOWa-o1ihfxeOSNWdanCoJ4vZkinJx5N9JsH6F-6p4hg3UpWlLFjTb8idh9VYDubmRObFRocJgWwOcwghQaQwk2HxpE5CfceDDKYn4yGm0WJIYU2OUWsJHvFw_d1hr2s2aYXiA5" 
                alt="Abstract AI artwork" 
              />

              {/* Glassmorphic Floating Element */}
              <div className="absolute bottom-8 left-8 right-8 bg-background/30 backdrop-blur-2xl p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/10 group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full editorial-gradient flex items-center justify-center text-white shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  </div>
                  <div className="h-2 w-32 bg-surface-container-highest/50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="h-2.5 w-full bg-white/20 rounded-full"></div>
                  <div className="h-2.5 w-4/5 bg-white/10 rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
