import { BasicInfoTypes } from "@/types/user";
import { useState } from "react";

const initialBasicInfoState: BasicInfoTypes = {
  id: "",
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    plan: '',
    aboutme: '',
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