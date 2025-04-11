import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const messageSchema = z.object({
  content: z.string().min(1).max(1000),
  conversationId: z.string().uuid(),
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

    // Get user's conversations
    const { data: conversations, error: conversationsError } = await supabase
      .from('conversations')
      .select(`
        *,
        participants:conversation_participants!inner(
          user:profiles!inner(*)
        )
      `)
      .eq('conversation_participants.user_id', user.id)
      .order('updated_at', { ascending: false })

    if (conversationsError) {
      return NextResponse.json(
        { message: `Failed to fetch conversations: ${conversationsError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(conversations)
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

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
    const { content, conversationId } = messageSchema.parse(body)

    // Verify user is part of the conversation
    const { data: participant, error: participantError } = await supabase
      .from('conversation_participants')
      .select('*')
      .eq('conversation_id', conversationId)
      .eq('user_id', user.id)
      .single()

    if (participantError || !participant) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Create message
    const { data: message, error: messageError } = await supabase
      .from('messages')
      .insert({
        conversation_id: conversationId,
        sender_id: user.id,
        content,
      })
      .select()
      .single()

    if (messageError) {
      return NextResponse.json(
        { message: `Failed to send message: ${messageError.message}` },
        { status: 500 }
      )
    }

    // Update conversation's updated_at
    const { error: updateError } = await supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', conversationId)

    if (updateError) {
      console.error('Failed to update conversation:', updateError)
    }

    // Create notifications for other participants
    const { data: otherParticipants, error: participantsError } = await supabase
      .from('conversation_participants')
      .select('user_id')
      .eq('conversation_id', conversationId)
      .neq('user_id', user.id)

    if (participantsError) {
      console.error('Failed to fetch participants:', participantsError)
    } else {
      const notifications = otherParticipants.map(participant => ({
        user_id: participant.user_id,
        type: 'new_message',
        data: {
          conversation_id: conversationId,
          message_id: message.id,
          sender_id: user.id,
        },
      }))

      const { error: notificationError } = await supabase
        .from('notifications')
        .insert(notifications)

      if (notificationError) {
        console.error('Failed to create notifications:', notificationError)
      }
    }

    return NextResponse.json(message)
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