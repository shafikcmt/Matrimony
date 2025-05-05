import { useState } from 'react';
import { toast } from 'sonner';
import { UserProfileType } from '@/types/user';
import { useBasicInfoBuilder } from './basicInfoBuilder';
import { usePersonalDetailsBuilder } from './perrsonalDetailsBuilder';
import { useEducationCareerBuilder } from './educationCareerBuilder';
import { useFamilyDetailsBuilder } from './familyDetailsBuilder';
import { useLifestylePreferencesBuilder } from './lifestylePreferencesBuilder';
import { usePartnerPreferencesBuilder } from './partnerPreferencesBuilder';
import { usePhotosGalleryBuilder } from './photosGalleryBuilder';
import setUserProfile from '@/lib/user/setUserProfile';
import useAuthStore from '@/state/authState';

export const useProfileBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { basicInfo, setBasicInfo } = useBasicInfoBuilder();
  const { personalDetails, setPersonalDetails } = usePersonalDetailsBuilder();
  const { educationCareer, setEducationCareer } = useEducationCareerBuilder();
  const { familyDetails, setFamilyDetails } = useFamilyDetailsBuilder();
  const { lifestyle, setLifestyle } = useLifestylePreferencesBuilder();
  const { partnerPreferences, setPartnerPreferences } = usePartnerPreferencesBuilder();
  const { photosGallery, setPhotosGallery } = usePhotosGalleryBuilder();

  const authId = useAuthStore(store => store.authId);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 7));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const profileData: UserProfileType = {
        ...basicInfo,
        ...personalDetails,
        ...educationCareer,
        ...familyDetails,
        ...lifestyle,
        ...partnerPreferences,
        ...photosGallery,
      };

      const { success, error } = await setUserProfile(profileData, authId);

      if (success) {
        toast.success('Profile saved successfully!');
      } else {
        toast.error(`Error saving profile: ${error}`);
        console.log("Error -> ", error);
      }
    } catch (error) {
      toast.error(`Unexpected error: ${String(error)}`);
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
    handleSubmit,
  };
};