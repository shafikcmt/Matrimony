"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import { UserProfileType } from "@/types/user";

interface PhotosGalleryProps {
  profilePicture: string;
  galleryImages: string[];
  onProfilePictureChange: (value: string) => void;
  onGalleryImagesChange: (value: string[]) => void;
}

export function PhotosGallery({
  profilePicture,
  galleryImages,
  onProfilePictureChange,
  onGalleryImagesChange,
}: PhotosGalleryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Photos & Gallery</h2>
      <p className="text-gray-500">Upload your photos to make your profile stand out</p>
      
      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="w-32 h-32">
              <AvatarImage src={profilePicture || "https://via.placeholder.com/150"} />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
              <Upload className="w-4 h-4" />
            </div>
          </div>
          <div>
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <p className="text-sm text-gray-500">Upload a clear, recent photo of yourself</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Gallery Photos</Label>
          <p className="text-sm text-gray-500">Upload up to 5 photos to showcase your personality</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 