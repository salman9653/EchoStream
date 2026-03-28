"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  Twitter, 
  Plus, 
  Minus, 
  Sparkles,
  Rocket,
  Palette,
  MoreVertical,
  ChevronDown,
  Info,
  Linkedin,
  TrendingUp as Trending,
  Zap,
  Megaphone,
  Target,
  Lightbulb,
  Code,
  PenTool
} from "lucide-react";
import { DUMMY_CAMPAIGNS, type CampaignIconType, type CampaignColorType, type DummyCampaign } from "@/constants/dummy-data";
import { motion, AnimatePresence } from "framer-motion";
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
import { Label } from "@/components/ui/label";

export default function CampaignPage() {
  const [tone, setTone] = useState<string>();
  const [blogLength, setBlogLength] = useState("M");
  const [postCount, setPostCount] = useState(3);
  const [microCount, setMicroCount] = useState(5);
  const [microSeparate, setMicroSeparate] = useState(false);
  const [useSampleText, setUseSampleText] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(true);
  const [isToneOpen, setIsToneOpen] = useState(false);

  // Helper to get Icon Component
  const getIcon = (type: CampaignIconType) => {
    switch (type) {
      case 'rocket': return Rocket;
      case 'palette': return Palette;
      case 'sparkles': return Sparkles;
      case 'trending': return Trending;
      case 'zap': return Zap;
      case 'megaphone': return Megaphone;
      case 'target': return Target;
      case 'lightbulb': return Lightbulb;
      case 'code': return Code;
      case 'pen': return PenTool;
      case 'emerald': return Sparkles;
      default: return Rocket;
    }
  };

  // Helper to get color classes
  const getColorClasses = (color: CampaignColorType) => {
    switch (color) {
      case 'primary': return "bg-primary/10 text-primary";
      case 'teal': return "bg-teal-500/10 text-teal-600 dark:text-teal-400";
      case 'rose': return "bg-rose-500/10 text-rose-600 dark:text-rose-400";
      case 'purple': return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
      case 'amber': return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
      case 'emerald': return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
      case 'cyan': return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400";
      case 'indigo': return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400";
      case 'fuchsia': return "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400";
      case 'orange': return "bg-orange-500/10 text-orange-600 dark:text-orange-400";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-20 items-start">
      {/* Left Column: Generator Form */}
      <div className="lg:col-span-8 space-y-8">
        <div className="max-w-xl">
          <h1 className="text-5xl font-black text-on-surface tracking-tight font-heading mb-4 leading-tight">
            Generate new
          </h1>
          <p className="text-[15px] text-on-surface-variant font-medium leading-relaxed max-w-sm">
            Input your core concept and let the campaign weave a multi-platform narrative for your brand.
          </p>
        </div>

        <div className="bg-primary/5 p-6 sm:p-10 rounded-[2.5rem] border border-primary/10 shadow-sm space-y-10">
          
          {/* Core Topic & Context */}
          <div className="space-y-4">
            <Label htmlFor="topic" className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
               CORE TOPIC & CONTEXT
            </Label>
            <Textarea 
              id="topic"
              placeholder="What is the central theme of your campaign?"
              className="min-h-32 rounded-3xl bg-surface-container-lowest border-transparent focus:border-primary/30 focus:ring-primary/20 text-[15px] font-medium p-6 resize-none shadow-sm placeholder:text-on-surface-variant/50"
            />
          </div>

          {/* Content To Generate */}
          <div className="space-y-0 relative border-t border-primary/5 pt-8">
            <button
              onClick={() => setIsContentOpen(!isContentOpen)}
              className="w-full flex items-center justify-between group focus:outline-none"
            >
              <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant cursor-pointer group-hover:text-primary transition-colors">
                Content to generate
              </Label>
              <div className="h-8 w-8 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                <ChevronDown className={cn("h-4 w-4 text-on-surface-variant group-hover:text-primary transition-transform duration-300", isContentOpen && "-rotate-180")} />
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isContentOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {/* Blog Post Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 pt-10 flex flex-col items-center shadow-sm border border-transparent hover:border-primary/10 transition-colors h-full">
                {/* Top Section */}
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 shrink-0">
                  <FileText className="h-5 w-5 fill-current" />
                </div>
                
                <div className="flex flex-col items-center w-full mb-6 shrink-0 space-y-5">
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant leading-none">BLOG</p>
                  <div className="h-8 flex items-center justify-center">
                    <p className="text-xl font-black text-on-surface uppercase leading-none whitespace-nowrap">1 POST</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col items-center justify-end">
                  <div className="flex bg-surface-container-low rounded-full p-1 w-full max-w-[120px]">
                    {(['S', 'M', 'L'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => setBlogLength(l)}
                        className={cn(
                          "flex-1 h-7 rounded-full font-black text-[10px] transition-all flex items-center justify-center",
                          blogLength === l 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "text-on-surface-variant hover:text-on-surface"
                        )}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-on-surface-variant/70 mt-2 h-3 flex items-center">
                    {blogLength === 'S' ? "~700 words" : blogLength === 'M' ? "~1k words" : "~2k words"}
                  </p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 pt-10 flex flex-col items-center shadow-sm border border-transparent hover:border-primary/10 transition-colors h-full">
                {/* Top Section */}
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 shrink-0">
                  <Linkedin className="h-5 w-5 fill-current" />
                </div>
                
                <div className="flex flex-col items-center w-full mb-6 shrink-0 space-y-6">
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant leading-none">LINKEDIN</p>
                  <div className="h-8 flex items-center justify-center gap-3 w-full">
                    <button 
                      onClick={() => setPostCount(Math.max(1, postCount - 1))}
                      className="h-7 w-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest transition-colors shrink-0"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    
                    <p className="text-xl font-black text-on-surface uppercase shrink-0 w-24 text-center leading-none whitespace-nowrap">
                      {postCount} POST{postCount !== 1 ? 'S' : ''}
                    </p>

                    <button 
                      onClick={() => setPostCount(postCount + 1)}
                      className="h-7 w-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest transition-colors shrink-0"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section (Empty but maintaining height) */}
                <div className="mt-auto w-full flex flex-col items-center justify-end h-[60px]" />
              </div>

              {/* Twitter Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 pt-10 flex flex-col items-center shadow-sm border border-transparent hover:border-primary/10 transition-colors h-full">
                {/* Top Section */}
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 shrink-0">
                  <Twitter className="h-5 w-5 fill-current" />
                </div>
                
                <div className="flex flex-col items-center w-full mb-6 shrink-0 space-y-6">
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant leading-none">TWITTER ( X )</p>
                  <div className="h-8 flex items-center justify-center gap-3 w-full">
                    <button 
                      onClick={() => setMicroCount(Math.max(1, microCount - 1))}
                      className="h-7 w-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest transition-colors shrink-0"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    
                    <p className="text-xl font-black text-on-surface uppercase shrink-0 w-24 text-center leading-none whitespace-nowrap">
                      {microCount} Tweet{microCount !== 1 ? 'S' : ''}
                    </p>

                    <button 
                      onClick={() => setMicroCount(microCount + 1)}
                      className="h-7 w-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest transition-colors shrink-0"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-2 w-full flex flex-col items-center justify-end">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className={cn("text-center text-[8px] font-black uppercase leading-[1.2] w-[45px]", microSeparate ? "text-primary" : "text-on-surface-variant/50")}>
                      {microCount} SEPARATE<br/>TWEETS
                    </span>
                    <button 
                      type="button"
                      onClick={() => setMicroSeparate(!microSeparate)}
                      className="w-[42px] h-6 rounded-full bg-primary/10 flex items-center px-0.5 transition-colors focus:outline-none shrink-0 border border-primary/20"
                    >
                      <div 
                        className={cn(
                          "w-5 h-5 bg-white rounded-full shadow-sm transition-transform",
                          !microSeparate ? "translate-x-[18px]" : "translate-x-0"
                        )} 
                      />
                    </button>
                    <span className={cn("text-[8px] font-black uppercase text-center leading-[1.2] w-[45px]", !microSeparate ? "text-primary" : "text-on-surface-variant/50")}>
                      1<br/>THREAD
                    </span>
                  </div>
                </div>
              </div>

            </div>
            </motion.div>
            )}
            </AnimatePresence>
          </div>

          {/* Tone & Voice */}
          <div className="space-y-0 relative border-t border-primary/5 pt-8">
            <button
              onClick={() => setIsToneOpen(!isToneOpen)}
              className="w-full flex items-center justify-between group focus:outline-none"
            >
              <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant cursor-pointer group-hover:text-primary transition-colors">
                Tone and voice
              </Label>
              <div className="h-8 w-8 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                <ChevronDown className={cn("h-4 w-4 text-on-surface-variant group-hover:text-primary transition-transform duration-300", isToneOpen && "-rotate-180")} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isToneOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end pt-6 mb-1">
                     {/* Tone */}
                    <div>
                      <Select onValueChange={(val) => setTone(val ?? "")} defaultValue={tone}>
                        <SelectTrigger className="h-18! rounded-[2.5rem] bg-surface-container-lowest border-transparent focus:ring-primary/20 w-full text-[15px] font-medium shadow-sm px-6 hover:shadow-md transition-all">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent 
                          alignItemWithTrigger={false}
                          sideOffset={8}
                          className="rounded-[2.5rem] border border-outline-variant/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-3 min-w-[240px] bg-surface-container-lowest"
                        >
                          <SelectItem value="Professional" className="rounded-[2rem] font-medium py-3 pl-6 pr-10 text-[15px] cursor-pointer">Professional</SelectItem>
                          <SelectItem value="Witty" className="rounded-[2rem] font-medium py-3 pl-6 pr-10 text-[15px] cursor-pointer">Witty</SelectItem>
                          <SelectItem value="Academic" className="rounded-[2rem] font-medium py-3 pl-6 pr-10 text-[15px] cursor-pointer">Academic</SelectItem>
                          <SelectItem value="Minimalist" className="rounded-[2rem] font-medium py-3 pl-6 pr-10 text-[15px] cursor-pointer">Minimalist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sample Text Toggle */}
                    <div 
                      className="h-18 bg-surface-container-lowest rounded-[2.5rem] px-6 flex items-center justify-between shadow-sm border border-transparent hover:shadow-md transition-all cursor-pointer relative" 
                      onClick={() => setUseSampleText(!useSampleText)}
                    >
                      <div>
                        <p className="text-sm font-bold text-on-surface leading-tight">Use Sample Text</p>
                        <p className="text-[10px] text-on-surface-variant font-medium">Provide a writing style guide</p>
                      </div>
                      <button 
                        type="button"
                        className={cn(
                          "w-[52px] h-7 rounded-full flex items-center px-1 transition-colors focus:outline-none",
                          useSampleText ? "bg-primary" : "bg-[#dce4fd] dark:bg-surface-container-high"
                        )}
                      >
                        <div 
                          className={cn(
                            "w-[20px] h-[20px] bg-white rounded-full shadow-md transition-transform",
                            useSampleText ? "translate-x-6" : "translate-x-0"
                          )} 
                        />
                      </button>
                    </div>
                  </div>

          {/* Sample Text Area */}
          <AnimatePresence>
            {useSampleText && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 mb-1 space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                    SAMPLE TEXT
                  </Label>
                  <Textarea 
                    placeholder="Paste a sample of your writing style here..."
                    className="min-h-32 rounded-3xl bg-surface-container-lowest border-transparent focus:border-primary/30 focus:ring-primary/20 text-[15px] font-medium p-6 resize-none shadow-sm placeholder:text-on-surface-variant/30"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.div>
          )}
          </AnimatePresence>
          </div>

          <Button size="lg" className="w-48 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
            Generate Campaign
            <Sparkles className="h-4 w-4" />
          </Button>

        </div>
      </div>

      {/* Right Column: Sidebar */}
      <div className="lg:col-span-4 space-y-10 pt-10">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-bold text-on-surface font-heading tracking-tight">Recent Campaigns</h2>
          <Link href="/dashboard/history" className="text-xs font-bold text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {DUMMY_CAMPAIGNS.slice(0, 3).map((campaign: DummyCampaign) => {
            const IconComponent = getIcon(campaign.iconType);
            return (
              <div key={campaign.id} className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/20 dark:border-white/10 shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative group hover:border-primary/30 transition-all">
                <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 text-on-surface-variant/50 hover:text-on-surface">
                  <MoreVertical className="h-4 w-4" />
                </Button>
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn("h-10 w-10 rounded-full flex items-center justify-center shrink-0", getColorClasses(campaign.iconColor))}>
                    <IconComponent className="h-5 w-5 fill-current" />
                  </div>
                  <div className="space-y-1 pr-6">
                    <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">{campaign.createdAt}</p>
                    <p className="font-bold text-on-surface leading-tight text-[15px] whitespace-pre-line">{campaign.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {campaign.outputs.map((output: { label: string; highlight?: boolean }, idx: number) => (
                    <span 
                      key={idx} 
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black",
                        output.highlight 
                          ? "bg-primary/10 text-primary" 
                          : "bg-surface-container-low text-on-surface-variant"
                      )}
                    >
                      {output.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="py-4">
             <div className="h-px w-full bg-linear-to-r from-transparent via-outline-variant/40 dark:via-white/10 to-transparent" />
          </div>

          {/* Pro Tip Card */}
          <div className="bg-primary/5 dark:bg-[#131c31]/50 p-8 rounded-[2.5rem] border-2 border-primary/10 dark:border-primary/20 shadow-sm flex flex-col gap-7 relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-60 h-60 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-2 text-primary">
                <Info className="h-4 w-4" />
                <h3 className="text-[11px] font-black uppercase tracking-[0.15em]">Editorial Pro Tip</h3>
              </div>
              <p className="text-[15px] text-on-surface font-medium leading-relaxed">
                For the best results, use a <span className="text-primary font-semibold">Specific Core Angle.</span> Instead of &quot;Crypto News&quot;, try &quot;The socio-economic impact of Layer 2 solutions on emerging markets.&quot;
              </p>
            </div>
            
            <div className="h-px w-full bg-outline-variant/20 dark:bg-white/10" />
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-on-surface">Output Strategy</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[15px] text-on-surface font-bold italic tracking-tight">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  Professional Hook Framework
                </li>
                <li className="flex items-center gap-3 text-[15px] text-on-surface font-bold italic tracking-tight">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  Viral Loop Integration
                </li>
                <li className="flex items-center gap-3 text-[15px] text-on-surface font-bold italic tracking-tight">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  Deep-Reasoning Narrative
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
