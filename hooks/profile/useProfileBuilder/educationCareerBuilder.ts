import { Education, Industry } from "@/types/enums";
import { EducationCareerTypes } from "@/types/user";
import { useState } from "react";

const initialEducationCareerState: EducationCareerTypes = {
  highestQualification: Education.BACHELORS,
  fieldOfStudy: '',
  university: '',
  yearOfPassing: '',
  grade: '',
  occupation: '',
  industry: Industry.IT,
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