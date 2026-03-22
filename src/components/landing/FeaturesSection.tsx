"use client";

import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-surface-container-low py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6 font-heading"
          >
            Designed for the Editorial Mind
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant max-w-2xl font-medium"
          >
            We built the engine to handle the heavy lifting of formatting and strategy, leaving you with the creative final touch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl shadow-sm flex flex-col justify-between group"
          >
            <div className="max-w-md">
              <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <h3 className="text-3xl font-bold mb-4 font-heading">AI-Powered Topic Input</h3>
              <p className="text-on-surface-variant text-lg font-medium">Just drop a link, a quote, or a rough thought. Our engine dissects the core themes and identifies high-traction angles instantly.</p>
            </div>
            <div className="mt-12 h-40 bg-surface-container-low rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-6 left-6 right-6 bg-surface-container-lowest p-4 rounded-full shadow-sm flex items-center gap-3 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">search</span>
                <span className="text-on-surface-variant italic font-medium">&quot;The future of decentralized content...&quot;</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-[#002fbb] text-white p-12 rounded-xl shadow-xl flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <span className="material-symbols-outlined text-white text-5xl mb-6">hub</span>
              <h3 className="text-3xl font-bold mb-4 font-heading text-white">Multi-Platform Strategy</h3>
              <p className="text-white/80 text-lg font-medium">One click deploys tailored versions for LinkedIn, Twitter threads, and deep-dive blogs.</p>
            </div>
            <div className="mt-8 flex gap-2 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><span className="material-symbols-outlined text-sm text-white">alternate_email</span></div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><span className="material-symbols-outlined text-sm text-white">article</span></div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><span className="material-symbols-outlined text-sm text-white">share</span></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-surface-container-lowest p-12 rounded-xl shadow-sm"
          >
            <span className="material-symbols-outlined text-[#002fbb] text-5xl mb-6">tune</span>
            <h3 className="text-3xl font-bold mb-4 font-heading">Custom Quantity Controls</h3>
            <p className="text-on-surface-variant text-lg font-medium">Need 3 posts or 30? Adjust your volume dial to match your editorial calendar perfectly.</p>
            <div className="mt-12 flex items-center gap-4 bg-surface-container p-4 rounded-full">
              <div className="h-2 grow bg-outline-variant/30 rounded-full overflow-hidden">
                <div className="h-full bg-[#002fbb] dark:bg-white w-3/4"></div>
              </div>
              <span className="font-bold text-[#002fbb] dark:text-white">75%</span>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-surface-container-lowest p-12 rounded-xl shadow-sm relative overflow-hidden"
          >
            <span className="material-symbols-outlined text-primary text-5xl mb-6">edit_note</span>
            <h3 className="text-3xl font-bold mb-4 font-heading">Seamless Review & Edit</h3>
            <p className="text-on-surface-variant text-lg font-medium">An interface built for speed. Review AI suggestions, tweak the tone, and approve content in a streamlined horizontal flow.</p>
            
            <div className="mt-12 grid gap-4">
              <div className="bg-surface-container-lowest rounded-lg border border-primary/10 shadow-sm overflow-hidden">
                {/* Editor Header/Toolbar */}
                <div className="px-4 py-2 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-lowest">
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">format_bold</span>
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">format_italic</span>
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">format_list_bulleted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded bg-primary/10 text-[10px] font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                      AI ACTIVE
                    </div>
                  </div>
                </div>
                {/* Editor Content */}
                <div className="p-6 space-y-4 relative">
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-surface-container rounded-full"></div>
                    <div className="h-3 w-11/12 bg-surface-container rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-1/2 bg-primary/20 rounded-full"></div>
                      <div className="flex gap-1 items-center bg-[#002fbb] text-white text-[10px] px-2 py-1 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer">
                        <span className="material-symbols-outlined text-[10px] text-white">tips_and_updates</span>
                        Try &quot;Innovative&quot; instead of &quot;New&quot;
                      </div>
                    </div>
                    <div className="h-3 w-full bg-surface-container rounded-full"></div>
                    <div className="h-3 w-4/5 bg-surface-container rounded-full"></div>
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
