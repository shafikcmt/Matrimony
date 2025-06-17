'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon, MessageCircleIcon, EyeIcon, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'

const stats = [
  { icon: <EyeIcon className="w-6 h-6 text-pink-500" />, label: "Profile Views", value: 245 },
  { icon: <HeartIcon className="w-6 h-6 text-pink-500" />, label: "Matches", value: 18 },
  { icon: <StarIcon className="w-6 h-6 text-pink-500" />, label: "Interests", value: 32 },
  { icon: <MessageCircleIcon className="w-6 h-6 text-pink-500" />, label: "Conversations", value: 8 },
]

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

const MiddleCard = () => {
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
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
    };
    const handleNext = () => {
      setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
    };

  return (
    <div className="w-full flex flex-col gap-2 justify-between">
      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow flex flex-col items-center py-4">
            {stat.icon}
            <div className="text-2xl font-bold mt-2">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Suggested Matches */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Suggested Matches</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm hover:bg-gray-200">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={handlePrev} aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100" onClick={handleNext} aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Single Card */}
        {members.length > 0 && (
          <Card key={members[currentIndex].id} className="relative rounded-xl shadow-lg overflow-hidden bg-white flex flex-col justify-between mb-4 max-w-md mx-auto">
            {/* Profile Image with Badges */}
            <div className="relative">
              <Image src={members[currentIndex].avatar_url || ""} alt={members[currentIndex].full_name} className="w-full h-56 object-cover" height={224} width={224}/>
              {/* Online Badge */}
              {members[currentIndex].isOnline && (
                <span className="absolute top-3 left-3 bg-green-600/80 text-white text-xs px-3 py-1 rounded-full shadow">
                  Online
                </span>
              )}
              {/* Premium Badge */}
              {members[currentIndex].isPremium && (
                <span className="absolute top-3 right-3 bg-yellow-500/90 text-white text-xs px-3 py-1 rounded-full shadow">
                  Premium
                </span>
              )}
            </div>
            {/* Name, Age, Location, Match */}
            <div className="flex items-center justify-between px-4 pt-4">
              <div>
                <h2 className="font-bold text-lg">{members[currentIndex].full_name}{members[currentIndex].age ? `, ${members[currentIndex].age}` : ''}</h2>
                <p className="text-gray-500 text-sm">{members[currentIndex].location}</p>
              </div>
              {members[currentIndex].matchPercentage && (
                <span className="bg-white/80 text-pink-600 font-semibold px-3 py-1 rounded-full shadow text-sm">
                  {members[currentIndex].matchPercentage}% <span className="text-gray-500 font-normal">match</span>
                </span>
              )}
            </div>
            {/* Profession & Education */}
            <div className="px-4 py-2">
              <div className="text-sm"><span className="font-semibold">Profession:</span> {members[currentIndex].occupation}</div>
              <div className="text-sm"><span className="font-semibold">Education:</span> {members[currentIndex].education}</div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-between px-4 pb-4 pt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
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
        )}
        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-8 rounded-full shadow transition-all duration-200">
            View More Matches
          </button>
        </div>
      </div>
    </div>
  )
}

export default MiddleCard