"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, BookOpen, Sparkles } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await signIn(email, password)
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      })
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/95">
      <CardHeader className="text-center space-y-4">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <Image src="/images/tiger-logo.png" alt="Asian Tigers Group" fill className="object-contain" />
          </div>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-3xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome Back, Reader
          </CardTitle>
          <CardDescription className="text-lg text-foreground flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            {"Continue your literary journey"}
            <Sparkles className="w-4 h-4 text-accent" />
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your magical email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-2 border-primary/20 focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your secret spell"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-2 border-primary/20 focus:border-primary transition-colors pr-12"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-accent/10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link href="/forgot-password" className="text-accent hover:text-accent/80 transition-colors font-medium">
              Forgot your spell?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing in...
              </div>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Enter the Realm
              </>
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="justify-center">
        <p className="text-sm text-foreground">
          {"New to our magical library? "}
          <Link href="/signup" className="text-accent hover:text-accent/80 transition-colors font-semibold">
            Begin your adventure
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
