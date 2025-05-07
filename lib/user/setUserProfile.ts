import { uploadImage } from '../storage/uploadImage';
import { supabase } from '../supabase';
import { UserProfileType } from '@/types/user';

const setUserProfile = async (
  profileData: UserProfileType,
  authId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const {
      firstName, lastName, email, phoneNumber, gender, dateOfBirth, aboutMe, isVerified,
      height, maritalStatus, religion, caste, community, motherTongue, wantChildren, address,
      highestQualification, fieldOfStudy, university, yearOfPassing, grade,
      occupation, industry, company, experience, income, workLocation, achievements, futurePlans,
      fatherName, fatherOccupation, motherName, motherOccupation, brothers, sisters,
      familyType, familyValues, familyStatus, familyLocation, familyBackground, familyPreferences, aboutFamily,
      diet, smoking, drinking, exercise, sleepSchedule, socialLife,
      hobbies, languages, travel, pets, otherPreferences,
      partnerAgeRangeMin, partnerAgeRangeMax,
      partnerHeightRangeMin, partnerHeightRangeMax,
      partnerMaritalStatus, partnerReligion, partnerCaste, partnerCommunity,
      partnerMotherTongue, partnerEducation, partnerOccupation, partnerIncome,
      partnerLocation, partnerDiet, partnerSmoking, partnerDrinking,
      partnerExercise, partnerSleepSchedule, partnerSocialLife,
      partnerWantChildren, partnerOtherPreferences,
      profilePicture, galleryImages
    } = profileData;

    // 1. Update or Insert into user_profiles
    const { error: profileError } = await supabase.from('user_profiles').upsert([{
      authId,
      firstName, lastName, email, phoneNumber: phoneNumber, gender, dateOfBirth, plan: null, aboutMe, isVerified,
    }], { onConflict: 'authId' });
    if (profileError) throw profileError;

    // 2. Update or Insert into user_personal
    const { error: personalError } = await supabase.from('user_personal').upsert([{
      authId,
      height, maritalStatus, religion, caste, community, motherTongue, wantChildren, address
    }], { onConflict: 'authId' });
    if (personalError) throw personalError;

    // 3. Update or Insert into user_career
    const { error: careerError } = await supabase.from('user_career').upsert([{
      authId,
      highestQualification, fieldOfStudy, university, yearOfPassing, grade,
      occupation, industry, company, experience, income, workLocation, achievements, futurePlans
    }], { onConflict: 'authId' });
    if (careerError) throw careerError;

    // 4. Update or Insert into user_family
    const { error: familyError } = await supabase.from('user_family').upsert([{
      authId,
      fatherName, fatherOccupation, motherName, motherOccupation, brothers, sisters,
      familyType, familyValues, familyStatus, familyLocation, familyBackground, familyPreferences, aboutFamily
    }], { onConflict: 'authId' });
    if (familyError) throw familyError;

    // 5. Update or Insert into user_lifestyle
    const { error: lifestyleError } = await supabase.from('user_lifestyle').upsert([{
      authId,
      diet, smoking, drinking, exercise, sleepSchedule, socialLife,
      hobbies, languages, travel, pets, otherPreferences
    }], { onConflict: 'authId' });
    if (lifestyleError) throw lifestyleError;

    // 6. Update or Insert into user_partner_preferences
    const { error: partnerError } = await supabase.from('user_partner_preferences').upsert([{
      authId,
      partnerAgeRangeMin, partnerAgeRangeMax,
      partnerHeightRangeMin, partnerHeightRangeMax,
      partnerMaritalStatus, partnerReligion, partnerCaste, partnerCommunity,
      partnerMotherTongue, partnerEducation, partnerOccupation, partnerIncome,
      partnerLocation, partnerDiet, partnerSmoking, partnerDrinking,
      partnerExercise, partnerSleepSchedule, partnerSocialLife,
      partnerWantChildren, partnerOtherPreferences
    }], { onConflict: 'authId' });
    if (partnerError) throw partnerError;

    // 7. Upload photos before inserting to gallery
    let profilePictureUrl = '';
    const galleryImageUrls: string[] = [];
    const username = `${firstName}-${lastName}`.replace(/\s+/g, '-');

    try {
      const profileFileName = `${username}-profile.jpg`;
      profilePictureUrl = await uploadImage(profileFileName, profilePicture);

      for (let i = 0; i < galleryImages.length; i++) {
        const galleryFileName = `${username}-gallery-${i + 1}.jpg`;
        const imgUrl = await uploadImage(galleryFileName, galleryImages[i]);
        galleryImageUrls.push(imgUrl);
      }
    } catch (uploadErr: any) {
      throw new Error('Photo upload failed: ' + uploadErr.message);
    }

    const { error: galleryError } = await supabase.from('user_photos_gallery').upsert([{
      authId,
      profilePicture: profilePictureUrl,
      galleryImages: galleryImageUrls
    }], { onConflict: 'authId' });
    if (galleryError) throw galleryError;

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
};

export default setUserProfile;