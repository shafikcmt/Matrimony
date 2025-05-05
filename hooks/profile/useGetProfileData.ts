import { useProfileStore } from "@/state/profile";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { UserProfileType } from "@/types/user";

const useGetProfileData = () => {
  const setProfile = useProfileStore((state) => state.setProfile);
  const setBasicInfo = useProfileStore((state) => state.setBasicInfo);
  const setPersonalDetails = useProfileStore((state) => state.setPersonalDetails);
  const setEducationCareer = useProfileStore((state) => state.setEducationCareer);
  const setFamilyDetails = useProfileStore((state) => state.setFamilyDetails);
  const setLifestylePreferences = useProfileStore((state) => state.setLifestylePreferences);
  const setPartnerPreferences = useProfileStore((state) => state.setPartnerPreferences);
  const setPhotosGallery = useProfileStore((state) => state.setPhotosGallery);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const fetchProfile = async (authId: string): Promise<{ success: boolean; error?: string }> => {
    setError(null);
    setSuccess(false);

    try {
      if (!authId) throw new Error("Auth ID not available");

      const fetchTable = async (table: string) => {
        const { data, error } = await supabase
          .from(table)
          .select("*")
          .eq("authId", authId)
          .single();

        if (error) throw error;
        return data;
      };

      const [
        profile,
        personal,
        career,
        family,
        lifestyle,
        partnerPrefs,
        gallery
      ] = await Promise.all([
        fetchTable("user_profiles"),
        fetchTable("user_personal"),
        fetchTable("user_career"),
        fetchTable("user_family"),
        fetchTable("user_lifestyle"),
        fetchTable("user_partner_preferences"),
        fetchTable("user_photos_gallery"),
      ]);

      const fullProfile: UserProfileType = {
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        email: profile.email || "",
        phone: profile.phoneNumber || "",
        gender: profile.gender || "",
        dob: profile.dob || "",
        plan: profile.plan || "",

        height: personal.height || "",
        maritalStatus: personal.maritalStatus || "",
        religion: personal.religion || "",
        caste: personal.caste || "",
        community: personal.community || "",
        motherTongue: personal.motherTongue || "",
        wantChildren: personal.wantChildren || "",

        highestQualification: career.highestQualification || "",
        fieldOfStudy: career.fieldOfStudy || "",
        university: career.university || "",
        yearOfPassing: career.yearOfPassing || "",
        grade: career.grade || "",
        occupation: career.occupation || "",
        industry: career.industry || "",
        company: career.company || "",
        experience: career.experience || "",
        income: career.income || "",
        workLocation: career.workLocation || "",
        achievements: career.achievements || "",
        futurePlans: career.futurePlans || "",

        fatherName: family.fatherName || "",
        fatherOccupation: family.fatherOccupation || "",
        motherName: family.motherName || "",
        motherOccupation: family.motherOccupation || "",
        brothers: family.brothers || "",
        sisters: family.sisters || "",
        familyType: family.familyType || "",
        familyValues: family.familyValues || "",
        familyStatus: family.familyStatus || "",
        familyLocation: family.familyLocation || "",
        familyBackground: family.familyBackground || "",
        familyPreferences: family.familyPreferences || "",

        diet: lifestyle.diet || "",
        smoking: lifestyle.smoking || "",
        drinking: lifestyle.drinking || "",
        exercise: lifestyle.exercise || "",
        sleepSchedule: lifestyle.sleepSchedule || "",
        socialLife: lifestyle.socialLife || "",
        hobbies: lifestyle.hobbies || "",
        languages: lifestyle.languages || "",
        travel: lifestyle.travel || "",
        pets: lifestyle.pets || "",
        otherPreferences: lifestyle.otherPreferences || "",

        partnerAgeRangeMin: partnerPrefs.partnerAgeRangeMin || "",
        partnerAgeRangeMax: partnerPrefs.partnerAgeRangeMax || "",
        partnerHeightRangeMin: partnerPrefs.partnerHeightRangeMin || "",
        partnerHeightRangeMax: partnerPrefs.partnerHeightRangeMax || "",
        partnerMaritalStatus: partnerPrefs.partnerMaritalStatus || "",
        partnerReligion: partnerPrefs.partnerReligion || "",
        partnerCaste: partnerPrefs.partnerCaste || "",
        partnerCommunity: partnerPrefs.partnerCommunity || "",
        partnerMotherTongue: partnerPrefs.partnerMotherTongue || "",
        partnerEducation: partnerPrefs.partnerEducation || "",
        partnerOccupation: partnerPrefs.partnerOccupation || "",
        partnerIncome: partnerPrefs.partnerIncome || "",
        partnerLocation: partnerPrefs.partnerLocation || "",
        partnerDiet: partnerPrefs.partnerDiet || "",
        partnerSmoking: partnerPrefs.partnerSmoking || "",
        partnerDrinking: partnerPrefs.partnerDrinking || "",
        partnerExercise: partnerPrefs.partnerExercise || "",
        partnerSleepSchedule: partnerPrefs.partnerSleepSchedule || "",
        partnerSocialLife: partnerPrefs.partnerSocialLife || "",
        partnerWantChildren: partnerPrefs.partnerWantChildren || "",
        partnerOtherPreferences: partnerPrefs.partnerOtherPreferences || "",

        profilePicture: gallery.profilePicture || "",
        galleryImages: gallery.galleryImages || [],
      };

      setProfile(fullProfile);
      setBasicInfo(fullProfile);
      setPersonalDetails(fullProfile);
      setEducationCareer(fullProfile);
      setFamilyDetails(fullProfile);
      setLifestylePreferences(fullProfile);
      setPartnerPreferences(fullProfile);
      setPhotosGallery(fullProfile);

      setSuccess(true);
      return { success: true };
    } catch (err: any) {
      const message = err.message || "Failed to fetch profile data";
      setError(message);
      setSuccess(false);
      return { success: false, error: message };
    }
  };

  return { fetchProfile, error, success };
};

export default useGetProfileData;