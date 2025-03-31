'use client'

import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { authState, userProfileState } from '@/store/auth'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export function useAuthInit() {
  const setAuthState = useSetRecoilState(authState)
  const setUserProfile = useSetRecoilState(userProfileState)

  useEffect(() => {
    const initAuth = async () => {
      try {
        setAuthState({ user: null, loading: true, error: null })
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          setAuthState({ user: session.user, loading: false, error: null })
          
          // Fetch user profile
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()

          if (profileError) throw profileError
          setUserProfile(profile)
        } else {
          setAuthState({ user: null, loading: false, error: null })
          setUserProfile(null)
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        setAuthState({ user: null, loading: false, error: error as Error })
        setUserProfile(null)
      } finally {
        setAuthState(prev => ({ ...prev, loading: false }))
      }
    }

    initAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        setAuthState({ user: session.user, loading: false, error: null })
        
        // Fetch user profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (profileError) {
          console.error('Error fetching profile:', profileError)
          setUserProfile(null)
        } else {
          setUserProfile(profile)
        }
      } else {
        setAuthState({ user: null, loading: false, error: null })
        setUserProfile(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [setAuthState, setUserProfile])
} 