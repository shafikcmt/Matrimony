import { BasicInfoTypes, PersonalDetailsTypes } from "@/types/user";
import { useState } from "react";

const initialPersonalDetailsState: PersonalDetailsTypes = {
  height: "",
  maritalStatus: "",
  religion: "",
  caste: "",
  community: "",
  motherTongue: "",
  wantChildren: ""
}

  export const usePersonalDetailsBuilder = () => {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetailsTypes>(initialPersonalDetailsState);
  
    const updateBasicInfo = (data: Partial<PersonalDetailsTypes>) => {
      setPersonalDetails((prev) => ({
        ...prev,
        ...data,
      }));
    };
  
    return {
        personalDetails,
        setPersonalDetails,
    };
  };