"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Mail, Phone, MapPin, Calendar, Heart } from "lucide-react";

// Mock data for UI demonstration
const mockProfile = {
  id: "1",
  firstName: "Sarah",
  lastName: "Johnson",
  age: 28,
  location: "New York, USA",
  occupation: "Software Engineer",
  education: "Master's in Computer Science",
  bio: "Passionate about technology and travel. Love exploring new places and meeting new people.",
  interests: ["Technology", "Travel", "Photography", "Cooking"],
  profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
  galleryImages: [
    "https://source.unsplash.com/random/400x300?travel",
    "https://source.unsplash.com/random/400x300?nature",
    "https://source.unsplash.com/random/400x300?city"
  ]
};

export default function PublicProfilePage() {
  const [profile] = useState(mockProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setError(null);
    }, 1000);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image and Basic Info */}
          <div className="flex flex-col items-center md:w-1/3">
            <Avatar className="w-48 h-48 mb-4">
              <AvatarImage src={profile.profileImage} alt={`${profile.firstName} ${profile.lastName}`} />
              <AvatarFallback>{profile.firstName[0]}{profile.lastName[0]}</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">{profile.firstName} {profile.lastName}, {profile.age}</h1>
            <p className="text-gray-600">{profile.occupation}</p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button 
                onClick={handleConnect}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Heart className="w-4 h-4 mr-2" />
                )}
                Connect
              </Button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span>{profile.education}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">About</h3>
                <p className="text-gray-600">{profile.bio}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {profile.galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}