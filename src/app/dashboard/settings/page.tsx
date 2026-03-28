"use client";

import { 
  User, Sparkles, Share2, CreditCard, Star, CheckCircle2, 
  BrainCircuit, Smile, PenTool, UploadCloud, Plus, Linkedin, AtSign, Info, Twitter, Download, Check, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useState, useRef } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "tone" | "apps" | "billing">("general");
  const pro_user = false; // Toggle this variable to true/false to test the Billing views

  return (
    <div className="w-full pb-20 fade-in-up">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full">
        
        {/* Left Sidebar Menu */}
        <div className="w-full md:w-64 lg:w-72 shrink-0 flex flex-col mb-10 md:mb-0 relative z-20">
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab("general")}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === "general" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`}>
              <User className="w-4 h-4" />
              General
            </button>
            <button 
              onClick={() => setActiveTab("tone")}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === "tone" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`}>
              <Sparkles className="w-4 h-4" />
              Tone & Voice
            </button>
            <button 
              onClick={() => setActiveTab("apps")}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === "apps" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`}>
              <Share2 className="w-4 h-4" />
              Connected Apps
            </button>
            <button 
              onClick={() => setActiveTab("billing")}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === "billing" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`}>
              <CreditCard className="w-4 h-4" />
              Billing
            </button>
          </nav>

          <div className="mt-10 bg-linear-to-br from-primary/15 to-primary/5 rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm flex flex-col items-start text-left border border-primary/10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 shrink-0">
              <Star className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
            </div>
            <h4 className="font-bold text-xl text-foreground mb-3 tracking-tight">Unlock Full Potential</h4>
            <p className="text-[13px] font-medium text-muted-foreground mb-8 leading-relaxed pr-2">
              Get unlimited engines, priority processing, and advanced tone customization.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-bold py-6 shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5 border-none">
              Upgrade Now
            </Button>
          </div>
        </div>
        
        {/* Main Content Area */}
        {activeTab === "general" && <GeneralTab />}
        {activeTab === "tone" && <ToneAndVoiceTab />}
        {activeTab === "apps" && <ConnectedAppsTab />}
        {activeTab === "billing" && <BillingTab isPro={pro_user} />}

      </div>
    </div>
  );
}

function GeneralTab() {
  const [user] = useAuthState(auth);
  const [customName, setCustomName] = useState<string | null>(null);
  const [customEmail, setCustomEmail] = useState<string | null>(null);

  const displayedName = customName ?? user?.displayName ?? "Alexander Sterling";
  const displayedEmail = customEmail ?? user?.email ?? "alex@sterling-media.com";

  return (
    <div className="flex-1 relative z-10 w-full min-w-0 fade-in-up">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">General Preferences</h1>
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
          Manage your identity and how you experience Curator.
        </p>
      </div>

      <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-sm border border-border/40 transition-shadow w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black text-muted-foreground tracking-widest uppercase px-2">Full Name</label>
            <Input 
              value={displayedName}
              onChange={(e) => setCustomName(e.target.value)}
              className="bg-primary/5 border border-transparent focus:border-primary/20 focus:bg-background outline-none focus:ring-4 focus:ring-primary/10 rounded-2xl h-[64px] px-6 text-base font-semibold text-foreground shadow-none transition-all placeholder:text-muted-foreground/50"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black text-muted-foreground tracking-widest uppercase px-2">Email Address</label>
            <Input 
              value={displayedEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
              type="email"
              className="bg-primary/5 border border-transparent focus:border-primary/20 focus:bg-background outline-none focus:ring-4 focus:ring-primary/10 rounded-2xl h-[64px] px-6 text-base font-semibold text-foreground shadow-none transition-all placeholder:text-muted-foreground/50"
            />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Experience</h3>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between p-6 md:p-8 bg-primary/5 rounded-[2rem] border border-transparent hover:border-primary/10 transition-all duration-300 gap-6">
            <div className="pr-4">
              <h4 className="font-bold text-foreground text-base mb-1.5">Email Notifications</h4>
              <p className="text-muted-foreground text-sm font-medium">Receive weekly summaries of your content performance.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-6 md:p-8 bg-primary/5 rounded-[2rem] border border-transparent hover:border-primary/10 transition-all duration-300 gap-6">
            <div className="pr-4">
              <h4 className="font-bold text-foreground text-base mb-1.5">Auto-Save Drafts</h4>
              <p className="text-muted-foreground text-sm font-medium">Changes are saved every 30 seconds automatically.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>

        <div className="mt-12 flex justify-start md:justify-end">
          <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-7 text-[1.05rem] font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 border-none flex items-center justify-center gap-2">
            Save Changes
            <CheckCircle2 className="w-4.5 h-4.5 stroke-3" />
          </Button>
        </div>

      </div>
    </div>
  );
}

function ToneAndVoiceTab() {
  const [activeTone, setActiveTone] = useState("professional");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      alert("File size exceeds 1MB limit. Please provide a smaller file.");
    } else {
      alert("File accepted: " + file.name);
    }
  };

  return (
    <div className="flex-1 relative z-10 w-full min-w-0 fade-in-up">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-2">Tone & Voice</h1>
          <p className="text-[14px] text-muted-foreground/80 leading-relaxed max-w-xl">
            Define how the AI represents your unique brand personality.
          </p>
        </div>
        <Button className="bg-[#0022cc] hover:bg-[#001199] text-white rounded-full px-6 py-4 font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20 text-[13px]">
          <Plus className="w-4 h-4 stroke-[3]" />
          New Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 w-full">
        {/* Card 1 */}
        <div 
          onClick={() => setActiveTone("professional")}
          className={`${activeTone === "professional" ? "bg-[#0022cc] text-white shadow-xl shadow-blue-900/20" : "bg-background text-foreground shadow-sm border border-border/40 hover:border-primary/20"} rounded-[2rem] p-6 md:p-7 flex flex-col items-start relative overflow-hidden w-full transition-all cursor-pointer group`}
        >
          <div className="w-9 h-9 flex items-center justify-center mb-4">
            <BrainCircuit className={`w-7 h-7 transition-colors ${activeTone === "professional" ? "fill-white/20 text-white" : "text-slate-400 group-hover:text-primary"}`} />
          </div>
          <h3 className="text-lg font-bold mb-2 tracking-tight leading-snug">Professional Elite</h3>
          <p className={`${activeTone === "professional" ? "text-blue-100" : "text-muted-foreground"} font-medium text-[13px] mb-8`}>
            Authoritative, polished, and industry-leading voice.
          </p>
          <div className="mt-auto">
            {activeTone === "professional" ? (
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block ring-1 ring-white/30 backdrop-blur-md">Active</span>
            ) : (
              <span className="text-[#0022cc] font-bold text-[13px] tracking-tight hover:underline">Set as default</span>
            )}
          </div>
        </div>

        {/* Card 2 */}
        <div 
          onClick={() => setActiveTone("witty")}
          className={`${activeTone === "witty" ? "bg-[#0022cc] text-white shadow-xl shadow-blue-900/20" : "bg-background text-foreground shadow-sm border border-border/40 hover:border-primary/20"} rounded-[2rem] p-6 md:p-7 flex flex-col items-start relative overflow-hidden w-full transition-all cursor-pointer group`}
        >
          <div className="w-9 h-9 flex items-center justify-center mb-4">
            <Smile className={`w-7 h-7 transition-colors ${activeTone === "witty" ? "text-white" : "text-slate-400 group-hover:text-primary"}`} />
          </div>
          <h3 className="text-lg font-bold mb-2 tracking-tight leading-snug">Witty & Casual</h3>
          <p className={`${activeTone === "witty" ? "text-blue-100" : "text-muted-foreground"} font-medium text-[13px] mb-8`}>
            Humorous, relatable, and high-energy social tone.
          </p>
          <div className="mt-auto">
            {activeTone === "witty" ? (
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block ring-1 ring-white/30 backdrop-blur-md">Active</span>
            ) : (
              <span className="text-[#0022cc] font-bold text-[13px] tracking-tight hover:underline">Set as default</span>
            )}
          </div>
        </div>

        {/* Card 3 */}
        <div 
          onClick={() => setActiveTone("deep")}
          className={`${activeTone === "deep" ? "bg-[#0022cc] text-white shadow-xl shadow-blue-900/20" : "bg-background text-foreground shadow-sm border border-border/40 hover:border-primary/20"} rounded-[2rem] p-6 md:p-7 flex flex-col items-start relative overflow-hidden w-full transition-all cursor-pointer group`}
        >
          <div className="w-9 h-9 flex items-center justify-center mb-4">
            <PenTool className={`w-7 h-7 transition-colors ${activeTone === "deep" ? "text-white" : "text-slate-400 group-hover:text-primary"}`} />
          </div>
          <h3 className="text-lg font-bold mb-2 tracking-tight leading-snug">Deep Narrative</h3>
          <p className={`${activeTone === "deep" ? "text-blue-100" : "text-muted-foreground"} font-medium text-[13px] mb-8`}>
            Long-form storytelling with an editorial edge.
          </p>
          <div className="mt-auto">
            {activeTone === "deep" ? (
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block ring-1 ring-white/30 backdrop-blur-md">Active</span>
            ) : (
              <span className="text-[#0022cc] font-bold text-[13px] tracking-tight hover:underline">Set as default</span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-[2.5rem] p-6 md:p-10 border border-primary/10 shadow-sm">
        <h3 className="text-xl font-bold text-foreground mb-6">Train the Model</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
              Upload previous articles, newsletters, or social posts. Our AI will analyze your sentence structure, vocabulary choice, and rhythmic patterns to replicate your specific voice.
            </p>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".pdf,.docx,.txt"
              onChange={(e) => {
                handleFile(e.target.files?.[0]);
                if (e.target) e.target.value = '';
              }}
            />
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFile(e.dataTransfer.files?.[0]);
              }}
              className="flex-1 min-h-[180px] border-2 border-dashed border-primary/20 rounded-[2rem] bg-background/50 flex flex-col items-center justify-center p-6 text-center hover:bg-background transition-colors cursor-pointer group"
            >
              <UploadCloud className="w-8 h-8 text-slate-400 mb-4 group-hover:text-primary transition-colors" />
              <h4 className="font-bold text-foreground text-[14px] mb-1.5">Drop files here or click to browse</h4>
              <p className="text-[12px] font-medium text-muted-foreground uppercase tracking-wider">PDF, DOCX, or TXT up to 1MB</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 h-full">
            <label className="text-[10px] font-black text-muted-foreground tracking-widest uppercase px-2">Paste raw text sample</label>
            <textarea 
              placeholder="Paste your best writing sample here..."
              className="flex-1 w-full bg-background rounded-[2rem] p-6 outline-none border border-transparent focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all resize-none shadow-sm text-foreground placeholder:text-muted-foreground/50 font-medium text-[14px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectedAppsTab() {
  return (
    <div className="flex-1 relative z-10 w-full min-w-0 fade-in-up">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">Connected Apps</h1>
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
          Seamlessly publish your curated content to your favorite platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* LinkedIn */}
        <div className="bg-background rounded-[2.5rem] p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm border border-border/40 gap-6 transition-all hover:border-primary/20">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#0a66c2] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
              <Linkedin className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-0.5">LinkedIn</h3>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></span>
                Linked as A. Sterling
              </div>
            </div>
          </div>
          <Button variant="outline" className="rounded-full px-6 py-3 text-[14px] font-bold border-border shadow-none w-full sm:w-auto min-w-[120px] hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">
            Disconnect
          </Button>
        </div>

        {/* X (Twitter) */}
        <div className="bg-background rounded-[2.5rem] p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm border border-border/40 gap-6 transition-all hover:border-primary/20">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-black/20">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-0.5">X (Twitter)</h3>
              <div className="text-[13px] font-medium text-muted-foreground">
                Not connected
              </div>
            </div>
          </div>
          <Button className="bg-[#0022cc] hover:bg-[#001199] text-white rounded-full px-6 py-3 text-[14px] font-bold shadow-md shadow-blue-900/20 w-full sm:w-auto min-w-[120px]">
             Connect
          </Button>
        </div>

        {/* Medium */}
        <div className="bg-background rounded-[2.5rem] p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm border border-border/40 gap-6 transition-all hover:border-primary/20">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shrink-0 gap-1 shadow-sm">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-2 h-3 bg-black rounded-full"></div>
              <div className="w-1.5 h-3 bg-black rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-0.5">Medium</h3>
              <div className="text-[13px] font-medium text-muted-foreground">
                Draft integration only
              </div>
            </div>
          </div>
          <Button className="bg-[#0022cc] hover:bg-[#001199] text-white rounded-full px-6 py-3 text-[14px] font-bold shadow-md shadow-blue-900/20 w-full sm:w-auto min-w-[120px]">
            Connect
          </Button>
        </div>

        {/* Threads */}
        <div className="bg-background rounded-[2.5rem] p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm border border-border/40 gap-6 transition-all hover:border-primary/20 group">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#ff8a00] via-[#e52e71] to-[#962fbf] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
              <AtSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-0.5">Threads</h3>
              <div className="text-[13px] font-medium text-muted-foreground flex items-center gap-1.5">
                Coming soon <Info className="w-3.5 h-3.5 opacity-50 relative top-[1px]" />
              </div>
            </div>
          </div>
          <Button variant="secondary" className="bg-slate-100/80 text-slate-400 rounded-full px-6 py-3 text-[14px] font-bold shadow-none pointer-events-none w-full sm:w-auto min-w-[120px] hover:bg-slate-100">
            Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}

function BillingTab({ isPro }: { isPro: boolean }) {
  return (
    <div className="flex-1 relative z-10 w-full min-w-0 fade-in-up">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">Billing</h1>
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
          Manage your subscription, usage, and payment methods.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 mb-10">
        {/* Plan card spanning 2/3 */}
        <div className="flex-1 bg-background rounded-[2.5rem] p-6 lg:p-8 shadow-sm border border-border/40 flex flex-col md:flex-row gap-8 md:gap-5 justify-between">
          {/* Left part */}
          <div className="flex flex-col min-w-[180px]">
            <div className="flex items-center gap-2.5 mb-3">
              <h3 className="font-bold text-xl text-foreground">{isPro ? "Pro Plan" : "Free Plan"}</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase ${isPro ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{isPro ? "Active" : "Current"}</span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-black text-foreground">{isPro ? "$29" : "$0"}</span>
              <span className="text-muted-foreground font-medium text-sm">/mo</span>
            </div>
            {isPro ? (
              <>
                <p className="text-[12px] font-medium text-muted-foreground mb-6">Next renewal on Oct 12, 2023</p>
                <div className="flex flex-col gap-2.5 mt-auto">
                  <Button className="w-full bg-[#0022cc] hover:bg-[#001199] text-white rounded-full font-bold shadow-md shadow-blue-900/20 py-5 text-[13px]">Change Plan</Button>
                  <Button variant="outline" className="w-full rounded-full font-bold border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 py-5 text-[13px] shadow-none border">Cancel Subscription</Button>
                </div>
              </>
            ) : (
              <>
                <p className="text-[12px] font-medium text-muted-foreground mb-6">Limited features enabled</p>
                <div className="mt-auto">
                  <Button className="bg-[#0022cc] hover:bg-[#001199] text-white rounded-full font-bold shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 py-5 px-8 text-[13px]">
                    <Star className="w-3.5 h-3.5 fill-white text-white" /> Upgrade to Pro
                  </Button>
                </div>
              </>
            )}
          </div>
          
          {/* Separator on desktop */}
          <div className="hidden md:block w-px bg-border/50 self-stretch my-2"></div>

          {/* Right part */}
          <div className="flex-1 flex flex-col justify-center min-w-[180px]">
            <div className="flex items-center justify-between mb-2.5 text-[13px]">
              <span className="font-bold text-foreground">Generation Credits</span>
              <span className="font-bold text-muted-foreground">{isPro ? "840/1000" : "0/5"}</span>
            </div>
            <div className="w-full h-2.5 bg-primary/10 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#0022cc] rounded-full" style={{ width: isPro ? "84%" : "10%" }}></div>
            </div>
            <p className="text-[12px] font-medium text-muted-foreground leading-relaxed">
              {isPro 
                ? "You've used 84% of your monthly credits. Credits will reset on Oct 12."
                : "Upgrade to Pro for 1000+ monthly credits and priority processing."}
            </p>
          </div>
        </div>

        {/* Payment Method card spanning 1/3 */}
        <div className="w-full xl:w-[280px] bg-background rounded-[2.5rem] p-6 lg:p-8 shadow-sm border border-border/40 flex flex-col">
          <h3 className="font-bold text-base text-foreground mb-6">Payment Method</h3>
          
          {isPro ? (
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 flex flex-col sm:flex-row xl:flex-col 2xl:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
              <div className="w-[50px] h-[34px] bg-[#1a1f71] rounded-lg flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <span className="text-white font-black italic tracking-tighter text-[11px]">VISA</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-foreground text-[13px]">Visa ending in 4242</span>
                <span className="text-[11px] font-medium text-muted-foreground">Expires 12/26</span>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center mb-8 mt-4 gap-3">
              <CreditCard className="w-10 h-10 text-slate-300 stroke-1" />
              <span className="text-[13px] font-medium text-muted-foreground">No payment method added</span>
            </div>
          )}

          <div className="mt-auto">
            {isPro ? (
              <Button variant="outline" className="w-full rounded-full font-bold shadow-none flex items-center gap-2 py-5 text-[13px]">
                <PenTool className="w-3.5 h-3.5" /> Edit Card
              </Button>
            ) : (
              <Button variant="outline" className="w-full rounded-full font-bold shadow-none flex items-center gap-2 py-5 text-[13px]">
                <Plus className="w-3.5 h-3.5" /> Add Method
              </Button>
            )}
          </div>
        </div>
      </div>

      {isPro ? (
        // PRO: Billing History
        <div className="bg-background rounded-[3rem] p-8 lg:p-10 shadow-sm border border-border/40">
          <h3 className="font-bold text-xl text-foreground mb-8">Billing History</h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="pb-4 text-[10px] font-black text-muted-foreground tracking-widest uppercase w-[25%]">Date</th>
                  <th className="pb-4 text-[10px] font-black text-muted-foreground tracking-widest uppercase w-[25%]">Invoice ID</th>
                  <th className="pb-4 text-[10px] font-black text-muted-foreground tracking-widest uppercase w-[25%]">Amount</th>
                  <th className="pb-4 text-[10px] font-black text-muted-foreground tracking-widest uppercase text-right w-[25%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "Sep 12, 2023", id: "INV-2023-009", amount: "$29.00" },
                  { date: "Aug 12, 2023", id: "INV-2023-008", amount: "$29.00" },
                  { date: "Jul 12, 2023", id: "INV-2023-007", amount: "$29.00" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="py-6 text-[14px] font-semibold text-foreground">{row.date}</td>
                    <td className="py-6 text-[14px] font-medium text-muted-foreground">{row.id}</td>
                    <td className="py-6 text-[14px] font-bold text-foreground">{row.amount}</td>
                    <td className="py-6 text-right">
                      <a href="#" className="inline-flex items-center justify-end gap-1.5 text-[13px] font-bold text-[#0022cc] hover:underline">
                        <Download className="w-3.5 h-3.5 stroke-[3]" /> Download PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // FREE: Upsell + Compare Plans
        <div className="flex flex-col gap-10">
          {/* Pro Banner */}
          {/* Pro Banner */}
          <div className="bg-[#2d3082] rounded-[2.5rem] p-7 md:p-8 lg:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 shadow-xl overflow-hidden w-full border border-white/5">
            <div className="flex-1 w-full self-center">
              <h2 className="text-xl md:text-2xl lg:text-[1.7rem] font-bold mb-3 tracking-tight leading-[1.25]">Unlock the Full Power of Curator</h2>
              <p className="text-[#a4a7e9] text-[13px] lg:text-[14px] mb-6 lg:mb-7 leading-relaxed font-medium">Take your content creation to the next level with our Professional suite of tools.</p>
              
              <ul className="flex flex-col gap-3">
                {[
                  "1,000 Generation Credits per month",
                  "Unlimited brand strategies & voices",
                  "Advanced Tone Analysis & Customization",
                  "Priority AI processing & support"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-[13px] lg:text-[14px] text-white">
                    <div className="w-5 h-5 rounded-full bg-[#18b9ff] flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#3c3e92] rounded-[2rem] p-7 md:p-8 w-full sm:w-[280px] lg:w-[300px] xl:w-[320px] mx-auto lg:mx-0 flex flex-col items-center justify-center shrink-0">
               <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#a4a7e9] mb-3 block">Pro Plan</span>
               <div className="flex items-end justify-center gap-1 mb-6">
                 <span className="text-[2.8rem] lg:text-[3.2rem] font-bold text-white leading-none tracking-tight">$29</span>
                 <span className="text-[#a4a7e9] font-medium text-[15px] pb-1">/mo</span>
               </div>
               <Button className="w-full bg-white hover:bg-slate-100 text-[#2d3082] rounded-full h-[48px] text-[14px] font-bold shadow-lg mb-3 transition-all">Start 14-Day Free Trial</Button>
               <span className="text-[11px] font-medium text-[#a4a7e9] opacity-80 text-center">No credit card required to start trial</span>
            </div>
          </div>

          <div className="w-full">
            <h3 className="font-black text-2xl text-foreground mb-6 px-4">Compare Plans</h3>
            <div className="bg-background rounded-[3rem] p-8 lg:p-12 shadow-sm border border-border/40">
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="pb-6 text-sm font-black text-foreground w-[40%]">Feature</th>
                      <th className="pb-6 text-sm font-black text-foreground text-center w-[30%]">Free</th>
                      <th className="pb-6 text-sm font-black text-[#0022cc] text-center w-[30%]">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-6 text-[15px] font-medium text-muted-foreground">Generation Credits</td>
                      <td className="py-6 text-[15px] font-bold text-foreground text-center">5 / mo</td>
                      <td className="py-6 text-[15px] font-black text-foreground text-center">1,000 / mo</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-6 text-[15px] font-medium text-muted-foreground">Voice Profiles</td>
                      <td className="py-6 text-[15px] font-bold text-foreground text-center">1</td>
                      <td className="py-6 text-[15px] font-black text-foreground text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-6 text-[15px] font-medium text-muted-foreground">Connected Apps</td>
                      <td className="py-6 text-[15px] font-bold text-foreground text-center">2</td>
                      <td className="py-6 text-[15px] font-black text-foreground text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-6 text-[15px] font-medium text-muted-foreground">Advanced Training</td>
                      <td className="py-6 text-center">
                        <X className="w-5 h-5 mx-auto text-slate-300 stroke-[2]" />
                      </td>
                      <td className="py-6 text-center text-[#0022cc]">
                        <Check className="w-5 h-5 mx-auto stroke-[3]" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-6 text-[15px] font-medium text-muted-foreground">Export Formats</td>
                      <td className="py-6 text-[15px] font-bold text-foreground text-center">Text only</td>
                      <td className="py-6 text-[15px] font-black text-foreground text-center">PDF, Word, HTML</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
