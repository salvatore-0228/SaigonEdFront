/**
 * Token management utilities
 * Handles JWT token operations and storage
 */

import { config } from './config'

export interface JWTPayload {
  id: string
  email: string
  name?: string
  role?: string
  iat?: number
  exp?: number
  [key: string]: any
}

/**
 * Decode JWT token (client-side only, for reading payload)
 * Note: This doesn't verify the token signature
 */
export function decodeJWT(token: string): JWTPayload | null {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) {
      return null
    }

    const payload = parts[1]
    const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))
    return decoded as JWTPayload
  } catch (error) {
    console.warn('Failed to decode JWT token:', error)
    return null
  }
}

/**
 * Check if JWT token is expired
 */
export function isTokenExpired(token: string): boolean {
  const payload = decodeJWT(token)
  if (!payload || !payload.exp) {
    return true
  }

  const currentTime = Math.floor(Date.now() / 1000)
  return payload.exp < currentTime
}

/**
 * Check if JWT token is close to expiring (within buffer time)
 */
export function isTokenNearExpiry(token: string): boolean {
  const payload = decodeJWT(token)
  if (!payload || !payload.exp) {
    return true
  }

  const currentTime = Math.floor(Date.now() / 1000)
  const bufferTime = config.auth.tokenExpiryBuffer * 60 // Convert minutes to seconds
  return payload.exp < (currentTime + bufferTime)
}

/**
 * Get user information from JWT token
 */
export function getUserFromToken(token: string): Partial<JWTPayload> | null {
  const payload = decodeJWT(token)
  if (!payload) {
    return null
  }

  return {
    id: payload.id,
    email: payload.email,
    name: payload.name,
    role: payload.role,
  }
}

/**
 * Token storage utilities
 */
export const tokenStorage = {
  /**
   * Get auth token from storage
   */
  getToken(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem(config.auth.tokenKey)
  },

  /**
   * Set auth token in storage
   */
  setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(config.auth.tokenKey, token)
    }
  },

  /**
   * Remove auth token from storage
   */
  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(config.auth.tokenKey)
    }
  },

  /**
   * Get refresh token from storage
   */
  getRefreshToken(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem(config.auth.refreshTokenKey)
  },

  /**
   * Set refresh token in storage
   */
  setRefreshToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(config.auth.refreshTokenKey, token)
    }
  },

  /**
   * Remove refresh token from storage
   */
  removeRefreshToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(config.auth.refreshTokenKey)
    }
  },

  /**
   * Clear all tokens from storage
   */
  clearAllTokens(): void {
    this.removeToken()
    this.removeRefreshToken()
  },

  /**
   * Check if user has valid token
   */
  hasValidToken(): boolean {
    const token = this.getToken()
    if (!token) return false
    return !isTokenExpired(token)
  },

  /**
   * Check if token needs refresh
   */
  shouldRefreshToken(): boolean {
    const token = this.getToken()
    if (!token) return false
    return isTokenNearExpiry(token)
  },
}

/**
 * Higher-order utility functions
 */
export const tokenUtils = {
  /**
   * Get current user info from stored token
   */
  getCurrentUserFromToken(): Partial<JWTPayload> | null {
    const token = tokenStorage.getToken()
    return token ? getUserFromToken(token) : null
  },

  /**
   * Check authentication status based on token
   */
  isAuthenticated(): boolean {
    return tokenStorage.hasValidToken()
  },

  /**
   * Get token expiry time as Date
   */
  getTokenExpiryDate(token?: string): Date | null {
    const currentToken = token || tokenStorage.getToken()
    if (!currentToken) return null

    const payload = decodeJWT(currentToken)
    if (!payload || !payload.exp) return null

    return new Date(payload.exp * 1000)
  },

  /**
   * Get remaining time until token expires (in minutes)
   */
  getTimeUntilExpiry(token?: string): number | null {
    const expiryDate = this.getTokenExpiryDate(token)
    if (!expiryDate) return null

    const now = new Date()
    const diffMs = expiryDate.getTime() - now.getTime()
    return Math.floor(diffMs / (1000 * 60)) // Convert to minutes
  },

  /**
   * Format token expiry for display
   */
  formatTokenExpiry(token?: string): string {
    const expiryDate = this.getTokenExpiryDate(token)
    if (!expiryDate) return 'Unknown'

    const timeUntil = this.getTimeUntilExpiry(token)
    if (timeUntil === null) return 'Unknown'

    if (timeUntil <= 0) return 'Expired'
    if (timeUntil < 60) return `${timeUntil}m`
    if (timeUntil < 1440) return `${Math.floor(timeUntil / 60)}h`
    return `${Math.floor(timeUntil / 1440)}d`
  },
}
