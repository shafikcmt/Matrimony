"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { dummyProfileData } from "./data/dummyProfileData";
import {
  BasicInfoTypes,
  PersonalDetailsTypes,
  EducationCareerTypes,
  FamilyDetailsTypes,
  LifestylePreferencesTypes,
  PartnerPreferencesTypes,
  PhotosGalleryTypes
} from "@/types/user";
import ProfileHeader from "./components/ProfileHeader";
import ProfileBasicInfoCard from "./components/ProfileBasicInfo";
import ProfilePersonalDetailsCard from "./components/ProfilePersonalInfo";
import ProfileEducationCard from "./components/ProfileEducation";
import ProfileFamilyCard from "./components/ProfileFamily";
import ProfileLifestyleCard from "./components/ProfileLifestyle";
import ProfilePartnerPreferencesCard from "./components/ProfilePrefrences";
import ProfilePhotosCard from "./components/ProfilePhotos";
import SimilarProfilesCard from "./components/SimilarProfilesCard";
import { useProfileStore } from "@/state/profile";
// Mock data for UI demonstration
const mockProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "+1 234 567 8900",
  dateOfBirth: "1990-01-01",
  gender: "Male",
  location: "New York, USA",
  bio: "Software developer with a passion for technology and travel.",
  profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [basicInfo, setBasicInfo] = useState<BasicInfoTypes>(dummyProfileData);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsTypes>(dummyProfileData);
  const [educationCareer, setEducationCareer] = useState<EducationCareerTypes>(dummyProfileData);
  const [familyDetails, setFamilyDetails] = useState<FamilyDetailsTypes>(dummyProfileData);
  const [lifestyle, setLifestyle] = useState<LifestylePreferencesTypes>(dummyProfileData);
  const [partnerPreferences, setPartnerPreferences] = useState<PartnerPreferencesTypes>(dummyProfileData);
  const [photosGallery, setPhotosGallery] = useState<PhotosGalleryTypes>(dummyProfileData);

  const profileData = useProfileStore(store => store.basicInfo); // data yu ayega

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setError(null);
    }, 1000);
  };

  return (
    <div className="w-[80vw] mx-auto py-6 px-6 lg:px-8">
      <ProfileHeader
        name={`${basicInfo.firstName} ${basicInfo.lastName}`}
        age={getAge(basicInfo.dateOfBirth)}
        location={personalDetails.address}
        isVerified={basicInfo.isVerified}
        profileViews={0}
        imageUrl={photosGallery.profilePicture}
      />

      <Tabs defaultValue="profile" className="mt-8">
        <TabsList className="">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="interests">Interests</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">

          <div className="flex gap-6 justify-between">
            <div className="w-[70%] flex flex-col gap-6">
              <ProfileBasicInfoCard basicInfo={basicInfo} setBasicInfo={setBasicInfo} familyInfo={familyDetails} setFamilyInfo={setFamilyDetails} />
              <ProfileEducationCard educationCareer={educationCareer} setEducationCareer={setEducationCareer} />
              <ProfilePartnerPreferencesCard partnerPreferences={partnerPreferences} setPartnerPreferences={setPartnerPreferences} />
            </div>
            <div className="w-[30%] flex flex-col gap-6">
              <ProfilePersonalDetailsCard personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
              <ProfileLifestyleCard lifestyle={lifestyle} setLifestyle={setLifestyle} />
              <ProfileFamilyCard familyDetails={familyDetails} setFamilyDetails={setFamilyDetails} />
              <SimilarProfilesCard />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="images">
          <div className="mt-6">
            {/* Image gallery content will go here */}
            <ProfilePhotosCard photosGallery={photosGallery} setPhotosGallery={setPhotosGallery} />
          </div>
        </TabsContent>

        <TabsContent value="interests">
          <div className="mt-6">
            {/* Interests content will go here */}
          </div>
        </TabsContent>

        <TabsContent value="timeline">
          <div className="mt-6">
            {/* Timeline content will go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function getAge(dateOfBirth: string): number {
  if (!dateOfBirth) return 0;
  const dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) return 0;
  const diffMs = Date.now() - dob.getTime();
  const ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}
