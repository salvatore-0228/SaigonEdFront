"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, BookOpen, Sparkles, Star } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const { signUp } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    
    try {
      await signUp(formData.name, formData.email, formData.password)
      toast({
        title: "Welcome to the realm!",
        description: "Your account has been created successfully.",
      })
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: error instanceof Error ? error.message : "Please try again with different credentials.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
            Join Our Realm
          </CardTitle>
          <CardDescription className="text-lg text-foreground flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            {"Begin your magical reading adventure"}
            <BookOpen className="w-4 h-4" />
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your adventurer name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className="h-12 border-2 border-primary/20 focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your magical email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
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
                placeholder="Create your secret spell"
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your secret spell"
                value={formData.confirmPassword}
                onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                className="h-12 border-2 border-primary/20 focus:border-primary transition-colors pr-12"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-accent/10"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
              className="border-2 border-primary/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="terms" className="text-sm text-foreground">
              I agree to the{" "}
              <Link href="/terms" className="text-accent hover:text-accent/80 transition-colors font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent hover:text-accent/80 transition-colors font-medium">
                Privacy Policy
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={!formData.agreeToTerms || isLoading}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Creating account...
              </div>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Begin Your Adventure
              </>
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="justify-center">
        <p className="text-sm text-foreground">
          {"Already have an account? "}
          <Link href="/signin" className="text-accent hover:text-accent/80 transition-colors font-semibold">
            Return to the realm
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
