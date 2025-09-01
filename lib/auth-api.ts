/**
 * Authentication API Service
 * Handles all authentication-related API calls
 */

import { httpClient, type ApiResponse } from './http-client'

// Request/Response Types
export interface SignInRequest {
  username: string
  password: string
}

export interface SignUpRequest {
  name: string
  email: string
  password: string
  confirmPassword?: string
}

export interface AuthResponse {
  user: {
    id: string
    name: string
    email: string
    createdAt: string
    updatedAt?: string
    role?: string
    avatar?: string
    emailVerified?: boolean
  }
  token: string
  refreshToken?: string
  expiresIn?: number
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
  confirmPassword: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export interface UpdateProfileRequest {
  name?: string
  email?: string
  avatar?: string
}

export interface VerifyEmailRequest {
  token: string
}

/**
 * Authentication API endpoints
 */
export const authAPI = {
  /**
   * Sign in user
   */
  async signIn(credentials: SignInRequest): Promise<AuthResponse> {
    const response = await httpClient.post<ApiResponse<AuthResponse>>('/auth/signin', credentials)
    
    // Store the token in HTTP client
    if (response.data.access_token) {
      httpClient.setToken(response.data.access_token)
    }
    
    return response.data
  },

  /**
   * Sign up new user
   */
  async signUp(userData: SignUpRequest): Promise<AuthResponse> {
    const response = await httpClient.post<ApiResponse<AuthResponse>>('/auth/signup', userData)
    
    // Store the token in HTTP client
    if (response.data.access_token) {
      httpClient.setToken(response.data.access_token)
    }
    
    return response.data
  },

  /**
   * Sign out user
   */
  async signOut(): Promise<void> {
    try {
      await httpClient.post('/auth/signout')
    } catch (error) {
      // Even if the API call fails, we should clear the local token
      console.warn('Sign out API call failed:', error)
    } finally {
      // Always clear the token locally
      httpClient.clearToken()
    }
  },

  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<AuthResponse['user'] | null> {
    try {
      const response = await httpClient.get<ApiResponse<AuthResponse['user']>>('/auth/me')
      return response.data
    } catch (error: any) {
      // If unauthorized, clear token and return null
      if (error.status === 401) {
        httpClient.clearToken()
        return null
      }
      throw error
    }
  },

  /**
   * Refresh authentication token
   */
  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    const response = await httpClient.post<ApiResponse<AuthResponse>>('/auth/refresh', {
      refreshToken
    })
    
    // Update stored token
    if (response.data.access_token) {
      httpClient.setToken(response.data.access_token)
    }
    
    return response.data
  },

  /**
   * Request password reset
   */
  async forgotPassword(email: string): Promise<{ message: string }> {
    const response = await httpClient.post<ApiResponse<{ message: string }>>('/auth/forgot-password', {
      email
    })
    return response.data
  },

  /**
   * Reset password with token
   */
  async resetPassword(data: ResetPasswordRequest): Promise<{ message: string }> {
    const response = await httpClient.post<ApiResponse<{ message: string }>>('/auth/reset-password', data)
    return response.data
  },

  /**
   * Change password (authenticated user)
   */
  async changePassword(data: ChangePasswordRequest): Promise<{ message: string }> {
    const response = await httpClient.post<ApiResponse<{ message: string }>>('/auth/change-password', data)
    return response.data
  },

  /**
   * Update user profile
   */
  async updateProfile(data: UpdateProfileRequest): Promise<AuthResponse['user']> {
    const response = await httpClient.patch<ApiResponse<AuthResponse['user']>>('/auth/profile', data)
    return response.data
  },

  /**
   * Verify email address
   */
  async verifyEmail(token: string): Promise<{ message: string }> {
    const response = await httpClient.post<ApiResponse<{ message: string }>>('/auth/verify-email', {
      token
    })
    return response.data
  },

  /**
   * Resend email verification
   */
  async resendEmailVerification(): Promise<{ message: string }> {
    const response = await httpClient.post<ApiResponse<{ message: string }>>('/auth/resend-verification')
    return response.data
  },

  /**
   * Check if user is authenticated (has valid token)
   */
  isAuthenticated(): boolean {
    return !!httpClient.getToken()
  },

  /**
   * Get stored token
   */
  getToken(): string | null {
    return httpClient.getToken()
  },

  /**
   * Manually set token (useful for testing or external auth)
   */
  setToken(token: string): void {
    httpClient.setToken(token)
  },

  /**
   * Clear authentication token
   */
  clearToken(): void {
    httpClient.clearToken()
  }
}

// Export types for use in other parts of the application
export type { AuthResponse as AuthApiResponse }
