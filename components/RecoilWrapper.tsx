'use client'

import { RecoilRoot } from 'recoil'
import { useAuthInit } from '@/hooks/useAuthInit'

function AuthInitializer({ children }: { children: React.ReactNode }) {
  useAuthInit()
  return <>{children}</>
}

export default function RecoilWrapper({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <AuthInitializer>
        {children}
      </AuthInitializer>
    </RecoilRoot>
  )
} 