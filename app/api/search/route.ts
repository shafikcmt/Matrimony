import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const searchFiltersSchema = z.object({
  query: z.string().optional(),
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
  verificationStatus: z.enum(['verified', 'unverified']).optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(20),
})

export async function GET(request: Request) {
  try {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Parse URL parameters
    const { searchParams } = new URL(request.url)
    const filters = searchFiltersSchema.parse({
      query: searchParams.get('query') || undefined,
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 20,
      ageRange: searchParams.get('ageRange') ? JSON.parse(searchParams.get('ageRange')!) : undefined,
      gender: searchParams.get('gender') || undefined,
      religion: searchParams.get('religion')?.split(',') || undefined,
      caste: searchParams.get('caste')?.split(',') || undefined,
      education: searchParams.get('education')?.split(',') || undefined,
      occupation: searchParams.get('occupation')?.split(',') || undefined,
      income: searchParams.get('income') ? JSON.parse(searchParams.get('income')!) : undefined,
      location: searchParams.get('location')?.split(',') || undefined,
      maritalStatus: searchParams.get('maritalStatus')?.split(',') || undefined,
      verificationStatus: searchParams.get('verificationStatus') || undefined,
    })

    // Build query
    let query = supabase
      .from('profiles')
      .select('*', { count: 'exact' })
      .neq('id', user.id) // Exclude current user

    // Apply text search if query is provided
    if (filters.query) {
      query = query.or(`
        first_name.ilike.%${filters.query}%,
        last_name.ilike.%${filters.query}%,
        about.ilike.%${filters.query}%
      `)
    }

    // Apply filters
    if (filters.ageRange?.min) {
      query = query.gte('age', filters.ageRange.min)
    }
    if (filters.ageRange?.max) {
      query = query.lte('age', filters.ageRange.max)
    }
    if (filters.gender) {
      query = query.eq('gender', filters.gender)
    }
    if (filters.religion?.length) {
      query = query.in('religion', filters.religion)
    }
    if (filters.caste?.length) {
      query = query.in('caste', filters.caste)
    }
    if (filters.education?.length) {
      query = query.in('education', filters.education)
    }
    if (filters.occupation?.length) {
      query = query.in('occupation', filters.occupation)
    }
    if (filters.income?.min) {
      query = query.gte('income', filters.income.min)
    }
    if (filters.income?.max) {
      query = query.lte('income', filters.income.max)
    }
    if (filters.location?.length) {
      query = query.in('location', filters.location)
    }
    if (filters.maritalStatus?.length) {
      query = query.in('marital_status', filters.maritalStatus)
    }
    if (filters.verificationStatus) {
      query = query.eq('is_verified', filters.verificationStatus === 'verified')
    }

    // Apply pagination
    const from = (filters.page - 1) * filters.limit
    const to = from + filters.limit - 1
    query = query.range(from, to)

    // Execute query
    const { data: profiles, error: searchError, count } = await query

    if (searchError) {
      return NextResponse.json(
        { message: `Failed to search profiles: ${searchError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({
      profiles,
      pagination: {
        total: count || 0,
        page: filters.page,
        limit: filters.limit,
        totalPages: Math.ceil((count || 0) / filters.limit),
      },
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 