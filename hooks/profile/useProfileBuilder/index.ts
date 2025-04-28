import { useState } from 'react';
import { BasicInfo, UserProfileType } from '@/types/user';

const basicInfo: BasicInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gender: '',
  dateOfBirth: ''
}

const initialProfileState: UserProfileType = {
  // Basic Info
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gender: '',
  dateOfBirth: '',

  // Personal Details
  height: '',
  maritalStatus: '',
  religion: '',
  caste: '',
  community: '',
  motherTongue: '',

  // Education & Career
  highestQualification: '',
  fieldOfStudy: '',
  university: '',
  yearOfPassing: '',
  grade: '',
  occupation: '',
  industry: '',
  company: '',
  experience: '',
  income: '',
  workLocation: '',
  achievements: '',
  futurePlans: '',

  // Family Details
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  siblings: '',
  familyType: '',
  familyValues: '',
  familyStatus: '',
  familyLocation: '',
  familyBackground: '',
  familyPreferences: '',

  // Lifestyle Preferences
  diet: '',
  smoking: '',
  drinking: '',
  exercise: '',
  sleepSchedule: '',
  socialLife: '',
  hobbies: '',
  languages: '',
  travel: '',
  pets: '',
  otherPreferences: '',

  // Partner Preferences
  partnerAgeRange: '',
  partnerHeightRange: '',
  partnerMaritalStatus: '',
  partnerReligion: '',
  partnerCaste: '',
  partnerCommunity: '',
  partnerMotherTongue: '',
  partnerEducation: '',
  partnerOccupation: '',
  partnerIncome: '',
  partnerLocation: '',
  partnerDiet: '',
  partnerSmoking: '',
  partnerDrinking: '',
  partnerExercise: '',
  partnerSleepSchedule: '',
  partnerSocialLife: '',
  partnerWantChildren: '',
  partnerOtherPreferences: '',

  // Photos & Gallery
  profilePicture: '',
  galleryImages: [],

  // Plan
  plan: '',
};

export const useProfileBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<UserProfileType>(initialProfileState);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 7));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateProfileData = (data: Partial<UserProfileType>) => {
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // TODO: Implement your API call here to save the profile data
      // const response = await saveProfile(profileData);
      console.log('Profile data to be submitted:', profileData);
      // Handle success
    } catch (error) {
      console.error('Error saving profile:', error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setProfileData(initialProfileState);
    setCurrentStep(0);
  };

  return {
    currentStep,
    isLoading,
    profileData,
    handleNext,
    handlePrevious,
    updateProfileData,
    handleSubmit,
    resetForm,
  };
};