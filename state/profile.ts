import { create } from "zustand";
import { 
  UserProfileType, 
  BasicInfoTypes, 
  PersonalDetailsTypes, 
  EducationCareerTypes, 
  FamilyDetailsTypes, 
  LifestylePreferencesTypes, 
  PartnerPreferencesTypes, 
  PhotosGalleryTypes 
} from "@/types/user";

interface ProfileState {
  // Profile data
  profile: UserProfileType | null;
  isLoading: boolean;
  error: string | null;
  
  // Form data for each section
  basicInfo: BasicInfoTypes;
  personalDetails: PersonalDetailsTypes;
  educationCareer: EducationCareerTypes;
  familyDetails: FamilyDetailsTypes;
  lifestylePreferences: LifestylePreferencesTypes;
  partnerPreferences: PartnerPreferencesTypes;
  photosGallery: PhotosGalleryTypes;
  
  // Current active section
  activeSection: string;
  
  // Actions
  setProfile: (profile: UserProfileType) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Form actions
  setBasicInfo: (data: Partial<BasicInfoTypes>) => void;
  setPersonalDetails: (data: Partial<PersonalDetailsTypes>) => void;
  setEducationCareer: (data: Partial<EducationCareerTypes>) => void;
  setFamilyDetails: (data: Partial<FamilyDetailsTypes>) => void;
  setLifestylePreferences: (data: Partial<LifestylePreferencesTypes>) => void;
  setPartnerPreferences: (data: Partial<PartnerPreferencesTypes>) => void;
  setPhotosGallery: (data: Partial<PhotosGalleryTypes>) => void;
  
  // Section navigation
  setActiveSection: (section: string) => void;
  
  // Reset form
  resetForm: () => void;
  
  // Save profile
  saveProfile: () => Promise<void>;
}

// Initial form data
const initialBasicInfo: BasicInfoTypes = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  plan: "",
};

const initialPersonalDetails: PersonalDetailsTypes = {
  height: "",
  maritalStatus: "",
  religion: "",
  caste: "",
  community: "",
  motherTongue: "",
  wantChildren: "",
};

const initialEducationCareer: EducationCareerTypes = {
  highestQualification: "",
  fieldOfStudy: "",
  university: "",
  yearOfPassing: "",
  grade: "",
  occupation: "",
  industry: "",
  company: "",
  experience: "",
  income: "",
  workLocation: "",
  achievements: "",
  futurePlans: "",
};

const initialFamilyDetails: FamilyDetailsTypes = {
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  brothers: "",
  sisters: "",
  familyType: "",
  familyValues: "",
  familyStatus: "",
  familyLocation: "",
  familyBackground: "",
  familyPreferences: "",
};

const initialLifestylePreferences: LifestylePreferencesTypes = {
  diet: "",
  smoking: "",
  drinking: "",
  exercise: "",
  sleepSchedule: "",
  socialLife: "",
  hobbies: "",
  languages: "",
  travel: "",
  pets: "",
  otherPreferences: "",
};

const initialPartnerPreferences: PartnerPreferencesTypes = {
  partnerAgeRangeMin: "",
  partnerAgeRangeMax: "",
  partnerHeightRangeMin: "",
  partnerHeightRangeMax: "",
  partnerMaritalStatus: "",
  partnerReligion: "",
  partnerCaste: "",
  partnerCommunity: "",
  partnerMotherTongue: "",
  partnerEducation: "",
  partnerOccupation: "",
  partnerIncome: "",
  partnerLocation: "",
  partnerDiet: "",
  partnerSmoking: "",
  partnerDrinking: "",
  partnerExercise: "",
  partnerSleepSchedule: "",
  partnerSocialLife: "",
  partnerWantChildren: "",
  partnerOtherPreferences: "",
};

const initialPhotosGallery: PhotosGalleryTypes = {
  profilePicture: "",
  galleryImages: [],
};

export const useProfileStore = create<ProfileState>((set, get) => ({
  // Initial state
  profile: null,
  isLoading: false,
  error: null,
  activeSection: "basicInfo",
  
  // Form data
  basicInfo: initialBasicInfo,
  personalDetails: initialPersonalDetails,
  educationCareer: initialEducationCareer,
  familyDetails: initialFamilyDetails,
  lifestylePreferences: initialLifestylePreferences,
  partnerPreferences: initialPartnerPreferences,
  photosGallery: initialPhotosGallery,
  
  // Actions
  setProfile: (profile) => set({ profile }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  
  // Form actions
  setBasicInfo: (data) => set((state) => ({ 
    basicInfo: { ...state.basicInfo, ...data } 
  })),
  setPersonalDetails: (data) => set((state) => ({ 
    personalDetails: { ...state.personalDetails, ...data } 
  })),
  setEducationCareer: (data) => set((state) => ({ 
    educationCareer: { ...state.educationCareer, ...data } 
  })),
  setFamilyDetails: (data) => set((state) => ({ 
    familyDetails: { ...state.familyDetails, ...data } 
  })),
  setLifestylePreferences: (data) => set((state) => ({ 
    lifestylePreferences: { ...state.lifestylePreferences, ...data } 
  })),
  setPartnerPreferences: (data) => set((state) => ({ 
    partnerPreferences: { ...state.partnerPreferences, ...data } 
  })),
  setPhotosGallery: (data) => set((state) => ({ 
    photosGallery: { ...state.photosGallery, ...data } 
  })),
  
  // Section navigation
  setActiveSection: (section) => set({ activeSection: section }),
  
  // Reset form
  resetForm: () => set({
    basicInfo: initialBasicInfo,
    personalDetails: initialPersonalDetails,
    educationCareer: initialEducationCareer,
    familyDetails: initialFamilyDetails,
    lifestylePreferences: initialLifestylePreferences,
    partnerPreferences: initialPartnerPreferences,
    photosGallery: initialPhotosGallery,
  }),
  
  // Save profile
  saveProfile: async () => {
    const state = get();
    set({ isLoading: true, error: null });
    
    try {
      // Combine all form data into a complete profile
      const completeProfile: UserProfileType = {
        ...state.basicInfo,
        ...state.personalDetails,
        ...state.educationCareer,
        ...state.familyDetails,
        ...state.lifestylePreferences,
        ...state.partnerPreferences,
        ...state.photosGallery,
      };
      
      // Here you would typically make an API call to save the profile
      // For now, we'll just update the local state
      set({ profile: completeProfile, isLoading: false });
      
      // Return success
      return Promise.resolve();
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : "Failed to save profile", 
        isLoading: false 
      });
      return Promise.reject(error);
    }
  },
})); 