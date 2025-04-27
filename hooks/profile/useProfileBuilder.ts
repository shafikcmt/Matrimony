import { useState, useEffect } from 'react';

// Define the form data interface
export interface ProfileFormData {
  // Basic Info
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  
  // Personal Details
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  community: string;
  motherTongue: string;
  languagesKnown: string[];
  
  // Education & Career
  highestQualification: string;
  fieldOfStudy: string;
  university: string;
  yearOfPassing: string;
  grade: string;
  occupation: string;
  industry: string;
  company: string;
  experience: string;
  income: string;
  workLocation: string;
  achievements: string;
  futurePlans: string;
  
  // Family Background
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  familyLocation: string;
  familyBackground: string;
  familyPreferences: string;
  
  // Lifestyle & Preferences
  diet: string;
  smoking: string;
  drinking: string;
  exercise: string;
  sleepSchedule: string;
  socialLife: string;
  hobbies: string;
  languages: string;
  travel: string;
  pets: string;
  otherPreferences: string;
  
  // Partner Preferences
  partnerAgeRange: string;
  partnerHeightRange: string;
  partnerMaritalStatus: string;
  partnerReligion: string;
  partnerCaste: string;
  partnerCommunity: string;
  partnerMotherTongue: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerIncome: string;
  partnerLocation: string;
  partnerDiet: string;
  partnerSmoking: string;
  partnerDrinking: string;
  partnerExercise: string;
  partnerSleepSchedule: string;
  partnerSocialLife: string;
  partnerWantChildren: string;
  partnerOtherPreferences: string;
  
  // Photos
  profilePicture: string;
  galleryImages: string[];
}

// Interfaces for ReviewSubmit component
export interface BasicInfoReview {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  community: string;
  motherTongue: string;
}

export interface EducationCareerReview {
  highestQualification: string;
  fieldOfStudy: string;
  university: string;
  yearOfPassing: string;
  grade: string;
  occupation: string;
  industry: string;
  company: string;
  experience: string;
  income: string;
  workLocation: string;
  achievements: string;
  futurePlans: string;
}

export interface FamilyDetailsReview {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  familyLocation: string;
  familyBackground: string;
  familyPreferences: string;
}

export interface LifestyleReview {
  diet: string;
  smoking: string;
  drinking: string;
  exercise: string;
  sleepSchedule: string;
  socialLife: string;
  hobbies: string;
  languages: string;
  travel: string;
  pets: string;
  otherPreferences: string;
}

export interface PartnerPreferencesReview {
  partnerAgeRange: string;
  partnerHeightRange: string;
  partnerMaritalStatus: string;
  partnerReligion: string;
  partnerCaste: string;
  partnerCommunity: string;
  partnerMotherTongue: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerIncome: string;
  partnerLocation: string;
  partnerDiet: string;
  partnerSmoking: string;
  partnerDrinking: string;
  partnerExercise: string;
  partnerSleepSchedule: string;
  partnerSocialLife: string;
  partnerWantChildren: string;
  partnerOtherPreferences: string;
}

export interface PhotosGalleryReview {
  profilePicture: string;
  galleryImages: string[];
}

// Initial form data
const initialFormData: ProfileFormData = {
  // Basic Info
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",
  
  // Personal Details
  height: "",
  maritalStatus: "",
  religion: "",
  caste: "",
  community: "",
  motherTongue: "",
  languagesKnown: [],
  
  // Education & Career
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
  
  // Family Background
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  siblings: "",
  familyType: "",
  familyValues: "",
  familyStatus: "",
  familyLocation: "",
  familyBackground: "",
  familyPreferences: "",
  
  // Lifestyle & Preferences
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
  
  // Partner Preferences
  partnerAgeRange: "",
  partnerHeightRange: "",
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
  
  // Photos
  profilePicture: "",
  galleryImages: []
};

export function useProfileBuilder() {
  const [formData, setFormData] = useState<ProfileFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reviewData, setReviewData] = useState({
    basicInfo: {} as BasicInfoReview,
    educationCareer: {} as EducationCareerReview,
    familyDetails: {} as FamilyDetailsReview,
    lifestyle: {} as LifestyleReview,
    partnerPreferences: {} as PartnerPreferencesReview,
    photosGallery: {} as PhotosGalleryReview
  });

  // Update review data whenever form data changes
  useEffect(() => {
    // Format data for ReviewSubmit component
    setReviewData({
      basicInfo: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phoneNumber,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        height: formData.height,
        maritalStatus: formData.maritalStatus,
        religion: formData.religion,
        caste: formData.caste,
        community: formData.community,
        motherTongue: formData.motherTongue
      },
      educationCareer: {
        highestQualification: formData.highestQualification,
        fieldOfStudy: formData.fieldOfStudy,
        university: formData.university,
        yearOfPassing: formData.yearOfPassing,
        grade: formData.grade,
        occupation: formData.occupation,
        industry: formData.industry,
        company: formData.company,
        experience: formData.experience,
        income: formData.income,
        workLocation: formData.workLocation,
        achievements: formData.achievements,
        futurePlans: formData.futurePlans
      },
      familyDetails: {
        fatherName: formData.fatherName,
        fatherOccupation: formData.fatherOccupation,
        motherName: formData.motherName,
        motherOccupation: formData.motherOccupation,
        siblings: formData.siblings,
        familyType: formData.familyType,
        familyValues: formData.familyValues,
        familyStatus: formData.familyStatus,
        familyLocation: formData.familyLocation,
        familyBackground: formData.familyBackground,
        familyPreferences: formData.familyPreferences
      },
      lifestyle: {
        diet: formData.diet,
        smoking: formData.smoking,
        drinking: formData.drinking,
        exercise: formData.exercise,
        sleepSchedule: formData.sleepSchedule,
        socialLife: formData.socialLife,
        hobbies: formData.hobbies,
        languages: formData.languages,
        travel: formData.travel,
        pets: formData.pets,
        otherPreferences: formData.otherPreferences
      },
      partnerPreferences: {
        partnerAgeRange: formData.partnerAgeRange,
        partnerHeightRange: formData.partnerHeightRange,
        partnerMaritalStatus: formData.partnerMaritalStatus,
        partnerReligion: formData.partnerReligion,
        partnerCaste: formData.partnerCaste,
        partnerCommunity: formData.partnerCommunity,
        partnerMotherTongue: formData.partnerMotherTongue,
        partnerEducation: formData.partnerEducation,
        partnerOccupation: formData.partnerOccupation,
        partnerIncome: formData.partnerIncome,
        partnerLocation: formData.partnerLocation,
        partnerDiet: formData.partnerDiet,
        partnerSmoking: formData.partnerSmoking,
        partnerDrinking: formData.partnerDrinking,
        partnerExercise: formData.partnerExercise,
        partnerSleepSchedule: formData.partnerSleepSchedule,
        partnerSocialLife: formData.partnerSocialLife,
        partnerWantChildren: formData.partnerWantChildren,
        partnerOtherPreferences: formData.partnerOtherPreferences
      },
      photosGallery: {
        profilePicture: formData.profilePicture,
        galleryImages: formData.galleryImages
      }
    });
  }, [formData]);

  // Handle input changes
  const handleInputChange = (field: keyof ProfileFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Navigate to next step
  const handleNext = () => {
    if (currentStep < 7) { // Assuming 8 steps (0-7)
      setCurrentStep(prev => prev + 1);
    }
  };

  // Navigate to previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Submit the form
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Here you would typically send the data to your API
      // For now, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      console.log("formData :", formData);
      setFormData(initialFormData);
      setCurrentStep(0);
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the form');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Reset the form
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setError(null);
  };

  return {
    formData,
    currentStep,
    isLoading,
    error,
    reviewData,
    handleInputChange,
    handleNext,
    handlePrevious,
    handleSubmit,
    resetForm
  };
}