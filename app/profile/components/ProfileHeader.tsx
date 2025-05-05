
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  name: string;
  age: number;
  location: string;
  isVerified: boolean;
  profileViews: number;
  imageUrl: string;
}

const ProfileHeader = ({
  name,
  age,
  location,
  isVerified,
  profileViews,
  imageUrl
}: ProfileHeaderProps) => {
  return (
    <div className="relative w-full mb-6 animate-fade-in">
      {/* Cover Photo / Background */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-pink-100 to-pink-200 rounded-t-xl"></div>
      
      {/* Profile Information */}
      <div className="px-6 relative pb-5">
        {/* Profile Image */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 md:left-10 md:translate-x-0">
          <div className="relative">
            <img 
              src={imageUrl}
              alt={`${name}'s profile`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
            />
            {isVerified && (
              <Badge className="absolute bottom-2 right-2 bg-pink-500 text-white">Verified</Badge>
            )}
          </div>
        </div>
        
        {/* Name and Basic Info */}
        <div className="mt-24 md:mt-4 md:ml-44 text-center md:text-left pl-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{name}, {age}</h1>
              <p className="text-gray-600">{location}</p>
              <p className="text-sm text-gray-500 mt-1">{profileViews} profile views</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-end">
              <Button className="bg-pink-400 hover:bg-pink-500">
                <MessageCircle className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-500 hover:bg-pink-50">
                <Heart className="mr-2 h-4 w-4" />
                Interest
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-b border-gray-200"></div>
    </div>
  );
};

export default ProfileHeader;