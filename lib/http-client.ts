/**
 * HTTP Client for API communication
 * Handles authentication, error handling, and request/response interceptors
 */

import { config, configUtils } from './config'

export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  status: number
  code?: string
  details?: any
}

export class HttpClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>
  private timeout: number

  constructor(baseURL: string = config.api.baseUrl) {
    this.baseURL = baseURL
    this.timeout = config.api.timeout
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * Get stored authentication token
   */
  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null
    console.log(localStorage.getItem(config.auth.tokenKey), 'sdsdsdsd')
    return localStorage.getItem(config.auth.tokenKey)
  }

  /**
   * Set authentication token
   */
  private setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(config.auth.tokenKey, token)
    }
  }

  private setUserData(user: object): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(config.auth.userData, JSON.stringify(user))
    }
  }

  /**
   * Remove authentication token
   */
  private removeAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(config.auth.tokenKey)
    }
  }

  /**
   * Prepare headers for request
   */
  private prepareHeaders(customHeaders: Record<string, string> = {}): Record<string, string> {
    const headers = { ...this.defaultHeaders, ...customHeaders }
    
    const token = this.getAuthToken()
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return headers
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type')
    const isJson = contentType && contentType.includes('application/json')
    
    let data: any
    try {
      data = isJson ? await response.json() : await response.text()
    } catch (error) {
      throw new Error('Failed to parse response')
    }

    if (!response.ok) {
      const apiError: ApiError = {
        message: data?.message || `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
        code: data?.code,
        details: data?.details
      }

      // Handle specific error cases
      if (response.status === 401) {
        this.removeAuthToken()
        apiError.message = data?.message || 'Authentication required. Please sign in again.'
      } else if (response.status === 403) {
        apiError.message = data?.message || 'Access forbidden. You do not have permission to perform this action.'
      } else if (response.status === 404) {
        apiError.message = data?.message || 'Resource not found.'
      } else if (response.status === 422) {
        apiError.message = data?.message || 'Validation error. Please check your input.'
      } else if (response.status >= 500) {
        apiError.message = data?.message || 'Server error. Please try again later.'
      }

      throw apiError
    }

    return data
  }

  /**
   * Make HTTP request
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const headers = this.prepareHeaders(options.headers as Record<string, string>)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)

      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      return await this.handleResponse<T>(response)
    } catch (error) {
      // Network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection.')
      }
      
      // Timeout errors
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout. Please try again.')
      }
      
      // Re-throw API errors
      throw error
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'GET',
      headers,
    })
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      headers,
    })
  }

  /**
   * Set authentication token for future requests
   */
  setToken(token: string): void {
    this.setAuthToken(token)
  }

  setUser(user: object): void {
    this.setUserData(user)
  }

  /**
   * Clear authentication token
   */
  clearToken(): void {
    this.removeAuthToken()
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return this.getAuthToken()
  }
}

// Create and export a singleton instance
export const httpClient = new HttpClient()
