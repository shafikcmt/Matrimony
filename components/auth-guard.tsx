'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { userSelector, loadingSelector } from '@/store/auth'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const user = useRecoilValue(userSelector)
  const loading = useRecoilValue(loadingSelector)
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      // Store the current URL to redirect back after login
      const currentPath = window.location.pathname
      const redirectUrl = `/login?redirectTo=${encodeURIComponent(currentPath)}`
      router.push(redirectUrl)
    }
  }, [user, loading, router])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  // Don't render anything if user is not authenticated
  if (!user) {
    return null
  }

  // Render children if user is authenticated
  return <>{children}</>
} 