import { Gender, Plan } from "@/types/enums";
import { BasicInfoTypes } from "@/types/user";
import { useState } from "react";

const initialBasicInfoState: BasicInfoTypes = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: Gender.MALE,
    dateOfBirth: '',
    plan: Plan.FREE,
    aboutMe: '',
    isVerified: false,
  }

  export const useBasicInfoBuilder = () => {
    const [basicInfo, setBasicInfo] = useState<BasicInfoTypes>(initialBasicInfoState);
  
    const updateBasicInfo = (data: Partial<BasicInfoTypes>) => {
      setBasicInfo((prev) => ({
        ...prev,
        ...data,
      }));
    };
  
    return {
        basicInfo,
        setBasicInfo,
    };
  };