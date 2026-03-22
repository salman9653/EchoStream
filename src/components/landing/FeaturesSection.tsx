"use client";

import { motion } from "framer-motion";
import { Sparkles, Share2, SlidersHorizontal, MousePointerClick } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Topic Input",
    description: "Just drop a link, a quote, or a rough thought. Our engine takes out the scrawl-sense and identifies high-traction angles instantly.",
    icon: Sparkles,
    colSpan: "col-span-1 md:col-span-1",
    delay: 0.1
  },
  {
    title: "Multi-Platform Strategy",
    description: "One click automagically generates optimized versions for LinkedIn, Twitter threads, and deep-dive blogs.",
    icon: Share2,
    colSpan: "col-span-1 md:col-span-1 text-primary-foreground bg-primary",
    theme: "dark",
    delay: 0.2
  },
  {
    title: "Custom Quantity Controls",
    description: "Want 5 posts or 50? Adjust your volume dial to match your content calendar perfectly.",
    icon: SlidersHorizontal,
    colSpan: "col-span-1 md:col-span-1",
    delay: 0.3
  },
  {
    title: "Seamless Review & Edit",
    description: "An interface built for speed. Review AI suggestions, tweak the tone, and approve content in a streamlined horizontal flow.",
    icon: MousePointerClick,
    colSpan: "col-span-1 md:col-span-1",
    delay: 0.4
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Designed for the Editorial Mind
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            We built the engine to handle the heavy lifting of formatting and strategy, leaving you with the creative final touch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className={`group ${feature.colSpan}`}
            >
              <Card className={`h-full border border-white/10 dark:hover:border-primary/50 transition-colors duration-300 ${feature.theme === 'dark' ? 'bg-indigo-600 text-white border-transparent' : 'bg-card'}`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.theme === 'dark' ? 'bg-white/20' : 'bg-primary/10'}`}>
                    <feature.icon className={`h-6 w-6 ${feature.theme === 'dark' ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className={`${feature.theme === 'dark' ? 'text-indigo-100' : 'text-muted-foreground'} leading-relaxed`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
