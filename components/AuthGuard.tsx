'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { userSelector, loadingSelector } from '@/store/auth'
import { Loader2 } from 'lucide-react'

// Define protected routes
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  '/images',
  '/public-profile',
  '/members[id]'
]

interface AuthGuardProps {
  children: React.ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter()
  const pathname = usePathname()
  const user = useRecoilValue(userSelector)
  const isLoading = useRecoilValue(loadingSelector)

  const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))

  useEffect(() => {
    if (!isLoading && !user && isProtectedRoute) {
      router.push(`/login?redirect=${pathname}`)
    }
  }, [user, isLoading, pathname, router, isProtectedRoute])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!isLoading && !user && isProtectedRoute) {
    return null
  }

  return <>{children}</>
} 