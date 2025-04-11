import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const verificationRequestSchema = z.object({
  documentType: z.enum(['id_proof', 'address_proof', 'photo_id']),
  documentNumber: z.string().min(1),
  documentImage: z.string().url(),
  additionalNotes: z.string().max(500).optional(),
})

export async function POST(request: Request) {
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

    // Parse request body
    const body = await request.json()
    const validatedData = verificationRequestSchema.parse(body)

    // Check if verification request already exists
    const { data: existingRequest, error: checkError } = await supabase
      .from('verification_requests')
      .select('*')
      .eq('user_id', user.id)
      .eq('document_type', validatedData.documentType)
      .eq('status', 'pending')
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      return NextResponse.json(
        { message: `Failed to check verification request: ${checkError.message}` },
        { status: 500 }
      )
    }

    if (existingRequest) {
      return NextResponse.json(
        { message: 'Verification request already exists' },
        { status: 400 }
      )
    }

    // Create verification request
    const { data: verificationRequest, error: createError } = await supabase
      .from('verification_requests')
      .insert({
        user_id: user.id,
        document_type: validatedData.documentType,
        document_number: validatedData.documentNumber,
        document_image: validatedData.documentImage,
        additional_notes: validatedData.additionalNotes,
        status: 'pending',
      })
      .select()
      .single()

    if (createError) {
      return NextResponse.json(
        { message: `Failed to create verification request: ${createError.message}` },
        { status: 500 }
      )
    }

    // Create notification for admin
    const { error: notificationError } = await supabase
      .from('notifications')
      .insert({
        user_id: 'admin', // This should be replaced with actual admin user ID
        type: 'verification_request',
        data: {
          request_id: verificationRequest.id,
          user_id: user.id,
          document_type: validatedData.documentType,
        },
      })

    if (notificationError) {
      console.error('Failed to create notification:', notificationError)
    }

    return NextResponse.json(verificationRequest)
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

    // Get verification requests
    const { data: verificationRequests, error: fetchError } = await supabase
      .from('verification_requests')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (fetchError) {
      return NextResponse.json(
        { message: `Failed to fetch verification requests: ${fetchError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(verificationRequests)
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 