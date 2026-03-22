"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="bg-surface-container-low py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 font-heading">
              Your Questions, <br />
              <span className="text-primary italic">Clarified.</span>
            </h2>
            <p className="text-xl text-on-surface-variant mb-12 font-medium">Everything you need to know about the engine and our philosophy.</p>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#002fbb] p-12 rounded-xl text-white shadow-2xl mt-12"
            >
              <p className="text-2xl font-bold italic mb-8 font-heading text-white">&quot;The Content Engine didn&apos;t just speed me up, it improved the quality of my output across all platforms. It&apos;s like having a ghostwriter who knows my brain.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20"></div>
                <div>
                  <p className="font-bold text-white">Amanda R.</p>
                  <p className="text-sm text-white/80">Independent Curator</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <Accordion className="w-full space-y-4 border-none">
              <AccordionItem value="item-1" className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden px-6 transition-all border-none">
                <AccordionTrigger className="py-6 text-xl font-bold text-on-surface hover:no-underline font-heading">Is the content truly unique?</AccordionTrigger>
                <AccordionContent className="pb-6 text-on-surface-variant text-lg font-medium">
                  Absolutely. Our engine uses your specific input plus semantic data to output truly original portions tailored to your voice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden px-6 transition-all border-none">
                <AccordionTrigger className="py-6 text-xl font-bold text-on-surface hover:no-underline font-heading">Can I cancel anytime?</AccordionTrigger>
                <AccordionContent className="pb-6 text-on-surface-variant text-lg font-medium">
                  Yes. We offer month-to-month subscriptions with no long-term lock-in. You can cancel at any time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden px-6 transition-all border-none">
                <AccordionTrigger className="py-6 text-xl font-bold text-on-surface hover:no-underline font-heading">How does it handle different platforms?</AccordionTrigger>
                <AccordionContent className="pb-6 text-on-surface-variant text-lg font-medium">
                  The engine applies specific platform heuristics: Twitter values tight hooks; LinkedIn loves spaced formatting; Blogs maintain depth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
