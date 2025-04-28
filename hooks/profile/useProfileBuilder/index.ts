import { useState } from 'react';
import { UserProfileType } from '@/types/user';
import { useBasicInfoBuilder } from './basicInfoBuilder';
import { usePersonalDetailsBuilder } from './perrsonalDetailsBuilder';
import { useEducationCareerBuilder } from './educationCareerBuilder';
import { useFamilyDetailsBuilder } from './familyDetailsBuilder';
import { useLifestylePreferencesBuilder } from './lifestylePreferencesBuilder';
import { usePartnerPreferencesBuilder } from './partnerPreferencesBuilder';
import { usePhotosGalleryBuilder } from './photosGalleryBuilder';

export const useProfileBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    basicInfo,
    setBasicInfo
  } = useBasicInfoBuilder();

  const {
    personalDetails,
    setPersonalDetails
  } = usePersonalDetailsBuilder();

  const {
    educationCareer,
    setEducationCareer
  } = useEducationCareerBuilder();

  const {
    familyDetails,
    setFamilyDetails
  } = useFamilyDetailsBuilder();

  const {
    lifestyle,
    setLifestyle
  } = useLifestylePreferencesBuilder();

  const {
    partnerPreferences,
    setPartnerPreferences
  } = usePartnerPreferencesBuilder();

  const {
    photosGallery,
    setPhotosGallery,
  } = usePhotosGalleryBuilder();

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 7));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Combine all the data into a single profile
      const profileData: UserProfileType = {
        ...basicInfo,
        ...personalDetails,
        ...educationCareer,
        ...familyDetails,
        ...lifestyle,
        ...partnerPreferences,
        ...photosGallery
      };

      // TODO: Add your API call here to save the profile
      console.log('Submitting profile:', profileData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form or redirect
      setCurrentStep(0);
    } catch (error) {
      console.error('Error submitting profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentStep,
    isLoading,
    basicInfo,
    setBasicInfo,
    personalDetails,
    setPersonalDetails,
    educationCareer,
    setEducationCareer,
    familyDetails,
    setFamilyDetails,
    lifestyle,
    setLifestyle,
    partnerPreferences,
    setPartnerPreferences,
    photosGallery,
    setPhotosGallery,
    handleNext,
    handlePrevious,
    handleSubmit
  };
};