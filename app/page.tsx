"use client"

import { BookPage } from "@/components/book-page"
import { redirect } from "next/navigation"
import type { PageData } from "@/types/types"
import { useState, useEffect } from "react"
import VideoLogo from "@/components/log-page"
import CoverPage from "@/components/cover-page"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { LandingPage } from "@/components/auth/landing-page"
import SignInPage from "./signin/page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"video" | "shanghai" | "next" | "contents" | "history" | "history2" | "culture" | "reading" | "introduction">("video")
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  const handleVideoEnd = () => {
    setCurrentPage("shanghai")
  }

  const handlePowerButtonClick = () => {
    redirect("/pages/1")
  }

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Show landing page if not authenticated
  if (!isAuthenticated) {
    // return <LandingPage />
    return <SignInPage />
  }

  // Show video/cover content if authenticated
  if (currentPage === "video") {
    return <VideoLogo onVideoEnd={handleVideoEnd} />
  }

  if (currentPage === "shanghai") {
    return <CoverPage onPowerButtonClick={handlePowerButtonClick} />
  }

  // This should not be reached
  return null
}
