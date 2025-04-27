"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Loader2, 
  CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BasicInfo } from "../components/BasicInfo";
import { PersonalDetails } from "../components/PersonalDetails";
import { EducationCareer } from "../components/EducationCareer";
import { FamilyDetails } from "../components/FamilyDetails";
import { Lifestyle } from "../components/Lifestyle";
import { PartnerPreferences } from "../components/PartnerPreferences";
import { ReviewSubmit } from "../components/ReviewSubmit";
import { PhotosGallery } from "../components/PhotosGallery";
import { useProfileBuilder } from "@/hooks/profile/useProfileBuilder";
import { useEffect } from "react";

// Form steps
const STEPS = [
  "Basic Info",
  "Personal Details",
  "Education & Career",
  "Family Background",
  "Lifestyle & Preferences",
  "Partner Preferences",
  "Photos & Gallery",
  "Review & Submit"
];

export default function ProfileBuildPage() {
  const {
    formData,
    currentStep,
    isLoading,
    error,
    reviewData,
    handleInputChange,
    handleNext,
    handlePrevious,
    handleSubmit
  } = useProfileBuilder();

  useEffect(() => {
    console.log("formData :", formData)
    console.log("reviewData :", reviewData)
  }, [formData, reviewData])


  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicInfo 
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            phoneNumber={formData.phoneNumber}
            gender={formData.gender}
            dateOfBirth={formData.dateOfBirth}
            onFirstNameChange={(value) => handleInputChange('firstName', value)}
            onLastNameChange={(value) => handleInputChange('lastName', value)}
            onEmailChange={(value) => handleInputChange('email', value)}
            onPhoneNumberChange={(value) => handleInputChange('phoneNumber', value)}
            onGenderChange={(value) => handleInputChange('gender', value)}
            onDateOfBirthChange={(value) => handleInputChange('dateOfBirth', value)}
          />
        );
        
      case 1:
        return (
          <PersonalDetails 
            height={formData.height}
            maritalStatus={formData.maritalStatus}
            religion={formData.religion}
            caste={formData.caste}
            community={formData.community}
            motherTongue={formData.motherTongue}
            onHeightChange={(value) => handleInputChange('height', value)}
            onMaritalStatusChange={(value) => handleInputChange('maritalStatus', value)}
            onReligionChange={(value) => handleInputChange('religion', value)}
            onCasteChange={(value) => handleInputChange('caste', value)}
            onCommunityChange={(value) => handleInputChange('community', value)}
            onMotherTongueChange={(value) => handleInputChange('motherTongue', value)}
          />
        );
        
      case 2:
        return (
          <EducationCareer 
            highestQualification={formData.highestQualification}
            fieldOfStudy={formData.fieldOfStudy}
            university={formData.university}
            yearOfPassing={formData.yearOfPassing}
            grade={formData.grade}
            occupation={formData.occupation}
            industry={formData.industry}
            company={formData.company}
            experience={formData.experience}
            income={formData.income}
            workLocation={formData.workLocation}
            achievements={formData.achievements}
            futurePlans={formData.futurePlans}
            onHighestQualificationChange={(value) => handleInputChange('highestQualification', value)}
            onFieldOfStudyChange={(value) => handleInputChange('fieldOfStudy', value)}
            onUniversityChange={(value) => handleInputChange('university', value)}
            onYearOfPassingChange={(value) => handleInputChange('yearOfPassing', value)}
            onGradeChange={(value) => handleInputChange('grade', value)}
            onOccupationChange={(value) => handleInputChange('occupation', value)}
            onIndustryChange={(value) => handleInputChange('industry', value)}
            onCompanyChange={(value) => handleInputChange('company', value)}
            onExperienceChange={(value) => handleInputChange('experience', value)}
            onIncomeChange={(value) => handleInputChange('income', value)}
            onWorkLocationChange={(value) => handleInputChange('workLocation', value)}
            onAchievementsChange={(value) => handleInputChange('achievements', value)}
            onFuturePlansChange={(value) => handleInputChange('futurePlans', value)}
          />
        );
        
      case 3:
        return (
          <FamilyDetails 
            fatherName={formData.fatherName}
            fatherOccupation={formData.fatherOccupation}
            motherName={formData.motherName}
            motherOccupation={formData.motherOccupation}
            siblings={formData.siblings}
            familyType={formData.familyType}
            familyValues={formData.familyValues}
            familyStatus={formData.familyStatus}
            familyLocation={formData.familyLocation}
            familyBackground={formData.familyBackground}
            familyPreferences={formData.familyPreferences}
            onFatherNameChange={(value) => handleInputChange('fatherName', value)}
            onFatherOccupationChange={(value) => handleInputChange('fatherOccupation', value)}
            onMotherNameChange={(value) => handleInputChange('motherName', value)}
            onMotherOccupationChange={(value) => handleInputChange('motherOccupation', value)}
            onSiblingsChange={(value) => handleInputChange('siblings', value)}
            onFamilyTypeChange={(value) => handleInputChange('familyType', value)}
            onFamilyValuesChange={(value) => handleInputChange('familyValues', value)}
            onFamilyStatusChange={(value) => handleInputChange('familyStatus', value)}
            onFamilyLocationChange={(value) => handleInputChange('familyLocation', value)}
            onFamilyBackgroundChange={(value) => handleInputChange('familyBackground', value)}
            onFamilyPreferencesChange={(value) => handleInputChange('familyPreferences', value)}
          />
        );
        
      case 4:
        return (
          <Lifestyle 
            diet={formData.diet}
            smoking={formData.smoking}
            drinking={formData.drinking}
            exercise={formData.exercise}
            sleepSchedule={formData.sleepSchedule}
            socialLife={formData.socialLife}
            hobbies={formData.hobbies}
            languages={formData.languages}
            travel={formData.travel}
            pets={formData.pets}
            otherPreferences={formData.otherPreferences}
            onDietChange={(value) => handleInputChange('diet', value)}
            onSmokingChange={(value) => handleInputChange('smoking', value)}
            onDrinkingChange={(value) => handleInputChange('drinking', value)}
            onExerciseChange={(value) => handleInputChange('exercise', value)}
            onSleepScheduleChange={(value) => handleInputChange('sleepSchedule', value)}
            onSocialLifeChange={(value) => handleInputChange('socialLife', value)}
            onHobbiesChange={(value) => handleInputChange('hobbies', value)}
            onLanguagesChange={(value) => handleInputChange('languages', value)}
            onTravelChange={(value) => handleInputChange('travel', value)}
            onPetsChange={(value) => handleInputChange('pets', value)}
            onOtherPreferencesChange={(value) => handleInputChange('otherPreferences', value)}
          />
        );
        
      case 5:
        return (
          <PartnerPreferences 
            ageRangeMin={formData.partnerAgeRange}
            ageRangeMax={formData.partnerAgeRange}
            heightRangeMin={formData.partnerHeightRange}
            heightRangeMax={formData.partnerHeightRange}
            maritalStatus={formData.partnerMaritalStatus}
            religion={formData.partnerReligion}
            caste={formData.partnerCaste}
            community={formData.partnerCommunity}
            motherTongue={formData.partnerMotherTongue}
            education={formData.partnerEducation}
            occupation={formData.partnerOccupation}
            income={formData.partnerIncome}
            location={formData.partnerLocation}
            diet={formData.partnerDiet}
            smoking={formData.partnerSmoking}
            drinking={formData.partnerDrinking}
            exercise={formData.partnerExercise}
            sleepSchedule={formData.partnerSleepSchedule}
            socialLife={formData.partnerSocialLife}
            wantChildren={formData.partnerWantChildren}
            otherPreferences={formData.partnerOtherPreferences}
            onAgeRangeMinChange={(value) => handleInputChange('partnerAgeRange', value)}
            onAgeRangeMaxChange={(value) => handleInputChange('partnerAgeRange', value)}
            onHeightRangeMinChange={(value) => handleInputChange('partnerHeightRange', value)}
            onHeightRangeMaxChange={(value) => handleInputChange('partnerHeightRange', value)}
            onMaritalStatusChange={(value) => handleInputChange('partnerMaritalStatus', value)}
            onReligionChange={(value) => handleInputChange('partnerReligion', value)}
            onCasteChange={(value) => handleInputChange('partnerCaste', value)}
            onCommunityChange={(value) => handleInputChange('partnerCommunity', value)}
            onMotherTongueChange={(value) => handleInputChange('partnerMotherTongue', value)}
            onEducationChange={(value) => handleInputChange('partnerEducation', value)}
            onOccupationChange={(value) => handleInputChange('partnerOccupation', value)}
            onIncomeChange={(value) => handleInputChange('partnerIncome', value)}
            onLocationChange={(value) => handleInputChange('partnerLocation', value)}
            onDietChange={(value) => handleInputChange('partnerDiet', value)}
            onSmokingChange={(value) => handleInputChange('partnerSmoking', value)}
            onDrinkingChange={(value) => handleInputChange('partnerDrinking', value)}
            onExerciseChange={(value) => handleInputChange('partnerExercise', value)}
            onSleepScheduleChange={(value) => handleInputChange('partnerSleepSchedule', value)}
            onSocialLifeChange={(value) => handleInputChange('partnerSocialLife', value)}
            onWantChildrenChange={(value) => handleInputChange('partnerWantChildren', value)}
            onOtherPreferencesChange={(value) => handleInputChange('partnerOtherPreferences', value)}
          />
        );
            
      case 6:
        return (
          <PhotosGallery 
            profilePicture={formData.profilePicture}
            galleryImages={formData.galleryImages}
            onProfilePictureChange={(value) => handleInputChange('profilePicture', value)}
            onGalleryImagesChange={(value) => handleInputChange('galleryImages', value)}
          />
        );
        
      case 7:
        return (
          <ReviewSubmit 
            basicInfo={reviewData.basicInfo}
            educationCareer={reviewData.educationCareer}
            familyDetails={reviewData.familyDetails}
            lifestyle={reviewData.lifestyle}
            partnerPreferences={reviewData.partnerPreferences}
            photosGallery={reviewData.photosGallery}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="py-8">
      <div className="px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Create Your Profile</h1>
          <div className="flex items-center justify-between">
            {STEPS.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${
                  index === currentStep
                    ? "text-primary"
                    : index < currentStep
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
              >
                <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
                  {index < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </span>
                <span className="ml-2 text-sm hidden md:inline">{step}</span>
                {index < STEPS.length - 1 && (
                  <div className="w-12 h-0.5 mx-2 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button 
              onClick={currentStep === STEPS.length - 1 ? handleSubmit : handleNext} 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  {currentStep === STEPS.length - 1 ? (
                    "Submit"
                  ) : (
                    <>
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
} 