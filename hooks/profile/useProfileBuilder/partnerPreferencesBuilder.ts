import { PartnerPreferencesTypes } from "@/types/user";
import { useState } from "react";

const initialPartnerPreferencesState: PartnerPreferencesTypes = {
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
  partnerAgeRangeMin: "",
  partnerAgeRangeMax: "",
  partnerHeightRangeMin: "",
  partnerHeightRangeMax: ""
}

export const usePartnerPreferencesBuilder = () => {
  const [partnerPreferences, setPartnerPreferences] = useState<PartnerPreferencesTypes>(initialPartnerPreferencesState);

  const updatePartnerPreferences = (data: Partial<PartnerPreferencesTypes>) => {
    setPartnerPreferences((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return {
    partnerPreferences,
    setPartnerPreferences,
  };
}; 