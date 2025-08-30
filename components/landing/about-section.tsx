"use client"

import { Button } from '@/components/ui/button'
import { BookOpen, Sparkles, Star, Users, Globe, Award } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function AboutSection() {
  const router = useRouter()

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Students to
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-primary" />
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
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-accent" />
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
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary" />
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
                className="bg-primary hover:bg-primary/90"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Join Our Community
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/schoollist')}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Schools
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
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
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Global Network</span>
                  </div>
                  <span className="text-sm text-muted-foreground">500+ Schools</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Expert Consultants</span>
                  </div>
                  <span className="text-sm text-muted-foreground">50+ Countries</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Success Rate</span>
                  </div>
                  <span className="text-sm text-muted-foreground">98%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Trusted by 10,000+ students worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
