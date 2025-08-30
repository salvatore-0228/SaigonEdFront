export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Mock user storage (in a real app, this would be a database)
const users: User[] = []

export const auth = {
  // Sign up a new user
  async signUp(name: string, email: string, password: string): Promise<User> {
    // Check if user already exists
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      throw new Error('User already exists with this email')
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date()
    }

    // In a real app, you would hash the password and store it securely
    users.push(newUser)
    
    // Store user in localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    
    return newUser
  },

  // Sign in existing user
  async signIn(email: string, password: string): Promise<User> {
    // In a real app, you would verify the password
    const user = users.find(user => user.email === email)
    if (!user) {
      throw new Error('Invalid email or password')
    }

    // Store user in localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(user))
    
    return user
  },

  // Sign out user
  async signOut(): Promise<void> {
    localStorage.removeItem('currentUser')
  },

  // Get current user
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null
    
    const userStr = localStorage.getItem('currentUser')
    if (!userStr) return null
    
    try {
      return JSON.parse(userStr)
    } catch {
      return null
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }
}
