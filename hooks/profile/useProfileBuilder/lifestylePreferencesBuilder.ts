import { LifestylePreferencesTypes } from "@/types/user";
import { useState } from "react";

const initialLifestylePreferencesState: LifestylePreferencesTypes = {
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