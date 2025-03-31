import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getServerSession() {
  const supabase = createServerComponentClient({ cookies })
  
  try {
    const { data: { session } } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error('Error getting server session:', error)
    return null
  }
}

export async function requireAuth() {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/login')
  }
  
  return session
}

export async function getServerUser() {
  const session = await getServerSession()
  return session?.user ?? null
} 