import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password, full_name, phone, date_of_birth } = await request.json()
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Check for existing email and phone
    const { data: existingUser, error: userError } = await supabase
      .from('profiles')
      .select('email, phone')
      .or(`email.eq.${email},phone.eq.${phone}`)
      .single()

    if (userError && userError.code !== 'PGRST116') {
      return NextResponse.json(
        { message: 'Failed to check existing user' },
        { status: 500 }
      )
    }

    if (existingUser) {
      if (existingUser.email === email) {
        return NextResponse.json(
          { message: 'Email already registered' },
          { status: 400 }
        )
      }
      if (existingUser.phone === phone) {
        return NextResponse.json(
          { message: 'Phone already registered' },
          { status: 400 }
        )
      }
    }

    const { data: { user }, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    })

    if (signUpError) {
      return NextResponse.json(
        { message: signUpError.message },
        { status: 400 }
      )
    }

    if (!user) {
      return NextResponse.json(
        { message: 'Failed to create user' },
        { status: 500 }
      )
    }

    // Create profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: user.id,
          full_name,
          email,
          phone,
          date_of_birth,
        },
      ])
      .select()
      .single()

    if (profileError) {
      // If profile creation fails, clean up auth user
      await supabase.auth.signOut()
      return NextResponse.json(
        { message: `Failed to create profile: ${profileError.message}` },
        { status: 500 }
      )
    }

    // Create the response with the data
    const response = NextResponse.json({
      user,
      profile,
    })

    // Set the session cookie
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      response.cookies.set('sb-access-token', session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      })
    }

    return response
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}