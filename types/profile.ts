export interface ProfileFormData {
  full_name: string;
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
}

export interface ProfilePreferences {
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