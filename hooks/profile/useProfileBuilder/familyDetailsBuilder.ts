import { FamilyStatus, FamilyType, FamilyValues } from "@/types/enums";
import { FamilyDetailsTypes } from "@/types/user";
import { useState } from "react";

const initialFamilyDetailsState: FamilyDetailsTypes = {
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  brothers: '',
  sisters: '',
  familyType: FamilyType.NUCLEAR,
  familyValues: FamilyValues.MODERN,
  familyStatus: FamilyStatus.UPPER_MIDDLE_CLASS,
  familyLocation: '',
  familyBackground: '',
  familyPreferences: '',
  aboutFamily: '',
}

export const useFamilyDetailsBuilder = () => {
  const [familyDetails, setFamilyDetails] = useState<FamilyDetailsTypes>(initialFamilyDetailsState);

  const updateFamilyDetails = (data: Partial<FamilyDetailsTypes>) => {
    setFamilyDetails((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return {
    familyDetails,
    setFamilyDetails,
  };
}; 