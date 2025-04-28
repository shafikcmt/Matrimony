import { EducationCareerTypes } from "@/types/user";
import { useState } from "react";

const initialEducationCareerState: EducationCareerTypes = {
  highestQualification: '',
  fieldOfStudy: '',
  university: '',
  yearOfPassing: '',
  grade: '',
  occupation: '',
  industry: '',
  company: '',
  experience: '',
  income: '',
  workLocation: '',
  achievements: '',
  futurePlans: ''
}

export const useEducationCareerBuilder = () => {
  const [educationCareer, setEducationCareer] = useState<EducationCareerTypes>(initialEducationCareerState);

  const updateEducationCareer = (data: Partial<EducationCareerTypes>) => {
    setEducationCareer((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return {
    educationCareer,
    setEducationCareer,
  };
}; 