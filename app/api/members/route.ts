import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError) {
      console.error('Auth error:', authError)
      return NextResponse.json(
        { message: 'Authentication error' },
        { status: 401 }
      )
    }
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 401 }
      )
    }

    // Fetch all profiles except current user
    const { data: members, error: membersError } = await supabase
      .from('profiles')
      .select(`
        id,
        full_name,
        email,
        phone,
        date_of_birth,
        created_at,
        updated_at
      `)
      .neq('id', user.id)
      .order('created_at', { ascending: false })

    if (membersError) {
      console.error('Database error:', membersError)
      return NextResponse.json(
        { message: `Failed to fetch members: ${membersError.message}` },
        { status: 500 }
      )
    }

    if (!members) {
      return NextResponse.json(
        { message: 'No members found' },
        { status: 404 }
      )
    }

    return NextResponse.json(members)
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 