"use client";

import { useState } from "react";
import { 
  Search, List, Grid, Rocket, Palette, Sparkles, 
  TrendingUp, Zap, Megaphone, Target, Lightbulb, Code, PenTool, Gem 
} from "lucide-react";
import { DUMMY_CAMPAIGNS, CampaignIconType, CampaignColorType } from "@/constants/dummy-data";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const iconMap: Record<CampaignIconType, React.ElementType> = {
  rocket: Rocket,
  palette: Palette,
  sparkles: Sparkles,
  trending: TrendingUp,
  zap: Zap,
  megaphone: Megaphone,
  target: Target,
  lightbulb: Lightbulb,
  code: Code,
  pen: PenTool,
  emerald: Gem,
};

const colorMap: Record<CampaignColorType, string> = {
  primary: "text-primary bg-primary/10",
  teal: "text-teal-500 bg-teal-500/10",
  orange: "text-orange-500 bg-orange-500/10",
  purple: "text-purple-500 bg-purple-500/10",
  rose: "text-rose-500 bg-rose-500/10",
  amber: "text-amber-500 bg-amber-500/10",
  emerald: "text-emerald-500 bg-emerald-500/10",
  cyan: "text-cyan-500 bg-cyan-500/10",
  indigo: "text-indigo-500 bg-indigo-500/10",
  fuchsia: "text-fuchsia-500 bg-fuchsia-500/10",
};

export default function HistoryPage() {
  const [view, setView] = useState<'list' | 'grid'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeframe, setTimeframe] = useState('all-time');

  const filteredCampaigns = DUMMY_CAMPAIGNS.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.outputs.some(o => o.label.toLowerCase().includes(searchQuery.toLowerCase()));
                          
    let matchesTime = true;
    if (timeframe === "last-week") {
      matchesTime = c.createdAt.includes("DAY") || c.createdAt.includes("HOUR") || c.createdAt.includes("TODAY") || c.createdAt.includes("YESTERDAY");
    } else if (timeframe === "last-month") {
      matchesTime = c.createdAt.includes("MAR") || c.createdAt.includes("FEB") || c.createdAt.includes("DAY");
    } else if (timeframe === "last-year") {
      matchesTime = true; // Example dummy logic
    }
    
    return matchesSearch && matchesTime;
  });

  return (
    <div className="w-full pb-20 fade-in-up">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">Campaign History</h1>
          <p className="text-muted-foreground/80 max-w-xl text-lg relative z-10 leading-relaxed">
            Review, refine, and redeploy your past content strategies. Every architectural thought, archived for your next inspiration.
          </p>
        </div>
        
        {/* Toggle View */}
        <div className="flex items-center bg-background rounded-full p-1.5 shadow-sm border border-border/40 shrink-0 relative z-20">
          <button 
            type="button"
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${view === 'list' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <List className="w-4 h-4 pointer-events-none" />
            List
          </button>
          <button 
            type="button"
            onClick={() => setView('grid')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${view === 'grid' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Grid className="w-4 h-4 pointer-events-none" />
            Grid
          </button>
        </div>
      </div>

      {/* Controls: Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 relative z-20">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search strategies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-background/80 backdrop-blur-md border border-border/40 rounded-full py-4 pl-14 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-base transition-all h-[60px] font-medium placeholder:text-muted-foreground/60"
          />
        </div>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="flex items-center justify-between gap-3 bg-background/80 backdrop-blur-md border border-border/40 rounded-full px-6 shadow-sm hover:bg-muted/50 transition-colors h-[60px]! w-full sm:w-[220px] text-base font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/20 data-[size=default]:h-[60px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-3xl border-border/40 bg-background/95 backdrop-blur-xl shadow-xl p-2 min-w-[220px]">
            <SelectItem value="all-time" className="rounded-2xl font-medium text-base py-3 px-4 cursor-pointer">All time</SelectItem>
            <SelectItem value="last-week" className="rounded-2xl font-medium text-base py-3 px-4 cursor-pointer">Last week</SelectItem>
            <SelectItem value="last-month" className="rounded-2xl font-medium text-base py-3 px-4 cursor-pointer">Last month</SelectItem>
            <SelectItem value="last-year" className="rounded-2xl font-medium text-base py-3 px-4 cursor-pointer">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* List or Grid View */}
      {view === 'list' ? (
        <div className="flex flex-col gap-4 relative z-10">
          {filteredCampaigns.map((campaign) => {
            const IconComponent = iconMap[campaign.iconType] || Rocket;
            const colorClasses = colorMap[campaign.iconColor] || "text-primary bg-primary/10";
            return (
              <div 
                key={campaign.id} 
                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-background rounded-[2rem] shadow-sm hover:shadow-md border border-border/40 transition-all duration-300 gap-6"
              >
                <div className="flex items-center gap-5 md:w-[35%] shrink-0">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${colorClasses}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground leading-tight whitespace-pre-line group-hover:text-primary transition-colors">{campaign.title}</h3>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">{campaign.createdAt}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 flex-1 justify-start md:justify-center">
                  {campaign.outputs.map((output, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/10 whitespace-nowrap">
                      {output.label}
                    </span>
                  ))}
                </div>

                <div className="shrink-0 flex justify-end md:w-[20%] w-full">
                  <Button variant="secondary" className="w-full md:w-auto rounded-full bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary font-bold px-8 py-5 h-auto transition-colors">
                    View Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
          {filteredCampaigns.map((campaign) => {
            const IconComponent = iconMap[campaign.iconType] || Rocket;
            const colorClasses = colorMap[campaign.iconColor] || "text-primary bg-primary/10";
            return (
              <div 
                key={campaign.id} 
                className="group flex flex-col p-8 bg-background rounded-[2.5rem] shadow-sm hover:shadow-lg border border-border/40 transition-all duration-300 h-full hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${colorClasses}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary/60 mt-2">
                    {campaign.createdAt}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-foreground mb-6 leading-tight whitespace-pre-line group-hover:text-primary transition-colors">
                    {campaign.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-10">
                    {campaign.outputs.map((output, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/10">
                        {output.label}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="secondary" className="w-full rounded-full bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary font-bold py-6 h-auto transition-colors mt-auto">
                  View Details
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
