import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(
  request: Request,
  { params }: { params: { conversationId: string } }
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

    // Parse URL parameters
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 50

    // Verify user is part of the conversation
    const { data: participant, error: participantError } = await supabase
      .from('conversation_participants')
      .select('*')
      .eq('conversation_id', params.conversationId)
      .eq('user_id', user.id)
      .single()

    if (participantError || !participant) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get messages
    const from = (page - 1) * limit
    const to = from + limit - 1

    const { data: messages, error: messagesError, count } = await supabase
      .from('messages')
      .select(`
        *,
        sender:profiles!inner(*)
      `)
      .eq('conversation_id', params.conversationId)
      .order('created_at', { ascending: false })
      .range(from, to)

    if (messagesError) {
      return NextResponse.json(
        { message: `Failed to fetch messages: ${messagesError.message}` },
        { status: 500 }
      )
    }

    // Mark unread messages as read
    const { error: updateError } = await supabase
      .from('messages')
      .update({ read_at: new Date().toISOString() })
      .eq('conversation_id', params.conversationId)
      .not('sender_id', 'eq', user.id)
      .is('read_at', null)

    if (updateError) {
      console.error('Failed to mark messages as read:', updateError)
    }

    return NextResponse.json({
      messages,
      pagination: {
        total: count || 0,
        page,
        limit,
        totalPages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { conversationId: string } }
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
    const { messageId } = z.object({
      messageId: z.string().uuid(),
    }).parse(body)

    // Verify user is part of the conversation
    const { data: participant, error: participantError } = await supabase
      .from('conversation_participants')
      .select('*')
      .eq('conversation_id', params.conversationId)
      .eq('user_id', user.id)
      .single()

    if (participantError || !participant) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get message
    const { data: message, error: messageError } = await supabase
      .from('messages')
      .select('*')
      .eq('id', messageId)
      .single()

    if (messageError || !message) {
      return NextResponse.json(
        { message: 'Message not found' },
        { status: 404 }
      )
    }

    // Verify user is the sender
    if (message.sender_id !== user.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Delete message
    const { error: deleteError } = await supabase
      .from('messages')
      .delete()
      .eq('id', messageId)

    if (deleteError) {
      return NextResponse.json(
        { message: `Failed to delete message: ${deleteError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Message deleted successfully' })
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