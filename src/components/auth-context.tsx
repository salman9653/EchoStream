"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

// ─── Types ──────────────────────────────────────────────
interface UserData {
  uid: string;
  email: string | undefined;
  displayName: string | undefined;
  photoURL: string | undefined;
}

interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ───────────────────────────────────────────
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  // Check session on mount
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch {
        // Session invalid or expired
      } finally {
        setLoading(false);
      }
    }
    checkSession();
  }, []);

  // Login with email/password
  const login = useCallback(async (email: string, password: string) => {
    // Sign in with Firebase client SDK to get ID token
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await credential.user.getIdToken();

    // Send token to our API route for session creation
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Login failed.");
    }

    const data = await res.json();
    setUser(data.user);
  }, []);

  // Register with email/password
  const register = useCallback(
    async (email: string, password: string, displayName: string) => {
      // Call our register API route
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, displayName }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Registration failed.");
      }

      // Auto-login after registration
      await login(email, password);
    },
    [login]
  );

  // Login with Google
  const loginWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    const idToken = await credential.user.getIdToken();

    // Verify via our API route
    const res = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Google sign-in failed.");
    }

    const data = await res.json();
    setUser(data.user);
  }, []);

  // Logout
  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    await auth.signOut();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────────
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
