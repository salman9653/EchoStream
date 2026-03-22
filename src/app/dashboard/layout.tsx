"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Zap, 
  Archive, 
  Fingerprint, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const sidebarNavItems = [
  {
    title: "The Engine",
    href: "/dashboard",
    icon: Zap,
  },
  {
    title: "Archive",
    href: "/dashboard/archive",
    icon: Archive,
  },
  {
    title: "Brand Voice DNA",
    href: "/dashboard/voice",
    icon: Fingerprint,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-surface-container-lowest overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-on-surface/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-surface-container-low border-r border-outline-variant/10 transform transition-transform duration-300 lg:relative lg:translate-x-0 overflow-y-auto",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg editorial-gradient flex items-center justify-center text-white text-xs font-black shadow-lg">ES</div>
              <span className="font-black text-on-surface font-heading tracking-tight text-xl">EchoStream</span>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex-1 px-4 space-y-1 mt-4">
            {sidebarNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all group",
                    isActive 
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20" 
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-primary")} />
                  <span>{item.title}</span>
                  {isActive && <ChevronRight className="ml-auto h-4 w-4 text-white/50" />}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 mt-auto border-t border-outline-variant/10 space-y-2">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="h-10 w-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <User className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-on-surface truncate">Alex Rivera</p>
                <p className="text-xs text-on-surface-variant truncate font-medium">Pro Member</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl text-on-surface-variant hover:text-error hover:bg-error/5 font-bold">
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Header */}
        <header className="h-20 bg-surface-container-lowest border-b border-outline-variant/10 flex items-center justify-between px-8 relative z-10">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex-1 px-4">
            <h1 className="text-xl font-bold text-on-surface font-heading">
              {sidebarNavItems.find(item => item.href === pathname)?.title || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
              <Zap className="h-3 w-3 fill-primary" />
              1,240 Sparks Left
            </div>
          </div>
        </header>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-surface-container-lowest relative">
          <div className="max-w-5xl mx-auto h-full">
            {children}
          </div>
          {/* Decorative Background Element */}
          <div className="fixed -bottom-64 -right-64 w-[32rem] h-[32rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        </div>
      </main>
    </div>
  );
}
