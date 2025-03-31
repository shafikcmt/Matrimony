import { UserProfile } from './auth'

export interface Match {
  id: string;
  user_id: string;
  matched_user_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  updated_at: string;
  matched_user: UserProfile;
}

export interface MatchRequest {
  id: string;
  from_user_id: string;
  to_user_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  updated_at: string;
  from_user: UserProfile;
}

export interface MatchPreferences {
  age_range: {
    min: number;
    max: number;
  };
  gender: string[];
  religion: string[];
  caste: string[];
  education: string[];
  occupation: string[];
  income_range: {
    min: number;
    max: number;
  };
  location: {
    cities: string[];
    states: string[];
    countries: string[];
  };
} 