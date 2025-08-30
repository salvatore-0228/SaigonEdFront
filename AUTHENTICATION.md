# Authentication System

This project includes a comprehensive authentication system with backend communication that handles user registration, login, session management, and security features.

## Features

- **User Registration**: Users can create new accounts with name, email, and password
- **User Login**: Existing users can sign in with their credentials
- **JWT Token Management**: Secure token-based authentication with automatic refresh
- **Session Management**: Persistent sessions with automatic token validation
- **Protected Routes**: Routes can be protected to require authentication
- **Password Management**: Password reset and change functionality
- **Email Verification**: Optional email verification for new accounts
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **User Interface**: Authentication status is displayed in the sidebar and throughout the app
- **Toast Notifications**: Success and error messages for authentication actions
- **Configuration Management**: Environment-based configuration for different deployment scenarios

## Components

### Core Authentication Files

- `lib/auth.ts` - Authentication utilities and user management (updated for backend API)
- `lib/auth-api.ts` - Authentication API service layer
- `lib/http-client.ts` - HTTP client with authentication and error handling
- `lib/token-utils.ts` - JWT token management and utilities
- `lib/config.ts` - Application configuration management
- `hooks/use-auth.tsx` - React hook for authentication state management
- `components/auth/protected-route.tsx` - Component to protect routes
- `components/auth/landing-page.tsx` - Landing page for unauthenticated users

### Form Components

- `components/auth/signin-form.tsx` - Sign in form with validation
- `components/auth/signup-form.tsx` - Sign up form with validation

### UI Components

- `components/auth/auth-status.tsx` - Authentication status display
- `components/auth/user-info.tsx` - User information dropdown

## Usage

### Basic Authentication

```tsx
import { useAuth } from '@/hooks/use-auth'

function MyComponent() {
  const { user, isAuthenticated, isLoading, signIn, signUp, signOut } = useAuth()
  
  // Show loading state while checking authentication
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  // Check if user is authenticated
  if (isAuthenticated) {
    return (
      <div>
        Welcome, {user?.name}!
        {user?.emailVerified ? ' ✓' : ' (Email not verified)'}
      </div>
    )
  }
  
  return <div>Please sign in</div>
}
```

### Advanced Authentication Usage

```tsx
import { auth } from '@/lib/auth'
import { authAPI } from '@/lib/auth-api'
import { tokenUtils, tokenStorage } from '@/lib/token-utils'

// Direct API usage
async function handleCustomSignIn(email: string, password: string) {
  try {
    const response = await authAPI.signIn({ email, password })
    console.log('User signed in:', response.user)
  } catch (error) {
    console.error('Sign in failed:', error.message)
  }
}

// Token management
function checkTokenStatus() {
  const isAuth = tokenUtils.isAuthenticated()
  const timeUntilExpiry = tokenUtils.getTimeUntilExpiry()
  const shouldRefresh = tokenStorage.shouldRefreshToken()
  
  console.log('Authenticated:', isAuth)
  console.log('Time until expiry:', timeUntilExpiry, 'minutes')
  console.log('Should refresh:', shouldRefresh)
}

// Profile management
async function updateUserProfile(name: string) {
  try {
    const updatedUser = await auth.updateProfile({ name })
    console.log('Profile updated:', updatedUser)
  } catch (error) {
    console.error('Profile update failed:', error.message)
  }
}
```

### Protected Routes

```tsx
import { ProtectedRoute } from '@/components/auth/protected-route'

function MyPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  )
}
```

### Authentication Status

```tsx
import { AuthStatus } from '@/components/auth/auth-status'

function Header() {
  return (
    <header>
      <AuthStatus />
    </header>
  )
}
```

## Navigation

The authentication system is integrated into the sidebar navigation:

- **When not authenticated**: Shows "Sign In" and "Sign Up" links
- **When authenticated**: Shows user name and "Sign Out" option

## User Flow

1. **New Users**: 
   - Visit the home page and see the landing page
   - Click "Get Started" to go to `/signup`
   - Fill in name, email, password, and confirm password
   - Agree to terms and conditions
   - Account is created and user is redirected to home page (shows video/cover content)

2. **Existing Users**:
   - Visit the home page and see the landing page
   - Click "Sign In" to go to `/signin`
   - Enter email and password
   - User is authenticated and redirected to home page (shows video/cover content)

3. **Authenticated Users**:
   - Visit home page and see the original video/cover content
   - Can access protected content throughout the app
   - Can sign out from sidebar or user dropdown

## Backend Communication

The authentication system now communicates with a backend API instead of using mock localStorage data. Key features include:

### API Integration
- **RESTful API calls** for all authentication operations
- **JWT token-based authentication** with automatic token management
- **Configurable API endpoints** through environment variables
- **Automatic token refresh** before expiration
- **Comprehensive error handling** with user-friendly messages

### Token Management
- **Secure token storage** in localStorage with configurable keys
- **JWT token decoding** for client-side user information
- **Token expiration checking** and automatic refresh
- **Token cleanup** on logout and authentication errors

### Configuration
Set up your environment variables by creating a `.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
# For production:
# NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com/api

# Authentication Configuration
NEXT_PUBLIC_AUTH_TOKEN_KEY=auth_token
NEXT_PUBLIC_REFRESH_TOKEN_KEY=refresh_token
NEXT_PUBLIC_TOKEN_EXPIRY_BUFFER=5

# Feature Flags
NEXT_PUBLIC_ENABLE_EMAIL_VERIFICATION=true
NEXT_PUBLIC_ENABLE_PASSWORD_RESET=true
NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN=false
```

## API Endpoints

The authentication system expects the following backend endpoints:

### Authentication Endpoints
- `POST /auth/signin` - User login
- `POST /auth/signup` - User registration  
- `POST /auth/signout` - User logout
- `GET /auth/me` - Get current user profile
- `POST /auth/refresh` - Refresh JWT token

### Password Management
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password with token
- `POST /auth/change-password` - Change password (authenticated)

### Email Verification
- `POST /auth/verify-email` - Verify email with token
- `POST /auth/resend-verification` - Resend verification email

### Profile Management
- `PATCH /auth/profile` - Update user profile

## Security Features

The authentication system includes several security features:

- **JWT token validation** with expiration checking
- **Automatic token refresh** to maintain sessions
- **Secure error handling** that doesn't expose sensitive information
- **Request timeout protection** to prevent hanging requests
- **Token cleanup** on authentication failures
- **Configurable security settings** through environment variables

For production deployment, ensure:
- Use HTTPS for all API communication
- Configure proper CORS settings on the backend
- Implement rate limiting on authentication endpoints
- Use secure, HTTP-only cookies for refresh tokens (if supported by backend)
- Enable proper logging and monitoring

## File Structure

```
├── lib/
│   ├── auth.ts                    # Authentication utilities (backend integration)
│   ├── auth-api.ts               # Authentication API service layer
│   ├── http-client.ts            # HTTP client with auth and error handling
│   ├── token-utils.ts            # JWT token management utilities
│   └── config.ts                 # Application configuration
├── hooks/
│   └── use-auth.tsx              # Authentication hook (updated for async)
├── components/auth/
│   ├── signin-form.tsx           # Sign in form
│   ├── signup-form.tsx           # Sign up form
│   ├── protected-route.tsx       # Route protection
│   ├── landing-page.tsx          # Landing page
│   ├── auth-status.tsx           # Auth status display
│   └── user-info.tsx             # User info dropdown
├── app/
│   ├── signin/
│   │   └── page.tsx              # Sign in page
│   ├── signup/
│   │   └── page.tsx              # Sign up page
│   └── layout.tsx                # Root layout with AuthProvider
└── components/
    └── sidebar.tsx               # Updated with auth navigation
```

## Integration Points

The authentication system is integrated into:

1. **Root Layout**: `AuthProvider` wraps the entire application
2. **Sidebar**: Authentication navigation and user status
3. **Main Page**: Shows landing page for unauthenticated users, video/cover content for authenticated users
4. **Forms**: Connected to authentication functions
5. **Toast System**: Success and error notifications

## Testing

To test the authentication system:

1. Start the development server: `npm run dev`
2. Visit `/signup` to create a new account
3. Try signing out and signing back in
4. Test protected routes by accessing them without authentication
5. Verify that user state persists across page refreshes
