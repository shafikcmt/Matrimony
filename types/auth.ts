import { User } from '@supabase/supabase-js'

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  religion: string;
  caste: string;
  education: string;
  occupation: string;
  income: string;
  city: string;
  state: string;
  country: string;
  about: string;
  profile_picture: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  full_name: string;
  phone: string;
  date_of_birth: string;
} 