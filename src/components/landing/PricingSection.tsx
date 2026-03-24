"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-surface-container-highest py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6 font-heading"
          >
            Simple, Scalable Tiers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant font-medium"
          >
            Choose the engine that matches your speed.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-10 rounded-xl shadow-sm flex flex-col hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/10"
          >
            <h3 className="text-xl font-bold text-on-surface-variant mb-2 font-heading">Starter</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-on-surface font-heading">Free</span>
            </div>
            <p className="text-on-surface-variant mb-8 font-medium">For individuals getting their feet wet.</p>
            <ul className="space-y-4 mb-10 grow">
              <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> 3 Engines / mo</li>
              <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> Basic AI Models</li>
              <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> Web Preview</li>
            </ul>
            <Link href="/register" className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors font-heading text-center block">Start for Free</Link>
          </motion.div>

          {/* Tier 2 (Featured) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#002fbb] text-white p-10 rounded-xl shadow-2xl flex flex-col relative overflow-hidden transform md:scale-105 z-10"
          >
            <div className="absolute top-6 right-6 bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Most Popular</div>
            <h3 className="text-xl font-bold mb-2 font-heading text-white">Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black font-heading text-white">$29</span>
              <span className="text-lg text-white/70">$29/mo</span>
            </div>
            <p className="text-white/90 mb-8 font-medium">For serious creators building a brand.</p>
            <ul className="space-y-4 mb-10 grow">
              <li className="flex items-center gap-3 font-medium text-white/90"><span className="material-symbols-outlined text-white">check_circle</span> Unlimited Engines</li>
              <li className="flex items-center gap-3 font-medium text-white/90"><span className="material-symbols-outlined text-white">check_circle</span> Priority AI Processing</li>
              <li className="flex items-center gap-3 font-medium text-white/90"><span className="material-symbols-outlined text-white">check_circle</span> History Archive</li>
              <li className="flex items-center gap-3 font-medium text-white/90"><span className="material-symbols-outlined text-white">check_circle</span> API Access</li>
            </ul>
            <Link href="/register" className="w-full py-4 rounded-full bg-white text-primary font-bold shadow-xl hover:shadow-white/20 transition-all font-heading text-center block">Go Pro Now</Link>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-10 rounded-xl shadow-sm flex flex-col hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/10"
          >
            <h3 className="text-xl font-bold text-on-surface-variant mb-2 font-heading">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-on-surface font-heading">Custom</span>
            </div>
            <p className="text-on-surface-variant mb-8 font-medium">For agencies and marketing teams.</p>
            <ul className="space-y-4 mb-10 grow">
              <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> White-label Exports</li>
              <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> Team Collaboration</li>
              <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-primary">check_circle</span> Custom AI Training</li>
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-on-surface text-on-surface font-bold hover:bg-on-surface/5 transition-colors font-heading">Contact Sales</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
