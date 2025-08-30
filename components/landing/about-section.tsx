"use client"

import { Button } from '@/components/ui/button'
import { BookOpen, Sparkles, Star, Users, Globe, Award } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function AboutSection() {
  const router = useRouter()

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Students to
              <span className="block bg-gradient-to-r from-gray-800 via-gray-600 to-amber-600 dark:from-gray-300 dark:via-gray-100 dark:to-amber-400 bg-clip-text text-transparent">
                Go Global
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Going Global was founded with a simple mission: to make international education 
              accessible to every student. We believe that quality education knows no borders, 
              and every student deserves the opportunity to explore global learning opportunities.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Globe className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    We partner with schools across 50+ countries, providing students with 
                    access to diverse educational opportunities worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-600 dark:to-amber-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Users className="w-4 h-4 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our team of education consultants brings decades of experience in 
                    international education and student placement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Award className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Proven Success</h3>
                  <p className="text-muted-foreground">
                    With a 98% success rate, we've helped thousands of students achieve 
                    their dreams of studying abroad.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => router.push('/signup')}
                className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 text-white shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
                Join Our Community
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/schoollist')}
                className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Schools
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16">
                  <img src="/images/tiger-logo.png" alt="Asian Tigers Group" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Going Global</h3>
                  <p className="text-muted-foreground">Your Education Partner</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200/30 dark:border-gray-600/30">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-foreground">Global Network</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">500+ Schools</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-lg border border-amber-200/30 dark:border-amber-600/30">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span className="text-foreground">Expert Consultants</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">50+ Countries</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200/30 dark:border-gray-600/30">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-foreground">Success Rate</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">98%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-amber-50 dark:from-gray-800 dark:to-amber-900/30 rounded-lg border border-gray-300/30 dark:border-amber-600/30">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-foreground">
                    Trusted by 10,000+ students worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-gray-300/20 to-gray-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-amber-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
