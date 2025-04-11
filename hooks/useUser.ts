import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userProfileState, userProfileSelector } from '@/store/auth';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { UserProfile } from '@/types/user';

export const useUser = () => {
  const userProfile = useRecoilValue(userProfileSelector);
  const setUserProfile = useSetRecoilState(userProfileState);
  const supabase = createClientComponentClient();

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;

      setUserProfile(data as UserProfile);
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  };

  const updateUserProfile = async (profileData: Partial<UserProfile>) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(profileData)
        .eq('id', userProfile?.id)
        .select()
        .single();

      if (error) throw error;

      setUserProfile(data as UserProfile);
      return data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  };

  const registerUser = async (userData: Partial<UserProfile>) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert([userData])
        .select()
        .single();

      if (error) throw error;

      setUserProfile(data as UserProfile);
      return data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  return {
    user: userProfile,
    setUser: setUserProfile,
    fetchUserProfile,
    updateUserProfile,
    registerUser,
  };
}; 