import { FamilyDetailsTypes } from "@/types/user";
import { useState } from "react";

const initialFamilyDetailsState: FamilyDetailsTypes = {
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  brothers: '',
  sisters: '',
  familyType: '',
  familyValues: '',
  familyStatus: '',
  familyLocation: '',
  familyBackground: '',
  familyPreferences: ''
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