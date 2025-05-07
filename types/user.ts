import {
  Gender,
  Plan,
  MaritalStatus,
  Religion,
  FamilyType,
  FamilyValues,
  FamilyStatus,
  Diet,
  Habits,
  Exercise,
  SleepSchedule,
  SocialLife,
  Travel,
  Pets,
  Education,
  Industry
} from "./enums";

export type UserProfileType = BasicInfoTypes &
  PersonalDetailsTypes &
  EducationCareerTypes &
  FamilyDetailsTypes &
  LifestylePreferencesTypes &
  PartnerPreferencesTypes &
  PhotosGalleryTypes;

export interface BasicInfoTypes {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  dateOfBirth: string;
  plan: Plan;
  aboutMe: string;
  isVerified: boolean;
}

export interface PersonalDetailsTypes {
  height: string;
  maritalStatus: MaritalStatus;
  religion: Religion;
  caste: string;
  community: string;
  motherTongue: string;
  wantChildren: string;
  address: string;
}

export interface EducationCareerTypes {
  highestQualification: Education;
  fieldOfStudy: string;
  university: string;
  yearOfPassing: string;
  grade: string;
  occupation: string;
  industry: Industry;
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
  familyType: FamilyType;
  familyValues: FamilyValues;
  familyStatus: FamilyStatus;
  familyLocation: string;
  familyBackground: string;
  familyPreferences: string;
  aboutFamily: string;
}

export interface LifestylePreferencesTypes {
  diet: Diet;
  smoking: Habits;
  drinking: Habits;
  exercise: Exercise;
  sleepSchedule: SleepSchedule;
  socialLife: SocialLife;
  hobbies: string;
  languages: string;
  travel: Travel;
  pets: Pets;
  otherPreferences: string;
}

export interface PartnerPreferencesTypes {
  partnerAgeRangeMin: string;
  partnerAgeRangeMax: string;
  partnerHeightRangeMin: string;
  partnerHeightRangeMax: string;
  partnerMaritalStatus: MaritalStatus;
  partnerReligion: Religion;
  partnerCaste: string;
  partnerCommunity: string;
  partnerMotherTongue: string;
  partnerEducation: Education;
  partnerOccupation: string;
  partnerIncome: string;
  partnerLocation: string;
  partnerDiet: Diet;
  partnerSmoking: Habits;
  partnerDrinking: Habits;
  partnerExercise: Exercise;
  partnerSleepSchedule: SleepSchedule;
  partnerSocialLife: SocialLife;
  partnerWantChildren: string;
  partnerOtherPreferences: string;
}

export interface PhotosGalleryTypes {
  profilePicture: string;
  galleryImages: string[];
}
