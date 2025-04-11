import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    // Get the current user's session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the current user's profile
    const { data: userProfile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (profileError || !userProfile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    // Fetch similar profiles based on preferences
    const { data: similarProfiles, error: matchError } = await supabase
      .from('profiles')
      .select(`
        id,
        firstName,
        lastName,
        profileImage,
        dateOfBirth,
        maritalStatus,
        religion,
        caste,
        city,
        state,
        country
      `)
      .neq('id', session.user.id)
      .eq('gender', userProfile.preferredGender || 'any')
      .in('religion', [userProfile.preferredReligion, null])
      .in('caste', [userProfile.preferredCaste, null])
      .limit(5);

    if (matchError) {
      console.error('Error fetching similar profiles:', matchError);
      return NextResponse.json(
        { error: 'Failed to fetch similar profiles' },
        { status: 500 }
      );
    }

    // Transform the profiles to match the expected format
    const formattedProfiles = similarProfiles.map(profile => ({
      id: profile.id,
      name: `${profile.firstName} ${profile.lastName}`,
      details: `${new Date().getFullYear() - new Date(profile.dateOfBirth).getFullYear()} yrs, ${profile.maritalStatus}, ${profile.religion}${profile.caste ? `, ${profile.caste}` : ''}, ${profile.city || profile.state || profile.country}`,
      image: profile.profileImage
    }));

    return NextResponse.json(formattedProfiles);
  } catch (error) {
    console.error('Error in similar profiles route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 