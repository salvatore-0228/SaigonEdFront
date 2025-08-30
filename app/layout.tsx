"use client";

import type React from "react";
import { Inter } from "next/font/google";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/hooks/use-auth";
import { Toaster } from "@/components/ui/toaster";
import { AuthButtons } from "@/components/auth/auth-buttons";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const [fade, setFade] = useState(true);
  const [currentPath, setCurrentPath] = useState(pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  // Next.js App Router: usePathname hook
  let nextPathname = "";
  try {
    nextPathname = require("next/navigation").usePathname?.() || pathname;
  } catch {}

  useEffect(() => {
    if (currentPath !== nextPathname) {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentPath(nextPathname);
        setFade(true);
      }, 300); // duration matches transition
      return () => clearTimeout(timeout);
    }
  }, [nextPathname, currentPath]);

  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <head>
        <title>Going Global</title>
        <link rel="icon" href="/images/Logo Globe 2.png" />

        <title>Going Global</title>
        <meta name="title" content="Going Global" />
        <meta name="description" content="" />

        <meta property="og:type" content="" />
        <meta property="og:url" content="goingglobalguides.com/education" />
        <meta property="og:title" content="Going Global" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/images/Logo Globe 2.png" />

        <meta property="twitter:card" content="" />
        <meta
          property="twitter:url"
          content="goingglobalguides.com/education"
        />
        <meta property="twitter:title" content="Going Global" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="/images/Logo Globe 2.png" />
      </head>
      <body className={`${inter.className} h-full w-full overflow-hidden`}>
        {/* Menu Image Button (Only visible when sidebar is closed & on mobile) */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <AuthButtons sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Sidebar */}
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => {
                setSidebarOpen(false);
              }}
            />
            <div
              className={`h-screen w-screen overflow-hidden bg-background text-foreground transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {children}
            </div>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
