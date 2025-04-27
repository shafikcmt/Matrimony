"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

// Mock data for UI demonstration
const mockProfiles = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    location: "New York",
    bio: "Love traveling and photography",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 32,
    location: "San Francisco",
    bio: "Tech enthusiast and coffee lover",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    name: "Emily Davis",
    age: 26,
    location: "London",
    bio: "Art curator and museum enthusiast",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

export default function DashboardPage() {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Discover Matches</h1>
      
      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <Card key={profile.id} className="p-4">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={profile.image} alt={profile.name} />
                <AvatarFallback>{profile.name[0]}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{profile.name}, {profile.age}</h2>
              <p className="text-gray-600">{profile.location}</p>
              <p className="text-sm mt-2">{profile.bio}</p>
              <div className="flex gap-2 mt-4">
                <Button variant="outline">Skip</Button>
                <Button>Connect</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center mt-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}
    </div>
  );
}
