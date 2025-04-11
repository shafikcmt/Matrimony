import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const matchFiltersSchema = z.object({
  ageRange: z.object({
    min: z.number().min(18).max(100).optional(),
    max: z.number().min(18).max(100).optional(),
  }).optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  religion: z.array(z.string()).optional(),
  caste: z.array(z.string()).optional(),
  education: z.array(z.string()).optional(),
  occupation: z.array(z.string()).optional(),
  income: z.object({
    min: z.number().optional(),
    max: z.number().optional(),
  }).optional(),
  location: z.array(z.string()).optional(),
  maritalStatus: z.array(z.enum(['never_married', 'divorced', 'widowed'])).optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(20),
})

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    const supabase = createRouteHandlerClient({ cookies })

    // Get the current user's session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get the current user's profile
    const { data: userProfile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (profileError || !userProfile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      )
    }

    // Fetch matches based on user preferences
    const { data: profiles, error: matchError, count } = await supabase
      .from('profiles')
      .select('*', { count: 'exact' })
      .neq('id', session.user.id)
      .eq('gender', userProfile.preferredGender || 'any')
      .in('religion', [userProfile.preferredReligion, null])
      .in('caste', [userProfile.preferredCaste, null])
      .range(offset, offset + limit - 1)

    if (matchError) {
      console.error('Error fetching matches:', matchError)
      return NextResponse.json(
        { error: 'Failed to fetch matches' },
        { status: 500 }
      )
    }

    const totalPages = Math.ceil((count || 0) / limit)
    const hasMore = page < totalPages

    return NextResponse.json({
      profiles,
      nextPage: hasMore ? page + 1 : null,
      hasMore,
      totalPages,
      currentPage: page
    })
  } catch (error) {
    console.error('Error in matches route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 