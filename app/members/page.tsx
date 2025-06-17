"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartIcon, Loader2, MessageCircleIcon, StarIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define the UserProfile type
interface UserProfile {
  id: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  age?: number;
  date_of_birth?: string;
  created_at: string;
  gender?: string;
  location?: string;
  occupation?: string;
  education?: string;
  height?: string;
  religion?: string;
  caste?: string;
  about?: string;
  interests?: string[];
  isOnline?: boolean;
  isPremium?: boolean;
  matchPercentage?: number;
}

export default function MembersPage() {
  const [members, setMembers] = useState<UserProfile[]>([
    {
      id: "1",
      full_name: "John Doe",
      avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
      phone: "+1 (555) 123-4567",
      date_of_birth: "1990-05-15",
      age: 30,
      created_at: "2023-01-10",
      gender: "Male",
      location: "New York, USA",
      occupation: "Software Engineer",
      education: "Masters in Computer Science",
      height: "5'11\"",
      religion: "Hindu",
      caste: "Brahmin",
      about: "Looking for a life partner who shares similar values and interests. I enjoy traveling, reading, and spending time outdoors.",
      interests: ["Travel", "Reading", "Hiking", "Photography"],
      isOnline: true,
      isPremium: false,
      matchPercentage: 85
    },
    {
      id: "2",
      full_name: "Jane Smith",
      avatar_url: "https://randomuser.me/api/portraits/women/2.jpg",
      phone: "+1 (555) 987-6543",
      date_of_birth: "1988-11-22",
      age: 34,
      created_at: "2023-02-15",
      gender: "Female",
      location: "London, UK",
      occupation: "Doctor",
      education: "MBBS, MD",
      height: "5'6\"",
      religion: "Hindu",
      caste: "Vaishya",
      about: "A compassionate doctor seeking a partner who values family and personal growth. I love cooking and classical music.",
      interests: ["Cooking", "Classical Music", "Yoga", "Charity Work"],
      isOnline: false,
      isPremium: true,
      matchPercentage: 83
    },
    {
      id: "3",
      full_name: "Michael Johnson",
      avatar_url: "https://randomuser.me/api/portraits/men/3.jpg",
      phone: "+1 (555) 456-7890",
      date_of_birth: "1992-08-30",
      created_at: "2023-03-20"
    },
    {
      id: "4",
      full_name: "Emily Davis",
      avatar_url: "https://randomuser.me/api/portraits/women/4.jpg",
      phone: "+1 (555) 234-5678",
      date_of_birth: "1995-04-12",
      created_at: "2023-04-05"
    },
    {
      id: "5",
      full_name: "Robert Wilson",
      avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1 (555) 876-5432",
      date_of_birth: "1987-09-25",
      created_at: "2023-05-18"
    },
    {
      id: "6",
      full_name: "Sarah Brown",
      avatar_url: "https://randomuser.me/api/portraits/women/6.jpg",
      phone: "+1 (555) 345-6789",
      date_of_birth: "1993-07-08",
      created_at: "2023-06-22"
    }
  ]);

  const handleLike = (memberId: string) => {
    // Implement like functionality
    console.log(`Liked member ${memberId}`);
  };

  const handleMessage = (memberId: string) => {
    // Implement message functionality
    console.log(`Message member ${memberId}`);
  };

  const handleIgnore = (memberId: string) => {
    // Implement ignore functionality
    console.log(`Ignored member ${memberId}`);
  };

  return (
    <div className="mx-auto p-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Match</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="relative rounded-xl shadow-lg overflow-hidden bg-white flex flex-col justify-between">
            {/* Profile Image with Badges */}
            <div className="relative">
              <Image src={member.avatar_url || ""} alt={member.full_name} className="w-full h-56 object-cover" height={1920} width={1080}/>
              {/* Online Badge */}
              {member.isOnline && (
                <span className="absolute top-3 left-3 bg-green-600/80 text-white text-xs px-3 py-1 rounded-full shadow">
                  Online
                </span>
              )}
              {/* Premium Badge */}
              {member.isPremium && (
                <span className="absolute top-3 right-3 bg-yellow-500/90 text-white text-xs px-3 py-1 rounded-full shadow">
                  Premium
                </span>
              )}
            </div>
            {/* Name, Age, Location, Match */}
            <div className="flex items-center justify-between px-4 pt-4">
              <div>
                <h2 className="font-bold text-lg">{member.full_name}{member.age ? `, ${member.age}` : ''}</h2>
                <p className="text-gray-500 text-sm">{member.location}</p>
              </div>
              {member.matchPercentage && (
                <span className="bg-white/80 text-pink-600 font-semibold px-3 py-1 rounded-full shadow text-sm">
                  {member.matchPercentage}% <span className="text-gray-500 font-normal">match</span>
                </span>
              )}
            </div>
            {/* Profession & Education */}
            <div className="px-4 py-2">
              <div className="text-sm"><span className="font-semibold">Profession:</span> {member.occupation}</div>
              <div className="text-sm"><span className="font-semibold">Education:</span> {member.education}</div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-between px-4 pb-4 pt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleLike(member.id)}
                      className="bg-pink-100 text-pink-600 font-semibold p-4 rounded-full flex items-center justify-center gap-2 border border-pink-200"
                    >
                      <HeartIcon className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Like</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleMessage(member.id)}
                      className="bg-blue-100 text-blue-600 font-semibold p-4 rounded-full flex items-center justify-center gap-2 border border-blue-200"
                    >
                      <MessageCircleIcon className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Message</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleIgnore(member.id)}
                      className="bg-gray-100 text-gray-600 font-semibold p-4 rounded-full flex items-center justify-center gap-2 border border-gray-200"
                    >
                      <StarIcon className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Shortlist</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 