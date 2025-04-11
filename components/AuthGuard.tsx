'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { userSelector, userProfileSelector, loadingSelector } from '@/store/auth'
import { Loader2 } from 'lucide-react'

// Define protected routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/messages',
  '/search',
  '/settings',
  '/public-profile'
]

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const user = useRecoilValue(userSelector)
  const userProfile = useRecoilValue(userProfileSelector)
  const loading = useRecoilValue(loadingSelector)

  useEffect(() => {
    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
    
    // Only redirect if we're not loading and the user is not authenticated
    if (!loading && isProtectedRoute && !user) {
      // Store the attempted URL to redirect back after login
      sessionStorage.setItem('redirectAfterLogin', pathname)
      router.push('/login')
    }
  }, [user, loading, pathname, router])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // If route is protected and user is not authenticated, don't render children
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  if (isProtectedRoute && !user) {
    return null
  }

  return <>{children}</>
} 