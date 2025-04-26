export type UserMetaDataType = {
  id: string;
  
  // Main data also available in session metadata
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  dob: Date;
}

export type UserProfileType = UserMetaDataType & {

  // About details
  profile_picture: string[];
  about: string;
  annualSalary: string;
  religion: string;
  caste: string;
  education: string[];
  occupation: string;

  // Residence details
  city: string;
  state: string;
  country: string;
  fullAddress: string;

  // Might need to be an enum
  plan: string;
}