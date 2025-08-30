"use client"

import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { LogIn, LogOut, User, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function AuthStatus() {
  const { user, isAuthenticated, isLoading, signOut } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    )
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <User className="h-4 w-4" />
        <span className="text-sm font-medium">{user.name}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="h-8 px-2"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push('/signin')}
        className="h-8 px-2"
      >
        <LogIn className="h-4 w-4 mr-1" />
        Sign In
      </Button>
      <Button
        size="sm"
        onClick={() => router.push('/signup')}
        className="h-8 px-3"
      >
        Sign Up
      </Button>
    </div>
  )
}
