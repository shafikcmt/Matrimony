"use client";

import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Phone, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function MemberProfilePage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto animate-fade-in">
        <Card className="md:p-6 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={'/images/default-avatar.png'}
                  alt={'profile.full_name'}
                  className="w-full aspect-square object-cover rounded-lg mb-4 hover:brightness-110 transition-all duration-300"
                />
                <div className="text-center">
                  <p className="text-gray-600 text-sm">Member ID: <span className="text-accent">1234567890</span></p>
                  <h2 className="text-xl font-semibold mt-2">John Doe</h2>
                </div>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
                  <p className="text-gray-600">Member ID: 1234567890</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="text-gray-700">Age: {calculateAge('1990-01-01')} years</div>
                    <div className="text-gray-700">Gender: Male</div>
                    <div className="text-gray-700">Religion: Hindu</div>
                    <div className="text-gray-700">Caste: Brahmin</div>
                    <div className="text-gray-700">Education: Bachelor's Degree</div>
                    <div className="text-gray-700">Occupation: Software Engineer</div>
                    <div className="text-gray-700">Income: ₹100,000</div>
                    <div className="text-gray-700">Location: Mumbai, Maharashtra</div>
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
                        { title: "About", icon: Quote, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                        { title: "Basic Information", icon: User, content: `Age: ${calculateAge('1990-01-01')} years, Gender: Male, Religion: Hindu, Caste: Brahmin, Education: Bachelor's Degree, Occupation: Software Engineer, Income: ₹100,000, Location: Mumbai, Maharashtra` },
                        { title: "Present Address", icon: MapPin, content: `Mumbai, Maharashtra` },
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
                            src={'/images/default-avatar.png'}
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