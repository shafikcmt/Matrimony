import { MaritalStatus, Religion } from "@/types/enums";
import { BasicInfoTypes, PersonalDetailsTypes } from "@/types/user";
import { useState } from "react";

const initialPersonalDetailsState: PersonalDetailsTypes = {
  height: "",
  maritalStatus: MaritalStatus.NEVER_MARRIED,
  religion: Religion.HINDUISM,
  caste: "",
  community: "",
  motherTongue: "",
  wantChildren: "",
  address: ""
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