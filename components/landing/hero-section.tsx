"use client"

import { Button } from '@/components/ui/button'
import { BookOpen, Sparkles, ArrowRight, Star, Globe } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url(/images/ethereal-background.png)" }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/30 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              <img src="/images/tiger-logo.png" alt="Asian Tigers Group" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Gateway to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Global Education
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive guides to international schools, educational opportunities,
            and everything you need to navigate the world of global education.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-300">
              <Globe className="w-5 h-5 text-primary" />
              <span>500+ International Schools</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Star className="w-5 h-5 text-accent" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>Comprehensive Resources</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push('/signup')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 h-14 text-lg px-8"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push('/signin')}
              className="h-14 text-lg px-8 border-2 border-white/20 text-white bg-white/10 hover:bg-white/50 hover:text-white"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Trusted by thousands of students and families worldwide</p>
            <div className="flex justify-center space-x-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
