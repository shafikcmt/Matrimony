import { atom } from 'recoil';

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  education: string;
  occupation: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  annualSalary: string;
  onBehalfOf: string;
  introduction: string;
  religion: string;
  caste: string;
  community: string;
  diet: string;
  smoking: string;
  drinking: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  preferredAge: string;
  preferredHeight: string;
  preferredReligion: string;
  preferredCaste: string;
  profileImage: string;
  package: {
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

export const userState = atom<UserProfile | null>({
  key: 'userState',
  default: null,
});

export const userLoadingState = atom<boolean>({
  key: 'userLoadingState',
  default: false,
});

export const userErrorState = atom<string | null>({
  key: 'userErrorState',
  default: null,
}); 