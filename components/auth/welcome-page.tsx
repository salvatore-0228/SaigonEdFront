"use client"

import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function WelcomePage() {
  const { user } = useAuth()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/images/ethereal-background.png)" }}
      />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <Card className="border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/95 max-w-2xl">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to the Realm, {user?.name}!
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Your magical reading adventure awaits
              <BookOpen className="w-5 h-5" />
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                You are now signed in and ready to explore our educational content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => router.push('/pages/2')}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Contents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => router.push('/schoollist')}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  School List
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
