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
import { BasicInfo } from "./components/BasicInfo";
import { PersonalDetails } from "./components/PersonalDetails";
import { EducationCareer } from "./components/EducationCareer";
import { FamilyDetails } from "./components/FamilyDetails";
import { Lifestyle } from "./components/Lifestyle";
import { PartnerPreferences } from "./components/PartnerPreferences";
import { ReviewSubmit } from "./components/ReviewSubmit";
import { PhotosGallery } from "./components/PhotosGallery";
import { useProfileBuilder } from "@/hooks/profile/useProfileBuilder";


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
    currentStep,
    isLoading,
    handleNext,
    handlePrevious,
    basicInfo,
    setBasicInfo,
    personalDetails,
    setPersonalDetails,
    educationCareer,
    setEducationCareer,
    familyDetails,
    setFamilyDetails,
    lifestyle,
    setLifestyle,
    partnerPreferences,
    setPartnerPreferences,
    photosGallery,
    setPhotosGallery,
    handleSubmit
  } = useProfileBuilder();

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicInfo 
            basicInfo={basicInfo}
            setBasicInfo={setBasicInfo}
          />
        );
        
      case 1:
        return (
          <PersonalDetails 
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
        );
        
      case 2:
        return (
          <EducationCareer 
            educationCareer={educationCareer}
            setEducationCareer={setEducationCareer}
          />
        );
        
      case 3:
        return (
          <FamilyDetails 
            familyDetails={familyDetails}
            setFamilyDetails={setFamilyDetails}
          />
        );
        
      case 4:
        return (
          <Lifestyle 
            lifestyle={lifestyle}
            setLifestyle={setLifestyle}
          />
        );
        
      case 5:
        return (
          <PartnerPreferences 
            partnerPreferences={partnerPreferences}
            setPartnerPreferences={setPartnerPreferences}
          />
        );
            
      case 6:
        return (
          <PhotosGallery 
            photosGallery={photosGallery}
            setPhotosGallery={setPhotosGallery}
          />
        );
        
      case 7:
        return (
          <ReviewSubmit 
            basicInfo={basicInfo}
            personalDetails={personalDetails}
            educationCareer={educationCareer}
            familyDetails={familyDetails}
            lifestyle={lifestyle}
            partnerPreferences={partnerPreferences}
            photosGallery={photosGallery} 
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