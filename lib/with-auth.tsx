'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { userSelector, loadingSelector } from '@/store/auth'

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuthComponent(props: P) {
    const user = useRecoilValue(userSelector)
    const loading = useRecoilValue(loadingSelector)
    const router = useRouter()

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login')
      }
    }, [user, loading, router])

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )
    }

    if (!user) {
      return null
    }

    return <WrappedComponent {...props} />
  }
} 