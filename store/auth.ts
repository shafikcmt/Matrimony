'use client'

import { atom, selector, useSetRecoilState, useRecoilValue } from 'recoil'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  religion: string;
  caste: string;
  education: string;
  occupation: string;
  income: string;
  city: string;
  state: string;
  country: string;
  about: string;
  profile_picture: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

// Atoms
export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
    loading: false,
    error: null
  }
})

export const userProfileState = atom<UserProfile | null>({
  key: 'userProfileState',
  default: null
})

// Selectors
export const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => get(authState).user
})

export const loadingSelector = selector({
  key: 'loadingSelector',
  get: ({ get }) => get(authState).loading
})

export const errorSelector = selector({
  key: 'errorSelector',
  get: ({ get }) => get(authState).error
})

export const userProfileSelector = selector({
  key: 'userProfileSelector',
  get: ({ get }) => get(userProfileState)
})

// Auth Actions Hook
export function useAuthActions() {
  const setAuthState = useSetRecoilState(authState)
  const setUserProfile = useSetRecoilState(userProfileState)
  const router = useRouter()

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Important for cookies
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in')
      }

      setAuthState({
        user: data.user,
        loading: false,
        error: null
      })
      setUserProfile(data.profile)

      // Wait a moment for the session to be properly set
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Navigate to dashboard
      router.push('/dashboard')
    } catch (error: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error
      }))
      throw error
    }
  }

  const signUp = async ({ 
    email, 
    password, 
    full_name, 
    phone, 
    date_of_birth 
  }: { 
    email: string; 
    password: string;
    full_name: string;
    phone: string;
    date_of_birth: string;
  }) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          full_name,
          phone,
          date_of_birth,
        }),
        credentials: 'include', // Important for cookies
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up')
      }

      setAuthState({
        user: data.user,
        loading: false,
        error: null
      })
      setUserProfile(data.profile)

      // Wait a moment for the session to be properly set
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Navigate to dashboard
      router.push('/dashboard')
    } catch (error: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error
      }))
      throw error
    }
  }

  const signOut = async () => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Important for cookies
      })

      if (!response.ok) {
        throw new Error('Failed to sign out')
      }

      setAuthState({
        user: null,
        loading: false,
        error: null
      })
      setUserProfile(null)

      // Wait a moment for the session to be properly cleared
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Navigate to home page
      router.push('/')
    } catch (error: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error
      }))
      throw error
    }
  }

  return {
    signIn,
    signUp,
    signOut
  }
} 