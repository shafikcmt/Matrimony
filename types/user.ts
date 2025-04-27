
export type UserProfileType = BasicInfo & personlaDetails & EducationCareer & FamilyDetails & LifestylePreferences & PartnerPreferences & PhotosGallery & {

  plan: string;

}

export interface BasicInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
}

export interface personlaDetails {
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  community: string;
  motherTongue: string;
}


export interface EducationCareer {
  highestQualification: string;
  fieldOfStudy: string;
  university: string;
  yearOfPassing: string;
  grade: string;
  occupation: string;
  industry: string;
  company: string;
  experience: string;
  income: string;
  workLocation: string;
  achievements: string;
  futurePlans: string;
}

export interface FamilyDetails {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  familyLocation: string;
  familyBackground: string;
  familyPreferences: string;
}

export interface LifestylePreferences {
  diet: string;
  smoking: string;
  drinking: string;
  exercise: string;
  sleepSchedule: string;
  socialLife: string;
  hobbies: string;
  languages: string;
  travel: string;
  pets: string;
  otherPreferences: string;
}

export interface PartnerPreferences {
  partnerAgeRange: string;
  partnerHeightRange: string;
  partnerMaritalStatus: string;
  partnerReligion: string;
  partnerCaste: string;
  partnerCommunity: string;
  partnerMotherTongue: string;
  partnerEducation: string;
  partnerOccupation: string;
  partnerIncome: string;
  partnerLocation: string;
  partnerDiet: string;
  partnerSmoking: string;
  partnerDrinking: string;
  partnerExercise: string;
  partnerSleepSchedule: string;
  partnerSocialLife: string;
  partnerWantChildren: string;
  partnerOtherPreferences: string;
}

export interface PhotosGallery {
  profilePicture: string;
  galleryImages: string[];
}