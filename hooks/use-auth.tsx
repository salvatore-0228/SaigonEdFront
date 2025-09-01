"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, type User, type AuthState } from "@/lib/auth";
import { useRouter } from "next/navigation";

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
  const router = useRouter();

  // Initialize auth state on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const user = await auth.getCurrentUser();
        setState({
          user,
          isAuthenticated: !!user,
          isLoading: false,
        });
      } catch (error) {
        console.warn("Failed to initialize auth:", error);
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    initializeAuth();
  }, []);

  const signIn = async (username: string, password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const user = await auth.signIn(username, password);
      console.log("Successful sign in!!!!!!!");
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      router.push("/"); // Redirect to home page after sign in
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const user = await auth.signUp(name, email, password);
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      router.push("/"); // Redirect to home page after sign up
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const signOut = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      await auth.signOut();
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      router.push("/signin"); // Redirect to sign in page after sign out
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
