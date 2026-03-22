"use client";

import { motion } from "framer-motion";

export function StepsSection() {
  return (
    <section id="how-it-works" className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 font-heading"
          >
            Three Steps to Fire
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant font-medium"
          >
            The path from concept to conversion has never been this fluid.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-primary/10 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-surface-container-lowest border-4 border-surface shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-black text-primary font-heading">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Input</h3>
            <p className="text-on-surface-variant leading-relaxed font-medium">Feed the engine a seed. A PDF, a link, or a few spoken words.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-[#002fbb] text-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-black font-heading">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Generate</h3>
            <p className="text-on-surface-variant leading-relaxed font-medium">Watch as our engine constructs a full-spectrum content strategy.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-surface-container-lowest border-4 border-surface shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-black text-primary font-heading">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Refine</h3>
            <p className="text-on-surface-variant leading-relaxed font-medium">Polished, edited, and ready. One click to schedule across all channels.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
