"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import useAuthStore from "@/state/authState";
import useGetProfileData from "@/hooks/profile/useGetProfileData";

export default function ProfilePage() {
  const authId = useAuthStore((state) => state.authId);
  const { fetchProfile, error, success } = useGetProfileData();

  // Get profile data from store
  const basicInfo = useProfileStore((s) => s.basicInfo);
  const personalDetails = useProfileStore((s) => s.personalDetails);
  const photosGallery = useProfileStore((s) => s.photosGallery);

  useEffect(() => {
    if (authId) {
      fetchProfile(authId);
    }
  }, [authId]);

  // Show loading indicator if data is not loaded
  if (!success && !error) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="animate-spin w-8 h-8 mr-2 text-accent" />
        <span>Loading profile...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-accent">
        Error loading profile: {error}
      </div>
    );
  }

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
              <ProfileBasicInfoCard />
              <ProfileEducationCard />
              <ProfilePartnerPreferencesCard />
            </div>
            <div className="w-[30%] flex flex-col gap-6">
              <ProfilePersonalDetailsCard />
              <ProfileLifestyleCard />
              <ProfileFamilyCard />
              <SimilarProfilesCard />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="images">
          <div className="mt-6">
            <ProfilePhotosCard />
          </div>
        </TabsContent>

        <TabsContent value="interests">
          <div className="mt-6">
            {/* Interests content will go here */}
          </div>
        </TabsContent>

        <TabsContent value="timeline">
          <div className="mt-6">
            {/* Timeline contentbasicInfo={basicInfo} setBasicInfo={setBasicInfo} familyInfo={familyDetails} setFamilyInfo={setFamilyDetails}  will go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function getAge(dob: string): number {
  if (!dob) return 0;
  const date = new Date(dob);
  if (isNaN(date.getTime())) return 0;
  const diffMs = Date.now() - date.getTime();
  const ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}
