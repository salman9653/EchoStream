"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="editorial-gradient py-32 md:py-48 px-6 md:px-16 text-center text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight font-heading leading-tight text-white"
        >
          Ready to Amplify Your Voice?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl opacity-90 font-medium"
        >
          Join 2,000+ curators who are building their multi-platform presence with the engine.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-lg"
        >
          <Link href="/register" className="bg-white text-[#002fbb] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-surface-container-lowest transition-all w-full flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
            Get Started
            <span className="material-symbols-outlined text-[#002fbb]">bolt</span>
          </Link>
          <Link href="#demo" className="bg-primary-container/20 border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all w-full flex items-center justify-center transform hover:scale-105 active:scale-95">
            Watch Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
