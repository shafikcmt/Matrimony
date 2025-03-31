import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    const { error } = await supabase.auth.signOut()

    if (error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      )
    }

    // Create the response
    const response = NextResponse.json({ message: 'Logged out successfully' })

    // Clear the session cookie
    response.cookies.delete('sb-access-token')

    return response
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}