import { Diet, Education, Exercise, Habits, MaritalStatus, Religion, SleepSchedule, SocialLife } from "@/types/enums";
import { PartnerPreferencesTypes } from "@/types/user";
import { useState } from "react";

const initialPartnerPreferencesState: PartnerPreferencesTypes = {
  partnerMaritalStatus: MaritalStatus.NEVER_MARRIED,
  partnerReligion: Religion.HINDUISM,
  partnerCaste: '',
  partnerCommunity: '',
  partnerMotherTongue: '',
  partnerEducation: Education.OTHER,
  partnerOccupation: '',
  partnerIncome: '',
  partnerLocation: '',
  partnerDiet: Diet.VEG,
  partnerSmoking: Habits.NEVER,
  partnerDrinking: Habits.NEVER,
  partnerExercise: Exercise.NEVER,
  partnerSleepSchedule: SleepSchedule.NIGHT_OWL,
  partnerSocialLife: SocialLife.EXTROVERT,
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