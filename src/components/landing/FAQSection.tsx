"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the content truly unique?",
    answer: "Absolutely. Our AI doesn't just copy-paste. It uses your specific input plus semantic search-generational data to output truly original portions to your voice."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. We offer month-to-month subscriptions with no long-term lock-in. You can cancel directly from your account settings at any time."
  },
  {
    question: "How does it handle different platforms?",
    answer: "The engine applies specific platform heuristics: Twitter values 1-3 line tight hooks; LinkedIn loves spaced out formatting out the hook, while a smooth professional or conversational language is maintained for the blog."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-muted/20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Your Questions,<br />
              <span className="text-primary italic font-serif">Clarified.</span>
            </h2>
            
            <div className="p-6 rounded-2xl bg-card border border-white/5 shadow-xl mt-8 relative">
              <div className="absolute -top-4 -left-4 text-4xl text-primary/30 font-serif">&quot;</div>
              <p className="italic text-muted-foreground relative z-10 mb-4">
                The Content Engine didn&apos;t just speed me up, it improved the quality of my output across all platforms. It&apos;s like having a ghostwriter who knows my brain.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div>
                  <div className="font-semibold text-sm">Amanda R.</div>
                  <div className="text-xs text-muted-foreground">Independent Cursor</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 py-2">
                  <AccordionTrigger className="text-left text-lg hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
        </div>
      </div>
    </section>
  );
}
