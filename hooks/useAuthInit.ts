'use client'

import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { authState, userProfileState } from '@/store/auth'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function useAuthInit() {
  const setAuthState = useSetRecoilState(authState)
  const setUserProfile = useSetRecoilState(userProfileState)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Get the current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Error getting session:', sessionError)
          setAuthState({ user: null, loading: false, error: sessionError })
          setUserProfile(null)
          return
        }

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
      } catch (error) {
        console.error('Error initializing auth:', error)
        setAuthState({ user: null, loading: false, error: error instanceof Error ? error : new Error('Unknown error') })
        setUserProfile(null)
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
  }, [setAuthState, setUserProfile, supabase])
} 