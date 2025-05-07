import { Diet, Exercise, Habits, Pets, SleepSchedule, SocialLife, Travel } from "@/types/enums";
import { LifestylePreferencesTypes } from "@/types/user";
import { useState } from "react";

const initialLifestylePreferencesState: LifestylePreferencesTypes = {
  diet: Diet.VEG,
  smoking: Habits.NEVER,
  drinking: Habits.NEVER,
  exercise: Exercise.NEVER,
  sleepSchedule: SleepSchedule.REGULAR,
  socialLife: SocialLife.INTROVERT,
  hobbies: '',
  languages: '',
  travel: Travel.LOVE,
  pets: Pets.LOVE,
  otherPreferences: ''
}

export const useLifestylePreferencesBuilder = () => {
  const [lifestyle, setLifestyle] = useState<LifestylePreferencesTypes>(initialLifestylePreferencesState);

  const updateLifestyle = (data: Partial<LifestylePreferencesTypes>) => {
    setLifestyle((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return {
    lifestyle,
    setLifestyle,
  };
}; 