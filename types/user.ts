export type UserProfileType = BasicInfoTypes &
  PersonalDetailsTypes &
  EducationCareerTypes &
  FamilyDetailsTypes &
  LifestylePreferencesTypes &
  PartnerPreferencesTypes &
  PhotosGalleryTypes & {
  };

export interface BasicInfoTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  plan: string;
}

export interface PersonalDetailsTypes {
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  community: string;
  motherTongue: string;
  wantChildren: string;
}

export interface EducationCareerTypes {
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

export interface FamilyDetailsTypes {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  familyLocation: string;
  familyBackground: string;
  familyPreferences: string;
}

export interface LifestylePreferencesTypes {
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

export interface PartnerPreferencesTypes {
  partnerAgeRangeMin: string;
  partnerAgeRangeMax: string;
  partnerHeightRangeMin: string;
  partnerHeightRangeMax: string;
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

export interface PhotosGalleryTypes {
  profilePicture: string;
  galleryImages: string[];
}
