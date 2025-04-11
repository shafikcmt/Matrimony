import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { data: stories, error } = await supabase
      .from('success_stories')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6);

    if (error) {
      console.error('Error fetching success stories:', error);
      return NextResponse.json(
        { error: 'Failed to fetch success stories' },
        { status: 500 }
      );
    }

    return NextResponse.json(stories);
  } catch (error) {
    console.error('Error in success stories route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 