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
  
  // Additional properties for the public profile page
  firstName?: string;
  lastName?: string;
  introduction?: string;
  maritalStatus?: string;
  annualSalary?: string;
  onBehalfOf?: string;
  community?: string;
  diet?: string;
  smoking?: string;
  drinking?: string;
  postalCode?: string;
  preferredAge?: string;
  preferredHeight?: string;
  preferredReligion?: string;
  preferredCaste?: string;
  profileImage?: string;
  package?: {
    name: string;
    expiryDate: string;
    features: {
      name: string;
      enabled: boolean;
    }[];
    stats: {
      remainingInterest: number;
      remainingContactView: number;
      profileViewerView: number;
      galleryImageUpload: number;
    };
  };
} 