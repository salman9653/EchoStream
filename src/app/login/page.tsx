"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Mail, Lock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="fixed top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-surface-container-lowest p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-xl editorial-gradient flex items-center justify-center text-white text-sm font-black shadow-lg">ES</div>
            <span className="font-black text-on-surface font-heading tracking-tight text-2xl">EchoStream</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-heading mb-2">Welcome Back</h2>
          <p className="text-on-surface-variant font-medium text-sm">Sign in to manage your content engine.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <Mail className="h-3 w-3" />
              Email Address
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="alex@example.com" 
              className="h-14 rounded-xl border-outline-variant/20 bg-surface-container-low focus:ring-primary/20 font-medium"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <Lock className="h-3 w-3" />
                Password
              </Label>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Forgot?</Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              className="h-14 rounded-xl border-outline-variant/20 bg-surface-container-low focus:ring-primary/20 font-medium"
            />
          </div>

          <Button size="lg" className="w-full h-14 rounded-full editorial-gradient text-on-primary font-black text-lg shadow-xl shadow-primary/20 transition-all transform hover:scale-[1.02] active:scale-95">
            Sign In
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-surface-container-lowest px-4 text-on-surface-variant">Or continue with</span>
            </div>
          </div>

          <Button variant="outline" className="w-full h-14 rounded-full font-bold border-outline-variant/20 hover:bg-surface-container-low gap-3">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            Sign in with Google
          </Button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-on-surface-variant">
          Don't have an account?{" "}
          <Link href="#" className="text-primary font-bold hover:underline">Create one for free</Link>
        </p>
      </motion.div>
    </div>
  );
}
