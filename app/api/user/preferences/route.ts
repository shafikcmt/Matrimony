import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const preferencesSchema = z.object({
  emailNotifications: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  profileVisibility: z.enum(['public', 'private', 'matches_only']).optional(),
  matchPreferences: z.object({
    ageRange: z.object({
      min: z.number().min(18).max(100),
      max: z.number().min(18).max(100)
    }).optional(),
    gender: z.enum(['male', 'female', 'other']).optional(),
    religion: z.array(z.string()).optional(),
    caste: z.array(z.string()).optional(),
    education: z.array(z.string()).optional(),
    occupation: z.array(z.string()).optional(),
    income: z.object({
      min: z.number().optional(),
      max: z.number().optional()
    }).optional(),
    location: z.array(z.string()).optional(),
    maritalStatus: z.array(z.enum(['never_married', 'divorced', 'widowed'])).optional(),
  }).optional(),
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

    // Get user preferences
    const { data: preferences, error: fetchError } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (fetchError) {
      return NextResponse.json(
        { message: `Failed to fetch preferences: ${fetchError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(preferences)
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
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

    // Parse and validate request body
    const body = await request.json()
    const validatedData = preferencesSchema.parse(body)

    // Update preferences
    const { data: preferences, error: updateError } = await supabase
      .from('user_preferences')
      .upsert({
        user_id: user.id,
        ...validatedData,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (updateError) {
      return NextResponse.json(
        { message: `Failed to update preferences: ${updateError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(preferences)
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