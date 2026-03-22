"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Input",
    description: "Feed the engine a seed, MVP article, or a few spoken words.",
  },
  {
    num: "02",
    title: "Generate",
    description: "Watch the AI draft your multi-platform spectrum automatically.",
  },
  {
    num: "03",
    title: "Refine",
    description: "Polish with AI edit controls, download everything, publish to channels.",
  }
];

export function StepsSection() {
  return (
    <section className="py-24 bg-muted/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Three Steps to Fire</h2>
          <p className="text-lg text-muted-foreground">The path from concept to conversion has never been this fluid.</p>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-border hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-16 w-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
