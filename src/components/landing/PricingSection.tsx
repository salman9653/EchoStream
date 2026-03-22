"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Let the AI start getting the best of you.",
    features: ["200 generations/mo", "Basic AI Models", "Web Tracker"],
    buttonText: "Start For Free",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "Personal content creation at its best.",
    features: ["Unlimited Engine", "Premium Processing", "Brand DNA Voice", "API Access"],
    buttonText: "Go Pro Now",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and marketing teams.",
    features: ["White-label Reports", "Team Collaboration", "Custom AI Training"],
    buttonText: "Contact Sales",
    isPopular: false,
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, Scalable Tiers</h2>
          <p className="text-lg text-muted-foreground">Choose the engine that matches your speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`relative h-full flex flex-col ${plan.isPopular ? 'border-primary shadow-lg shadow-primary/20 scale-105 z-10' : 'border-white/10'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="min-h-[3rem]">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.isPopular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
