"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 mb-24 md:mb-48 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            The Future of Curation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-on-surface leading-[1.1] mb-8 font-heading"
          >
            Turn a Spark into a <span className="text-primary italic font-heading">Multi-Platform Fire</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed mb-12 font-medium"
          >
            The AI-powered topic-to-content engine designed for modern curators. Transform a single thought into a week of high-performance strategy.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/dashboard" className="editorial-gradient text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
              Start Creating for Free
              <span className="material-symbols-outlined text-white">bolt</span>
            </Link>
            <Link href="#demo" className="bg-surface-container-low text-on-surface px-8 py-5 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
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
          <div className="aspect-square rounded-xl editorial-gradient p-1 shadow-2xl overflow-hidden group">
            <div className="w-full h-full bg-surface-container-lowest rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent)]"></div>
              <img 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnn_PYw3Mw-Nh1k95uWJfmLjnWs4r_68EQa1hi0mQl4XiiCV7-hBU9fwYIk90_vjirKbSf4f0aA9n7gWBmhjVZvtaydslpclfo1p5hXLeblQDLMRWSzrtULDHwbOPsiPwwerkg2nOWa-o1ihfxeOSNWdanCoJ4vZkinJx5N9JsH6F-6p4hg3UpWlLFjTb8idh9VYDubmRObFRocJgWwOcwghQaQwk2HxpE5CfceDDKYn4yGm0WJIYU2OUWsJHvFw_d1hr2s2aYXiA5" 
                alt="Abstract AI artwork" 
              />
              <div className="absolute bottom-8 left-8 right-8 bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-outline-variant/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full editorial-gradient flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  </div>
                  <div className="h-2 w-32 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-surface-container rounded-full"></div>
                  <div className="h-2 w-4/5 bg-surface-container rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
