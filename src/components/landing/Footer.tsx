"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 px-6 md:px-16 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg editorial-gradient flex items-center justify-center text-white text-xs font-black">ES</div>
          <span className="font-black text-on-surface font-heading tracking-tight">EchoStream.AI</span>
        </div>
        
        <div className="flex gap-8">
          <Link href="#" className="text-on-surface-variant hover:text-primary font-medium transition-colors">Twitter</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary font-medium transition-colors">LinkedIn</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary font-medium transition-colors">Privacy</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary font-medium transition-colors">Terms</Link>
        </div>
        
        <p className="text-on-surface-variant font-medium">© 2026 EchoStream.AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
