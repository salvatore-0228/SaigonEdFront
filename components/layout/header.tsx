"use client"

import { Button } from '@/components/ui/button'
import { BookOpen, Sparkles, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import Link from "next/link";
import { cn } from '@/lib/utils'

export function Header() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                     {/* Logo */}
           <div className="flex items-center space-x-4">
             <Link href="/">
               <div className="relative w-16 h-16">
                 <img src="/images/tiger-logo.png" alt="Asian Tigers Group" className="w-full h-full object-contain" />
               </div>
             </Link>
             <div className="hidden sm:block">
               <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                 Going Global
               </h1>
             </div>
           </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-foreground">Welcome, {user?.name}</span>
                <Button 
                  onClick={() => router.push('/')}
                  className="bg-primary hover:bg-primary/90"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </div>
            ) : (
                             <div className="flex items-center space-x-4">
                 <Button 
                   variant="outline"
                   onClick={() => router.push('/signin')}
                   className="border-primary text-primary hover:bg-primary hover:text-white"
                 >
                   Sign In
                 </Button>
                 <Button 
                   onClick={() => router.push('/signup')}
                   className="bg-primary hover:bg-primary/90"
                 >
                   <Sparkles className="w-4 h-4 mr-2" />
                   Get Started
                 </Button>
               </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-foreground">Welcome, {user?.name}</span>
                  <Button 
                    onClick={() => router.push('/')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </div>
                             ) : (
                 <div className="flex flex-col space-y-2">
                   <Button 
                     variant="outline"
                     onClick={() => router.push('/signin')}
                     className="border-primary text-primary hover:bg-primary hover:text-white"
                   >
                     Sign In
                   </Button>
                   <Button 
                     onClick={() => router.push('/signup')}
                     className="bg-primary hover:bg-primary/90"
                   >
                     <Sparkles className="w-4 h-4 mr-2" />
                     Get Started
                   </Button>
                 </div>
               )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
