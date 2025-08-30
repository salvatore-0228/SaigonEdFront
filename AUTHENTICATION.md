# Authentication System

This project now includes a complete authentication system that connects the signin and signup pages to the rest of the application.

## Features

- **User Registration**: Users can create new accounts with name, email, and password
- **User Login**: Existing users can sign in with their credentials
- **Session Management**: User sessions are persisted using localStorage
- **Protected Routes**: Routes can be protected to require authentication
- **User Interface**: Authentication status is displayed in the sidebar and throughout the app
- **Toast Notifications**: Success and error messages for authentication actions

## Components

### Core Authentication Files

- `lib/auth.ts` - Authentication utilities and user management
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
  const { user, isAuthenticated, signIn, signUp, signOut } = useAuth()
  
  // Check if user is authenticated
  if (isAuthenticated) {
    return <div>Welcome, {user?.name}!</div>
  }
  
  return <div>Please sign in</div>
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

## Security Notes

This is a client-side authentication system for demonstration purposes. In a production environment, you should:

- Use a proper backend authentication service
- Implement password hashing and salting
- Use secure session management (JWT tokens, HTTP-only cookies)
- Add rate limiting and brute force protection
- Implement proper error handling and logging
- Use HTTPS for all authentication requests

## File Structure

```
├── lib/
│   └── auth.ts                    # Authentication utilities
├── hooks/
│   └── use-auth.tsx              # Authentication hook
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
