"use client";

import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Phone, Quote } from "lucide-react";
import { dummyProfiles } from '@/data/profiles'
import { UserProfile } from '@/types/auth'

export default function MemberProfilePage() {
  const params = useParams()
  const memberId = params.id as string

  const profile = dummyProfiles.find(p => p.id === memberId)

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500">Profile not found</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto animate-fade-in">
        <Card className="md:p-6 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={profile.avatar_url || '/images/default-avatar.png'}
                  alt={profile.full_name}
                  className="w-full aspect-square object-cover rounded-lg mb-4 hover:brightness-110 transition-all duration-300"
                />
                <div className="text-center">
                  <p className="text-gray-600 text-sm">Member ID: <span className="text-accent">{profile.id}</span></p>
                  <h2 className="text-xl font-semibold mt-2">{profile.full_name}</h2>
                </div>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-800">{profile.full_name}</h1>
                  <p className="text-gray-600">Member ID: {profile.id}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="text-gray-700">Age: {calculateAge(profile.date_of_birth)} years</div>
                    <div className="text-gray-700">Gender: {profile.gender}</div>
                    <div className="text-gray-700">Religion: {profile.religion}</div>
                    <div className="text-gray-700">Caste: {profile.caste}</div>
                    <div className="text-gray-700">Education: {profile.education}</div>
                    <div className="text-gray-700">Occupation: {profile.occupation}</div>
                    <div className="text-gray-700">Income: ₹{profile.income}</div>
                    <div className="text-gray-700">Location: {profile.city}, {profile.state}</div>
                  </div>
                </div>

                <Tabs defaultValue="detailed-profile" className="w-full">
                  <TabsList className="w-full border-b">
                    {["detailed-profile", "photo-gallery"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="flex-1 text-gray-600 hover:text-accent transition-colors duration-300"
                      >
                        {tab.replace("-", " ")}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="detailed-profile">
                    <Accordion type="single" collapsible className="space-y-4">
                      {[
                        { title: "About", icon: Quote, content: profile.about },
                        { title: "Basic Information", icon: User, content: `Age: ${calculateAge(profile.date_of_birth)} years, Gender: ${profile.gender}, Religion: ${profile.religion}, Caste: ${profile.caste}, Education: ${profile.education}, Occupation: ${profile.occupation}, Income: ₹${profile.income}, Location: ${profile.city}, ${profile.state}` },
                        { title: "Present Address", icon: MapPin, content: `${profile.city}, ${profile.state}` },
                      ].map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg">
                          <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 transition-colors duration-300">
                            <div className="flex items-center gap-3">
                              <item.icon className="w-5 h-5" />
                              <span>{item.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3 text-gray-600">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="photo-gallery">
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div 
                          key={i} 
                          className="aspect-square rounded-lg overflow-hidden hover:scale-105 hover:brightness-110 transition-all duration-300"
                        >
                          <img
                            src={profile.avatar_url || '/images/default-avatar.png'}
                            alt={`Gallery photo ${i}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function calculateAge(dateOfBirth: string): number {
  const today = new Date()
  const birthDate = new Date(dateOfBirth)
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
} 