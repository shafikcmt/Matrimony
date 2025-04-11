import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const profileUpdateSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  religion: z.string().optional(),
  caste: z.string().optional(),
  education: z.string().optional(),
  occupation: z.string().optional(),
  income: z.number().optional(),
  maritalStatus: z.enum(['never_married', 'divorced', 'widowed']).optional(),
  about: z.string().optional(),
  location: z.string().optional(),
  profilePhoto: z.string().optional(),
})

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
    const validatedData = profileUpdateSchema.parse(body)

    // Update profile
    const { data: profile, error: updateError } = await supabase
      .from('profiles')
      .update({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        date_of_birth: validatedData.dateOfBirth,
        gender: validatedData.gender,
        height: validatedData.height,
        weight: validatedData.weight,
        religion: validatedData.religion,
        caste: validatedData.caste,
        education: validatedData.education,
        occupation: validatedData.occupation,
        income: validatedData.income,
        marital_status: validatedData.maritalStatus,
        about: validatedData.about,
        location: validatedData.location,
        profile_photo: validatedData.profilePhoto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)
      .select()
      .single()

    if (updateError) {
      return NextResponse.json(
        { message: `Failed to update profile: ${updateError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(profile)
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

export async function DELETE(request: Request) {
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

    // Delete profile
    const { error: deleteError } = await supabase
      .from('profiles')
      .delete()
      .eq('id', user.id)

    if (deleteError) {
      return NextResponse.json(
        { message: `Failed to delete profile: ${deleteError.message}` },
        { status: 500 }
      )
    }

    // Delete auth user
    const { error: signOutError } = await supabase.auth.signOut()
    if (signOutError) {
      return NextResponse.json(
        { message: `Failed to sign out: ${signOutError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Profile deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 