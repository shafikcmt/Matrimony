import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BasicInfoTypes, EducationCareerTypes, FamilyDetailsTypes, LifestylePreferencesTypes, PartnerPreferencesTypes, PersonalDetailsTypes, PhotosGalleryTypes } from "@/types/user";

interface ReviewSubmitProps {
  basicInfo: BasicInfoTypes;
  personalDetails: PersonalDetailsTypes;
  educationCareer: EducationCareerTypes;
  familyDetails: FamilyDetailsTypes;
  lifestyle: LifestylePreferencesTypes;
  partnerPreferences: PartnerPreferencesTypes;
  photosGallery: PhotosGalleryTypes;
}

export function ReviewSubmit({
  basicInfo,
  personalDetails,
  educationCareer,
  familyDetails,
  lifestyle,
  partnerPreferences,
  photosGallery,
}: ReviewSubmitProps) {
  const handleSubmit = () => {
    // Collect all data for submission
    const allData = {
      basicInfo,
      educationCareer,
      familyDetails,
      lifestyle,
      partnerPreferences,
      photosGallery
    };
    
    console.log("Submitting profile data:", allData);
    
    // Call the onSubmit handler if provided
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review & Submit</h2>
      <p className="text-gray-500">Please review your profile information before submitting</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Name</Label>
              <p>{basicInfo.firstName || "Not provided"} {basicInfo.lastName || "Not provided"}</p>
            </div>
            <div>
              <Label>Email</Label>
              <p>{basicInfo.email || "Not provided"}</p>
            </div>
            <div>
              <Label>Phone</Label>
              <p>{basicInfo.phone || "Not provided"}</p>
            </div>
            <div>
              <Label>Date of Birth</Label>
              <p>{basicInfo.dateOfBirth || "Not provided"}</p>
            </div>
            <div>
              <Label>Gender</Label>
              <p>{basicInfo.gender || "Not provided"}</p>
            </div>
            <div>
              <Label>Height</Label>
              <p>{personalDetails.height || "Not provided"}</p>
            </div>
            <div>
              <Label>Marital Status</Label>
              <p>{personalDetails.maritalStatus || "Not provided"}</p>
            </div>
            <div>
              <Label>Religion</Label>
              <p>{personalDetails.religion || "Not provided"}</p>
            </div>
            <div>
              <Label>Caste</Label>
              <p>{personalDetails.caste || "Not provided"}</p>
            </div>
            <div>
              <Label>Community</Label>
              <p>{personalDetails.community || "Not provided"}</p>
            </div>
            <div>
              <Label>Mother Tongue</Label>
              <p>{personalDetails.motherTongue || "Not provided"}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Education & Career</CardTitle>
            <CardDescription>Your professional details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Highest Qualification</Label>
              <p>{educationCareer.highestQualification || "Not provided"}</p>
            </div>
            <div>
              <Label>Field of Study</Label>
              <p>{educationCareer.fieldOfStudy || "Not provided"}</p>
            </div>
            <div>
              <Label>University</Label>
              <p>{educationCareer.university || "Not provided"}</p>
            </div>
            <div>
              <Label>Year of Passing</Label>
              <p>{educationCareer.yearOfPassing || "Not provided"}</p>
            </div>
            <div>
              <Label>Grade/Percentage</Label>
              <p>{educationCareer.grade || "Not provided"}</p>
            </div>
            <div>
              <Label>Occupation</Label>
              <p>{educationCareer.occupation || "Not provided"}</p>
            </div>
            <div>
              <Label>Industry</Label>
              <p>{educationCareer.industry || "Not provided"}</p>
            </div>
            <div>
              <Label>Company</Label>
              <p>{educationCareer.company || "Not provided"}</p>
            </div>
            <div>
              <Label>Years of Experience</Label>
              <p>{educationCareer.experience || "Not provided"}</p>
            </div>
            <div>
              <Label>Annual Income</Label>
              <p>{educationCareer.income || "Not provided"}</p>
            </div>
            <div>
              <Label>Work Location</Label>
              <p>{educationCareer.workLocation || "Not provided"}</p>
            </div>
            <div>
              <Label>Achievements</Label>
              <p>{educationCareer.achievements || "Not provided"}</p>
            </div>
            <div>
              <Label>Future Plans</Label>
              <p>{educationCareer.futurePlans || "Not provided"}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Family Details</CardTitle>
            <CardDescription>Your family background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Father's Name</Label>
              <p>{familyDetails.fatherName || "Not provided"}</p>
            </div>
            <div>
              <Label>Father's Occupation</Label>
              <p>{familyDetails.fatherOccupation || "Not provided"}</p>
            </div>
            <div>
              <Label>Mother's Name</Label>
              <p>{familyDetails.motherName || "Not provided"}</p>
            </div>
            <div>
              <Label>Mother's Occupation</Label>
              <p>{familyDetails.motherOccupation || "Not provided"}</p>
            </div>
            <div>
              <Label>Siblings</Label>
              <p>{familyDetails.brothers + familyDetails.sisters || "Not provided"}</p>
            </div>
            <div>
              <Label>Family Type</Label>
              <p>{familyDetails.familyType || "Not provided"}</p>
            </div>
            <div>
              <Label>Family Values</Label>
              <p>{familyDetails.familyValues || "Not provided"}</p>
            </div>
            <div>
              <Label>Family Status</Label>
              <p>{familyDetails.familyStatus || "Not provided"}</p>
            </div>
            <div>
              <Label>Family Location</Label>
              <p>{familyDetails.familyLocation || "Not provided"}</p>
            </div>
            <div>
              <Label>Family Background</Label>
              <p>{familyDetails.familyBackground || "Not provided"}</p>
            </div>
            <div>
              <Label>Family Preferences</Label>
              <p>{familyDetails.familyPreferences || "Not provided"}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Lifestyle</CardTitle>
            <CardDescription>Your lifestyle preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Diet</Label>
              <p>{lifestyle.diet || "Not provided"}</p>
            </div>
            <div>
              <Label>Smoking</Label>
              <p>{lifestyle.smoking || "Not provided"}</p>
            </div>
            <div>
              <Label>Drinking</Label>
              <p>{lifestyle.drinking || "Not provided"}</p>
            </div>
            <div>
              <Label>Exercise</Label>
              <p>{lifestyle.exercise || "Not provided"}</p>
            </div>
            <div>
              <Label>Sleep Schedule</Label>
              <p>{lifestyle.sleepSchedule || "Not provided"}</p>
            </div>
            <div>
              <Label>Social Life</Label>
              <p>{lifestyle.socialLife || "Not provided"}</p>
            </div>
            <div>
              <Label>Hobbies</Label>
              <p>{lifestyle.hobbies || "Not provided"}</p>
            </div>
            <div>
              <Label>Languages</Label>
              <p>{lifestyle.languages || "Not provided"}</p>
            </div>
            <div>
              <Label>Travel</Label>
              <p>{lifestyle.travel || "Not provided"}</p>
            </div>
            <div>
              <Label>Pets</Label>
              <p>{lifestyle.pets || "Not provided"}</p>
            </div>
            <div>
              <Label>Other Preferences</Label>
              <p>{lifestyle.otherPreferences || "Not provided"}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Partner Preferences</CardTitle>
            <CardDescription>Your partner preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Age Range</Label>
              <p>{partnerPreferences.partnerAgeRangeMin} - {partnerPreferences.partnerAgeRangeMax} years</p>
            </div>
            <div>
              <Label>Height Range</Label>
              <p>{partnerPreferences.partnerHeightRangeMin} - {partnerPreferences.partnerHeightRangeMax} cm</p>
            </div>
            <div>
              <Label>Marital Status</Label>
              <p>{partnerPreferences.partnerMaritalStatus || "Not provided"}</p>
            </div>
            <div>
              <Label>Religion</Label>
              <p>{partnerPreferences.partnerReligion || "Not provided"}</p>
            </div>
            <div>
              <Label>Caste</Label>
              <p>{partnerPreferences.partnerCaste || "Not provided"}</p>
            </div>
            <div>
              <Label>Community</Label>
              <p>{partnerPreferences.partnerCommunity || "Not provided"}</p>
            </div>
            <div>
              <Label>Mother Tongue</Label>
              <p>{partnerPreferences.partnerMotherTongue || "Not provided"}</p>
            </div>
            <div>
              <Label>Education</Label>
              <p>{partnerPreferences.partnerEducation || "Not provided"}</p>
            </div>
            <div>
              <Label>Occupation</Label>
              <p>{partnerPreferences.partnerOccupation || "Not provided"}</p>
            </div>
            <div>
              <Label>Income</Label>
              <p>{partnerPreferences.partnerIncome || "Not provided"}</p>
            </div>
            <div>
              <Label>Location</Label>
              <p>{partnerPreferences.partnerLocation || "Not provided"}</p>
            </div>
            <div>
              <Label>Diet</Label>
              <p>{partnerPreferences.partnerDiet || "Not provided"}</p>
            </div>
            <div>
              <Label>Smoking</Label>
              <p>{partnerPreferences.partnerSmoking || "Not provided"}</p>
            </div>
            <div>
              <Label>Drinking</Label>
              <p>{partnerPreferences.partnerDrinking || "Not provided"}</p>
            </div>
            <div>
              <Label>Exercise</Label>
              <p>{partnerPreferences.partnerExercise || "Not provided"}</p>
            </div>
            <div>
              <Label>Sleep Schedule</Label>
              <p>{partnerPreferences.partnerSleepSchedule || "Not provided"}</p>
            </div>
            <div>
              <Label>Social Life</Label>
              <p>{partnerPreferences.partnerSocialLife || "Not provided"}</p>
            </div>
            <div>
              <Label>Want Children</Label>
              <p>{partnerPreferences.partnerWantChildren || "Not provided"}</p>
            </div>
            <div>
              <Label>Other Preferences</Label>
              <p>{partnerPreferences.partnerOtherPreferences || "Not provided"}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Photos & Gallery</CardTitle>
            <CardDescription>Your profile pictures</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Profile Picture</Label>
              {photosGallery.profilePicture ? (
                <div className="mt-2">
                  <img 
                    src={photosGallery.profilePicture} 
                    alt="Profile" 
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
              ) : (
                <p>Not provided</p>
              )}
            </div>
            <div>
              <Label>Gallery Images</Label>
              {photosGallery.galleryImages && photosGallery.galleryImages.length > 0 ? (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {photosGallery.galleryImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-60 object-cover rounded"
                    />
                  ))}
                </div>
              ) : (
                <p>Not provided</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}