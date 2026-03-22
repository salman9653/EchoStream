"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Type, 
  Smile, 
  BookOpen, 
  Zap, 
  Linkedin, 
  Twitter, 
  Fingerprint,
  Info,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function EnginePage() {
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("m");
  const [isDnaActive, setIsDnaActive] = useState(false);

  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight font-heading mb-4">Feed the Engine</h2>
        <p className="text-lg text-on-surface-variant font-medium">Turn your seeds into high-conversion content ecosystems across all your platforms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-8">
          <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="topic" className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                   <Type className="h-4 w-4" />
                   Seed Topic or URL
                </Label>
              </div>
              <Textarea 
                id="topic"
                placeholder="Paste a rough thought, an MVP article, or a URL to reverse-engineer..."
                className="min-h-40 rounded-2xl bg-surface-container-lowest border-outline-variant/20 focus:border-primary focus:ring-primary/20 text-lg font-medium p-6 resize-none transition-all shadow-inner"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-sm font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                   <Smile className="h-4 w-4" />
                   Brand Tone
                </Label>
                <Select onValueChange={(val) => setTone(val ?? "Professional")} defaultValue={tone}>
                  <SelectTrigger className="h-14 rounded-xl bg-surface-container-lowest border-outline-variant/20 font-bold focus:ring-primary/20 w-full">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-outline-variant/20 p-2">
                    <SelectItem value="Professional" className="rounded-lg font-bold">Professional</SelectItem>
                    <SelectItem value="Witty" className="rounded-lg font-bold">Witty</SelectItem>
                    <SelectItem value="Academic" className="rounded-lg font-bold">Academic</SelectItem>
                    <SelectItem value="Minimalist" className="rounded-lg font-bold">Minimalist</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                   <BookOpen className="h-4 w-4" />
                   Blog Depth
                </Label>
                <div className="flex bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-1 h-14">
                  {(['s', 'm', 'l'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLength(l)}
                      className={cn(
                        "flex-1 rounded-lg font-black uppercase tracking-widest text-xs transition-all",
                        length === l 
                          ? "bg-primary text-on-primary shadow-md" 
                          : "text-on-surface-variant hover:bg-surface-container-low"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-outline-variant/10">
              <div className="space-y-4">
                <Label className="text-sm font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                   <Linkedin className="h-4 w-4" />
                   LinkedIn Posts
                </Label>
                <div className="flex items-center gap-4">
                  <Input type="number" defaultValue="3" className="h-14 rounded-xl bg-surface-container-lowest border-outline-variant/20 font-bold text-center text-xl focus:ring-primary/20" />
                  <span className="text-on-surface-variant font-bold">POSTS</span>
                </div>
              </div>
              <div className="space-y-4">
               <Label className="text-sm font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                   <Twitter className="h-4 w-4" />
                   Twitter / X Posts
                </Label>
                <div className="flex items-center gap-4">
                  <Input type="number" defaultValue="7" className="h-14 rounded-xl bg-surface-container-lowest border-outline-variant/20 font-bold text-center text-xl focus:ring-primary/20" />
                  <span className="text-on-surface-variant font-bold">TWEETS</span>
                </div>
              </div>
            </div>

            <div className={cn(
               "p-6 rounded-2xl border transition-all duration-300",
               isDnaActive 
                ? "bg-secondary-container/20 border-secondary/20 shadow-lg" 
                : "bg-surface-container-low border-transparent"
            )}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                    isDnaActive ? "bg-secondary text-white" : "bg-surface-container-high text-on-surface-variant"
                  )}>
                    <Fingerprint className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Brand Voice DNA</h4>
                    <p className="text-xs text-on-surface-variant font-medium">Inject your writing style directly into the model.</p>
                  </div>
                </div>
                <Switch checked={isDnaActive} onCheckedChange={setIsDnaActive} />
              </div>

              <motion.div
                initial={false}
                animate={{ height: isDnaActive ? "auto" : 0, opacity: isDnaActive ? 1 : 0 }}
                className="overflow-hidden"
              >
                <Textarea 
                  placeholder="Paste a writing sample (emails, articles, notes) for the AI to mimic your syntax and rhythm..."
                  className="mt-4 rounded-xl bg-surface-container-lowest border-outline-variant/20 focus:ring-secondary/20 font-medium min-h-32"
                />
              </motion.div>
            </div>

            <Button size="lg" className="w-full h-16 rounded-full editorial-gradient text-on-primary font-black text-xl shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95">
              Fire the Engine
              <Zap className="h-6 w-6 fill-white" />
            </Button>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
           <div className="bg-primary/5 border border-primary/10 p-8 rounded-[2rem] space-y-6">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Info className="h-5 w-5" />
                <h3 className="font-black uppercase tracking-widest text-xs">Editorial Pro Tip</h3>
              </div>
              <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                For the best results, use a <span className="text-primary font-bold">Specific Core Angle</span>. Instead of &quot;Crypto News&quot;, try &quot;The socio-economic impact of Layer 2 solutions on emerging markets.&quot;
              </p>
              
              <div className="pt-6 border-t border-primary/10 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Output Strategy</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-bold text-on-surface italic">Professional Hook Framework</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-bold text-on-surface italic">Viral Loop Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-bold text-on-surface italic">Deep-Reasoning Narrative</span>
                  </div>
                </div>
              </div>
           </div>

           <div className="p-8 space-y-4">
              <p className="text-xs text-on-surface-variant font-bold leading-relaxed">
                Tokens used per generation vary by length and platform count. You currently have <span className="text-primary">1,240</span> available.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary font-black uppercase tracking-widest text-[10px] hover:no-underline flex items-center gap-2 group">
                 Buy more tokens
                 <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
