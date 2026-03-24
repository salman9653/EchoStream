"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, ChevronRight, Eye, EyeOff, Loader2, AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/auth-context";

const PASSWORD_RULES = [
  { label: "At least 6 characters", test: (p: string) => p.length >= 6 },
  { label: "Contains a letter", test: (p: string) => /[a-zA-Z]/.test(p) },
  { label: "Contains a number", test: (p: string) => /[0-9]/.test(p) },
];

export default function RegisterPage() {
  const router = useRouter();
  const { register, loginWithGoogle } = useAuth();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!displayName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const failedRules = PASSWORD_RULES.filter((rule) => !rule.test(password));
    if (failedRules.length > 0) {
      setError("Password doesn't meet requirements.");
      return;
    }

    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service.");
      return;
    }

    setIsLoading(true);
    try {
      await register(email, password, displayName);
      router.push("/dashboard");
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || "An error occurred during registration.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignUp() {
    setError("");
    setIsGoogleLoading(true);
    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || "Google sign-up failed. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  }

  const isFormDisabled = isLoading || isGoogleLoading;

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="fixed top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-surface-container-lowest p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-8 text-center">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-xl editorial-gradient flex items-center justify-center text-white text-sm font-black shadow-lg">ES</div>
            <span className="font-black text-on-surface font-heading tracking-tight text-2xl">EchoStream</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-heading mb-2">Create Account</h2>
          <p className="text-on-surface-variant font-medium text-sm">Start building your content engine today.</p>
        </div>

        {/* Error Banner */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm font-medium text-destructive"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="displayName" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <User className="h-3 w-3" />
              Full Name
            </Label>
            <Input
              id="displayName"
              type="text"
              placeholder="Alex Rivera"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              disabled={isFormDisabled}
              className="h-14 rounded-xl border-outline-variant/20 bg-surface-container-low focus:ring-primary/20 font-medium"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <Mail className="h-3 w-3" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isFormDisabled}
              className="h-14 rounded-xl border-outline-variant/20 bg-surface-container-low focus:ring-primary/20 font-medium"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <Lock className="h-3 w-3" />
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isFormDisabled}
                className="h-14 rounded-xl border-outline-variant/20 bg-surface-container-low focus:ring-primary/20 font-medium pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Password Strength Hints */}
            {password.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-1.5 pt-1"
              >
                {PASSWORD_RULES.map((rule) => {
                  const passed = rule.test(password);
                  return (
                    <div
                      key={rule.label}
                      className={`flex items-center gap-2 text-xs font-medium transition-colors ${
                        passed ? "text-emerald-600 dark:text-emerald-400" : "text-on-surface-variant"
                      }`}
                    >
                      <div className={`h-3.5 w-3.5 rounded-full flex items-center justify-center transition-colors ${
                        passed ? "bg-emerald-100 dark:bg-emerald-900/40" : "bg-surface-container"
                      }`}>
                        {passed && <Check className="h-2.5 w-2.5" />}
                      </div>
                      {rule.label}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <Lock className="h-3 w-3" />
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isFormDisabled}
                className={`h-14 rounded-xl border-outline-variant/20 bg-surface-container-low focus:ring-primary/20 font-medium pr-12 ${
                  confirmPassword && confirmPassword !== password ? "border-destructive/50" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {confirmPassword && confirmPassword !== password && (
              <p className="text-xs font-medium text-destructive">Passwords do not match.</p>
            )}
          </div>

          {/* Terms of Service */}
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => setAgreedToTerms(!agreedToTerms)}
              disabled={isFormDisabled}
              className={`mt-0.5 h-5 w-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                agreedToTerms
                  ? "bg-primary border-primary text-on-primary"
                  : "border-outline-variant/40 hover:border-primary/50"
              }`}
            >
              {agreedToTerms && <Check className="h-3 w-3" />}
            </button>
            <span className="text-xs font-medium text-on-surface-variant leading-relaxed">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:underline font-bold">Terms of Service</Link>
              {" "}and{" "}
              <Link href="#" className="text-primary hover:underline font-bold">Privacy Policy</Link>
            </span>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isFormDisabled}
            className="w-full h-14 rounded-full editorial-gradient text-white font-black text-lg shadow-xl shadow-primary/20 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Creating account...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Create Account
                <ChevronRight className="h-5 w-5" />
              </span>
            )}
          </Button>

          <div className="relative py-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-surface-container-lowest px-4 text-on-surface-variant">Or sign up with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            disabled={isFormDisabled}
            onClick={handleGoogleSignUp}
            className="w-full h-14 rounded-full font-bold border-outline-variant/20 hover:bg-surface-container-low gap-3 disabled:opacity-60"
          >
            {isGoogleLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )}
            Sign up with Google
          </Button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-on-surface-variant">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
