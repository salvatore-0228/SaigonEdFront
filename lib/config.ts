/**
 * Application Configuration
 * Centralized configuration management for the application
 */

export interface AppConfig {
  api: {
    baseUrl: string
    timeout: number
  }
  auth: {
    tokenKey: string
    refreshTokenKey: string
    tokenExpiryBuffer: number // minutes before expiry to refresh
  }
  app: {
    name: string
    version: string
  }
  features: {
    emailVerification: boolean
    passwordReset: boolean
    socialLogin: boolean
  }
  development: {
    debugMode: boolean
    logLevel: 'error' | 'warn' | 'info' | 'debug'
  }
}

/**
 * Default configuration values
 */
const defaultConfig: AppConfig = {
  api: {
    // baseUrl: 'https://saigonedserver.onrender.com/api',
    baseUrl: 'http://localhost:3001/api',
    timeout: 30000, // 30 seconds
  },
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
    tokenExpiryBuffer: 5, // Refresh token 5 minutes before expiry
  },
  app: {
    name: 'Saigon Education Guide',
    version: '1.0.0',
  },
  features: {
    emailVerification: true,
    passwordReset: true,
    socialLogin: false,
  },
  development: {
    debugMode: process.env.NODE_ENV === 'development',
    logLevel: 'warn',
  },
}

/**
 * Load configuration from environment variables with fallbacks
 */
function loadConfig(): AppConfig {
  return {
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || defaultConfig.api.baseUrl,
      timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '') || defaultConfig.api.timeout,
    },
    auth: {
      tokenKey: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || defaultConfig.auth.tokenKey,
      refreshTokenKey: process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || defaultConfig.auth.refreshTokenKey,
      tokenExpiryBuffer: parseInt(process.env.NEXT_PUBLIC_TOKEN_EXPIRY_BUFFER || '') || defaultConfig.auth.tokenExpiryBuffer,
    },
    app: {
      name: process.env.NEXT_PUBLIC_APP_NAME || defaultConfig.app.name,
      version: process.env.NEXT_PUBLIC_APP_VERSION || defaultConfig.app.version,
    },
    features: {
      emailVerification: process.env.NEXT_PUBLIC_ENABLE_EMAIL_VERIFICATION?.toLowerCase() === 'true' || defaultConfig.features.emailVerification,
      passwordReset: process.env.NEXT_PUBLIC_ENABLE_PASSWORD_RESET?.toLowerCase() === 'true' || defaultConfig.features.passwordReset,
      socialLogin: process.env.NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN?.toLowerCase() === 'true' || defaultConfig.features.socialLogin,
    },
    development: {
      debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE?.toLowerCase() === 'true' || defaultConfig.development.debugMode,
      logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as AppConfig['development']['logLevel']) || defaultConfig.development.logLevel,
    },
  }
}

/**
 * Application configuration instance
 */
export const config = loadConfig()

/**
 * Utility functions for configuration
 */
export const configUtils = {
  /**
   * Check if a feature is enabled
   */
  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return config.features[feature]
  },

  /**
   * Get API endpoint URL
   */
  getApiUrl(endpoint: string): string {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    return `${config.api.baseUrl}${cleanEndpoint}`
  },

  /**
   * Get full app name with version
   */
  getAppFullName(): string {
    return `${config.app.name} v${config.app.version}`
  },

  /**
   * Check if running in development mode
   */
  isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development'
  },

  /**
   * Check if running in production mode
   */
  isProduction(): boolean {
    return process.env.NODE_ENV === 'production'
  },

  /**
   * Log message based on configured log level
   */
  log(level: AppConfig['development']['logLevel'], message: string, ...args: any[]): void {
    if (!config.development.debugMode && level === 'debug') return
    
    const levels = { error: 0, warn: 1, info: 2, debug: 3 }
    const currentLevel = levels[config.development.logLevel]
    const messageLevel = levels[level]
    
    if (messageLevel <= currentLevel) {
      console[level === 'debug' ? 'log' : level](message, ...args)
    }
  },
}

// Environment configuration documentation
export const envDocs = {
  description: 'Environment Configuration for SaigonEdFront',
  example: `
# Copy these to your .env.local file and update the values for your environment

# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
# For production, use your actual backend URL:
# NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com/api

# Authentication Configuration
NEXT_PUBLIC_AUTH_TOKEN_KEY=auth_token
NEXT_PUBLIC_REFRESH_TOKEN_KEY=refresh_token
NEXT_PUBLIC_TOKEN_EXPIRY_BUFFER=5

# App Configuration
NEXT_PUBLIC_APP_NAME="Saigon Education Guide"
NEXT_PUBLIC_APP_VERSION=1.0.0

# Feature Flags
NEXT_PUBLIC_ENABLE_EMAIL_VERIFICATION=true
NEXT_PUBLIC_ENABLE_PASSWORD_RESET=true
NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN=false

# Development Configuration
NEXT_PUBLIC_DEBUG_MODE=false
NEXT_PUBLIC_LOG_LEVEL=warn

# API Configuration
NEXT_PUBLIC_API_TIMEOUT=30000
  `.trim(),
}
