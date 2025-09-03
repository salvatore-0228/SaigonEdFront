import { authAPI, type AuthResponse } from './auth-api'

export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt?: Date
  role?: string
  avatar?: string
  emailVerified?: boolean
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

/**
 * Transform API user data to local User interface
 */
function transformApiUser(apiUser: AuthResponse['user']): User {
  return {
    id: apiUser.id,
    name: apiUser.name,
    email: apiUser.email,
    createdAt: new Date(apiUser.createdAt),
    updatedAt: apiUser.updatedAt ? new Date(apiUser.updatedAt) : undefined,
    role: apiUser.role,
    avatar: apiUser.avatar,
    emailVerified: apiUser.emailVerified
  }
}

export const auth = {
  /**
   * Sign up a new user
   */
  async signUp(name: string, email: string, password: string): Promise<User> {
    try {
      const response = await authAPI.signUp({
        name,
        email,
        password
      })
      
      return transformApiUser(response.user)
    } catch (error: any) {
      // Transform API errors to user-friendly messages
      if (error.status === 409 || error.message?.includes('already exists')) {
        throw new Error('An account with this email already exists')
      } else if (error.status === 422) {
        throw new Error(error.message || 'Please check your information and try again')
      } else if (error.status >= 500) {
        throw new Error('Server error. Please try again later')
      }
      throw new Error(error.message || 'Failed to create account. Please try again')
    }
  },

  /**
   * Sign in existing user
   */
  async signIn(username: string, password: string): Promise<User> {
    try {
      const id = "GoingGlobal"
      const response = await authAPI.signIn({
        username,
        password,
        id
      })
      
      return transformApiUser(response.user)
    } catch (error: any) {
      // Transform API errors to user-friendly messages
      if (error.status === 401) {
        throw new Error('Invalid username or password')
      } else if (error.status === 429) {
        throw new Error('Too many login attempts. Please try again later')
      } else if (error.status >= 500) {
        throw new Error('Server error. Please try again later')
      }
      throw new Error(error.message || 'Failed to sign in. Please try again')
    }
  },

  /**
   * Sign out user
   */
  async signOut(): Promise<void> {
    try {
      await authAPI.signOut()
    } catch (error) {
      // Log error but don't throw - user should still be signed out locally
      console.warn('Sign out API call failed:', error)
    }
  },

  /**
   * Get current user from API
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      // First check if we have a token
      if (!authAPI.isAuthenticated()) {
        return null
      }

      const apiUser = await authAPI.getCurrentUser()
      return apiUser ? transformApiUser(apiUser) : null
    } catch (error: any) {
      // If unauthorized or token expired, clear token and return null
      if (error.status === 401) {
        authAPI.clearToken()
        return null
      }
      
      // For other errors, log but don't clear token (might be temporary network issue)
      console.warn('Failed to get current user:', error)
      return null
    }
  },

  /**
   * Get current user synchronously (from token presence)
   * Note: This only checks if a token exists, not if it's valid
   */
  getCurrentUserSync(): User | null {
    // This is a fallback for synchronous operations
    // In a real app, you might want to decode the JWT token to get user info
    return authAPI.isAuthenticated() ? { id: '', name: '', email: '', createdAt: new Date() } : null
  },

  /**
   * Check if user is authenticated (has valid token)
   */
  isAuthenticated(): boolean {
    return authAPI.isAuthenticated()
  },

  /**
   * Refresh authentication token
   */
  async refreshToken(refreshToken: string): Promise<User> {
    try {
      const response = await authAPI.refreshToken(refreshToken)
      return transformApiUser(response.user)
    } catch (error: any) {
      authAPI.clearToken()
      throw new Error(error.message || 'Failed to refresh session. Please sign in again')
    }
  },

  /**
   * Change password
   */
  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      await authAPI.changePassword({
        currentPassword,
        newPassword,
        confirmPassword: newPassword
      })
    } catch (error: any) {
      if (error.status === 401) {
        throw new Error('Current password is incorrect')
      }
      throw new Error(error.message || 'Failed to change password')
    }
  },

  /**
   * Update user profile
   */
  async updateProfile(data: { name?: string; email?: string; avatar?: string }): Promise<User> {
    try {
      const updatedUser = await authAPI.updateProfile(data)
      return transformApiUser(updatedUser)
    } catch (error: any) {
      if (error.status === 409) {
        throw new Error('Email already in use by another account')
      }
      throw new Error(error.message || 'Failed to update profile')
    }
  },

  /**
   * Request password reset
   */
  async forgotPassword(email: string): Promise<void> {
    try {
      await authAPI.forgotPassword(email)
    } catch (error: any) {
      // Don't reveal if email exists or not for security
      console.warn('Forgot password error:', error)
    }
  },

  /**
   * Reset password with token
   */
  async resetPassword(token: string, password: string): Promise<void> {
    try {
      await authAPI.resetPassword({
        token,
        password,
        confirmPassword: password
      })
    } catch (error: any) {
      if (error.status === 400) {
        throw new Error('Invalid or expired reset token')
      }
      throw new Error(error.message || 'Failed to reset password')
    }
  },

  /**
   * Verify email address
   */
  async verifyEmail(token: string): Promise<void> {
    try {
      await authAPI.verifyEmail(token)
    } catch (error: any) {
      if (error.status === 400) {
        throw new Error('Invalid or expired verification token')
      }
      throw new Error(error.message || 'Failed to verify email')
    }
  },

  /**
   * Resend email verification
   */
  async resendEmailVerification(): Promise<void> {
    try {
      await authAPI.resendEmailVerification()
    } catch (error: any) {
      throw new Error(error.message || 'Failed to resend verification email')
    }
  }
}
