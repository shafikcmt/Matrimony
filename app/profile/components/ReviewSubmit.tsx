import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ReviewSubmitProps {
  basicInfo: {
    name: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    height: string;
    maritalStatus: string;
    religion: string;
    caste: string;
    community: string;
    motherTongue: string;
  };
  educationCareer: {
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
  };
  familyDetails: {
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
  };
  lifestyle: {
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
  };
  partnerPreferences: {
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
  };
  photosGallery: {
    profilePicture: string;
    galleryImages: string[];
  };
  onSubmit?: () => void;
}

export function ReviewSubmit({
  basicInfo,
  educationCareer,
  familyDetails,
  lifestyle,
  partnerPreferences,
  photosGallery,
  onSubmit
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
    if (onSubmit) {
      onSubmit();
    }
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
              <p>{basicInfo.name || "Not provided"}</p>
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
              <p>{basicInfo.height || "Not provided"}</p>
            </div>
            <div>
              <Label>Marital Status</Label>
              <p>{basicInfo.maritalStatus || "Not provided"}</p>
            </div>
            <div>
              <Label>Religion</Label>
              <p>{basicInfo.religion || "Not provided"}</p>
            </div>
            <div>
              <Label>Caste</Label>
              <p>{basicInfo.caste || "Not provided"}</p>
            </div>
            <div>
              <Label>Community</Label>
              <p>{basicInfo.community || "Not provided"}</p>
            </div>
            <div>
              <Label>Mother Tongue</Label>
              <p>{basicInfo.motherTongue || "Not provided"}</p>
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
              <p>{familyDetails.siblings || "Not provided"}</p>
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
              <p>{partnerPreferences.partnerAgeRange || "Not provided"}</p>
            </div>
            <div>
              <Label>Height Range</Label>
              <p>{partnerPreferences.partnerHeightRange || "Not provided"}</p>
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
                      className="w-full h-24 object-cover rounded"
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
      
      <div className="flex justify-end mt-6">
        <Button onClick={handleSubmit} className="px-6">
          Submit Profile
        </Button>
      </div>
    </div>
  );
}