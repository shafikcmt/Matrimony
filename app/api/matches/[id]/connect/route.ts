import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const connectionSchema = z.object({
  message: z.string().min(1).max(500).optional(),
})

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
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
    const { message } = connectionSchema.parse(body)

    // Check if target profile exists
    const { data: targetProfile, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', params.id)
      .single()

    if (profileError || !targetProfile) {
      return NextResponse.json(
        { message: 'Profile not found' },
        { status: 404 }
      )
    }

    // Check if connection already exists
    const { data: existingConnection, error: connectionError } = await supabase
      .from('connections')
      .select('*')
      .or(`and(sender_id.eq.${user.id},receiver_id.eq.${params.id}),and(sender_id.eq.${params.id},receiver_id.eq.${user.id})`)
      .single()

    if (connectionError && connectionError.code !== 'PGRST116') {
      return NextResponse.json(
        { message: `Failed to check connection: ${connectionError.message}` },
        { status: 500 }
      )
    }

    if (existingConnection) {
      return NextResponse.json(
        { message: 'Connection already exists' },
        { status: 400 }
      )
    }

    // Create connection
    const { data: connection, error: createError } = await supabase
      .from('connections')
      .insert({
        sender_id: user.id,
        receiver_id: params.id,
        message,
        status: 'pending',
      })
      .select()
      .single()

    if (createError) {
      return NextResponse.json(
        { message: `Failed to create connection: ${createError.message}` },
        { status: 500 }
      )
    }

    // Create notification for receiver
    const { error: notificationError } = await supabase
      .from('notifications')
      .insert({
        user_id: params.id,
        type: 'connection_request',
        data: {
          connection_id: connection.id,
          sender_id: user.id,
          message,
        },
      })

    if (notificationError) {
      console.error('Failed to create notification:', notificationError)
    }

    return NextResponse.json(connection)
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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
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
    const { status } = z.object({
      status: z.enum(['accepted', 'rejected']),
    }).parse(body)

    // Get connection
    const { data: connection, error: connectionError } = await supabase
      .from('connections')
      .select('*')
      .eq('id', params.id)
      .single()

    if (connectionError || !connection) {
      return NextResponse.json(
        { message: 'Connection not found' },
        { status: 404 }
      )
    }

    // Verify user is the receiver
    if (connection.receiver_id !== user.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Update connection
    const { data: updatedConnection, error: updateError } = await supabase
      .from('connections')
      .update({ status })
      .eq('id', params.id)
      .select()
      .single()

    if (updateError) {
      return NextResponse.json(
        { message: `Failed to update connection: ${updateError.message}` },
        { status: 500 }
      )
    }

    // Create notification for sender
    const { error: notificationError } = await supabase
      .from('notifications')
      .insert({
        user_id: connection.sender_id,
        type: 'connection_response',
        data: {
          connection_id: connection.id,
          receiver_id: user.id,
          status,
        },
      })

    if (notificationError) {
      console.error('Failed to create notification:', notificationError)
    }

    return NextResponse.json(updatedConnection)
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