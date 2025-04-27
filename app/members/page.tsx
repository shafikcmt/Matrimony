"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartIcon, Loader2, MessageCircleIcon, XIcon } from "lucide-react";
import { useState } from "react";

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
      interests: ["Travel", "Reading", "Hiking", "Photography"]
    },
    {
      id: "2",
      full_name: "Jane Smith",
      avatar_url: "https://randomuser.me/api/portraits/women/2.jpg",
      phone: "+1 (555) 987-6543",
      date_of_birth: "1988-11-22",
      created_at: "2023-02-15",
      gender: "Female",
      location: "London, UK",
      occupation: "Doctor",
      education: "MBBS, MD",
      height: "5'6\"",
      religion: "Hindu",
      caste: "Vaishya",
      about: "A compassionate doctor seeking a partner who values family and personal growth. I love cooking and classical music.",
      interests: ["Cooking", "Classical Music", "Yoga", "Charity Work"]
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className="container mx-auto p-8 bg-gradient-to-br from-[#fcd5ce] via-[#d0bfff] to-[#f0c8ff]">
      <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Match</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="bg-white/30 rounded-2xl backdrop-blur-md shadow-xl border border-white/20 p-4">
            <CardHeader className="relative">
              <div className="relative">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.avatar_url || undefined} className="object-cover" />
                  <AvatarFallback className="text-2xl">{member.full_name?.charAt(0) || '?'}</AvatarFallback>
                </Avatar>
                {/* <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  Online
                </div> */}
              </div>
              <div className="text-center">
                <CardTitle className="text-xl">{member.full_name || 'Anonymous'}</CardTitle>
                <p className="text-sm text-gray-500">
                  {member.age} years • {member.location}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-t border-white/40"></div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Occupation:</span>
                  <span>{member.occupation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Education:</span>
                  <span>{member.education}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Religion:</span>
                  <span>{member.religion}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Caste:</span>
                  <span>{member.caste}</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 line-clamp-3">{member.about}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {member.interests?.map((interest, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="flex justify-evenly mt-4 pt-4 border-t border-white/40">
                  <button
                    onClick={() => handleMessage(member.id)}
                    className="p-4 rounded-full bg-blue-400 text-white"
                  >
                    <MessageCircleIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleLike(member.id)}
                    className="p-4 rounded-full bg-pink-400 text-white"
                  >
                    <HeartIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleIgnore(member.id)}
                    className="p-4 rounded-full bg-gray-400 text-white"
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 