"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Linkedin, 
  Twitter, 
  Image as ImageIcon, 
  Copy, 
  Check, 
  RefreshCw,
  Download,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const mockContent = {
  blog: `## The Future of Decentralized Content Ecosystems\n\nIn the rapidly evolving digital landscape, the concept of content ownership is undergoing a fundamental shift. Decentralized ecosystems are not just a trend; they represent a seismic move towards creator autonomy and platform-agnostic distribution.\n\n### The Core Pillars\n\n1. **Creator Sovereignty**: Unlike traditional platforms, decentralized networks allow creators to own their social graph and their data.\n2. **Incentive Alignment**: Through tokenomics and smart contracts, fans and creators are finally on the same side of the value chain.\n3. **Censorship Resistance**: Content lives on immutable ledgers, ensuring the longevity of digital history.\n\nAs we move forward, the "Content Engine" of the next decade won't be a centralized algorithm, but a distributed network of high-fidelity human insight amplified by ethical AI.`,
  linkedin: `Seismic shift alert: Decentralized content isn't "coming"—it's already here.\n\nFor years, we've leased our audiences from centralized platforms. Today, we're building the infrastructure to own them.\n\nWhy this matters for your 2026 strategy:\n\n1. Data Sovereignty: Your social graph follows you.\n2. Incentive Alignment: Direct-to-fan economies through smart contracts.\n3. Longevity: Your content outlives the platform.\n\nThe future belongs to the platform-agnostic creator.\n\n#CreatorEconomy #Web3 #ContentStrategy #Decentralization`,
  twitter: `1/ Decentralized content is the next industrial revolution for creators. 🧵\n\n2/ For too long, we've built on rented land. If the algorithm changes, your business dies. That's a vulnerability we can no longer ignore.\n\n3/ Direct-to-fan value chains are replacing the ad-based model. It's not about scale; it's about fidelity.\n\n4/ The goal? Multi-platform presence without sacrificing your soul or your data. ⚡️ #EchoStream`,
  images: [
    "A sleek, high-end vertical editorial image of a futuristic workspace with glass monitors and glowing blue interfaces, cinematic lighting, 8k.",
    "Abstract visualization of a decentralized network connecting nodes of neural data, editorial style, deep blue and primary colors.",
    "A portrait of a digital creator in a minimalist studio, lighting from a large softbox, professional photography style."
  ]
};

export default function WorkspacePage() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const copyToClipboard = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tight font-heading mb-2">The Workspace</h2>
          <p className="text-on-surface-variant font-medium flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             AI Engine analysis complete. Review your ecosystem.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-full font-bold gap-2">
            <RefreshCw className="h-4 w-4" />
            Regenerate
          </Button>
          <Button className="rounded-full font-bold editorial-gradient text-white gap-2 shadow-lg shadow-primary/20">
            <Share2 className="h-4 w-4" />
            Deploy All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="blog" className="w-full">
        <TabsList className="bg-surface-container-low p-1.5 rounded-2xl h-auto border border-outline-variant/10 mb-8 self-start flex overflow-x-auto no-scrollbar">
          <TabsTrigger value="blog" className="rounded-xl px-6 py-3 font-bold gap-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <FileText className="h-4 w-4" />
            Editorial Blog
          </TabsTrigger>
          <TabsTrigger value="linkedin" className="rounded-xl px-6 py-3 font-bold gap-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </TabsTrigger>
          <TabsTrigger value="twitter" className="rounded-xl px-6 py-3 font-bold gap-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <Twitter className="h-4 w-4" />
            Twitter Thread
          </TabsTrigger>
          <TabsTrigger value="images" className="rounded-xl px-6 py-3 font-bold gap-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
            <ImageIcon className="h-4 w-4" />
            Visual Prompts
          </TabsTrigger>
        </TabsList>

        <div className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-sm relative overflow-hidden min-h-[500px]">
           {/* Blog Content */}
           <TabsContent value="blog" className="mt-0 focus-visible:outline-none">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Draft Mode</span>
                <Button 
                  onClick={() => copyToClipboard(mockContent.blog, 'blog')}
                  variant="ghost" 
                  size="sm" 
                  className="rounded-full font-bold gap-2 text-primary hover:bg-primary/5"
                >
                  {copiedTab === 'blog' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copiedTab === 'blog' ? 'Copied!' : 'Copy to Clipboard'}
                </Button>
              </div>
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <div className="whitespace-pre-wrap font-medium text-lg leading-relaxed text-on-surface-variant">
                  {mockContent.blog}
                </div>
              </div>
           </TabsContent>

           {/* LinkedIn Content */}
           <TabsContent value="linkedin" className="mt-0 focus-visible:outline-none">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Optimized for Reach</span>
                <Button 
                   onClick={() => copyToClipboard(mockContent.linkedin, 'linkedin')}
                   variant="ghost" 
                   size="sm" 
                   className="rounded-full font-bold gap-2 text-primary hover:bg-primary/5"
                >
                  {copiedTab === 'linkedin' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copiedTab === 'linkedin' ? 'Copied!' : 'Copy to Clipboard'}
                </Button>
              </div>
              <div className="bg-white p-10 rounded-2xl border border-outline-variant/10 font-sans text-lg font-medium text-on-surface whitespace-pre-wrap leading-relaxed shadow-inner">
                {mockContent.linkedin}
              </div>
           </TabsContent>

           {/* Twitter Content */}
           <TabsContent value="twitter" className="mt-0 focus-visible:outline-none">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Thread Format</span>
                <Button 
                   onClick={() => copyToClipboard(mockContent.twitter, 'twitter')}
                   variant="ghost" 
                   size="sm" 
                   className="rounded-full font-bold gap-2 text-primary hover:bg-primary/5"
                >
                  {copiedTab === 'twitter' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copiedTab === 'twitter' ? 'Copied!' : 'Copy to Clipboard'}
                </Button>
              </div>
              <div className="bg-white p-10 rounded-2xl border border-outline-variant/10 font-sans text-lg font-medium text-on-surface whitespace-pre-wrap leading-relaxed shadow-inner">
                {mockContent.twitter}
              </div>
           </TabsContent>

           {/* Image Prompts */}
           <TabsContent value="images" className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 gap-6">
                {mockContent.images.map((prompt, i) => (
                  <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black shrink-0">
                      #{i + 1}
                    </div>
                    <p className="flex-1 font-medium text-on-surface-variant italic">&quot;{prompt}&quot;</p>
                    <Button 
                       onClick={() => copyToClipboard(prompt, `img-${i}`)}
                       variant="ghost" 
                       size="icon" 
                       className="rounded-full text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {copiedTab === `img-${i}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                ))}
              </div>
           </TabsContent>
        </div>
      </Tabs>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}
