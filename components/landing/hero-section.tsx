"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, ArrowRight, Star, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-amber-50 overflow-hidden">
      {/* Light Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url(/images/ethereal-background.png)" }}
      />

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-100/95 to-amber-50/90"></div>

      {/* Floating Light Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/40 to-gray-200/40 rounded-full blur-xl animate-pulse shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-amber-300/30 to-amber-100/30 rounded-full blur-xl animate-pulse delay-1000 shadow-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-gray-100/20 to-amber-100/20 rounded-full blur-xl animate-pulse delay-2000 shadow-2xl"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-amber-100/30 to-amber-200/30 rounded-full blur-xl animate-pulse delay-1500 shadow-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/">
              <div className="relative w-48 h-48">
                <img
                  src="/images/tiger-logo.png"
                  alt="Asian Tigers Group"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Gateway to
            <span className="block bg-gradient-to-r from-gray-300 via-white to-amber-400 bg-clip-text text-transparent">
              Global Education
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive guides to international schools, educational
            opportunities, and everything you need to navigate the world of
            global education.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-700 backdrop-blur-sm bg-white/60 px-4 py-2 rounded-full border border-gray-200">
              <Globe className="w-5 h-5 text-gray-500" />
              <span>500+ International Schools</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 backdrop-blur-sm bg-white/60 px-4 py-2 rounded-full border border-gray-200">
              <Star className="w-5 h-5 text-amber-400" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 backdrop-blur-sm bg-white/60 px-4 py-2 rounded-full border border-gray-200">
              <BookOpen className="w-5 h-5 text-gray-500" />
              <span>Comprehensive Resources</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/signup")}
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 border border-gray-600 shadow-2xl shadow-black/50 h-14 text-lg px-8 text-white"
            >
              <Sparkles className="w-5 h-5 mr-2 text-amber-400" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push("/signin")}
              className="h-14 text-lg px-8 border-2 border-gray-400/30 text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white hover:border-gray-300/50 backdrop-blur-sm"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-600/30">
            <p className="text-gray-400 mb-6">
              Trusted by thousands of students and families worldwide
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center backdrop-blur-sm bg-white/5 px-6 py-4 rounded-lg border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-sm text-gray-400">Students Helped</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/5 px-6 py-4 rounded-lg border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/5 px-6 py-4 rounded-lg border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-gradient-to-b from-gray-300 to-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
