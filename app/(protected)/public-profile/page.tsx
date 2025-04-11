"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Phone, Quote, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userProfileSelector, loadingSelector } from "@/store/auth";

interface SimilarProfile {
  id: string;
  name: string;
  details: string;
  image: string;
}

const ProfileCard = () => {
  const userProfile = useRecoilValue(userProfileSelector);
  const loading = useRecoilValue(loadingSelector);
  const [similarProfiles, setSimilarProfiles] = useState<SimilarProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarProfiles = async () => {
      if (!userProfile) return;
      
      try {
        const response = await fetch('/api/matches/similar');
        if (response.ok) {
          const data = await response.json();
          setSimilarProfiles(data);
        }
      } catch (error) {
        console.error('Error fetching similar profiles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimilarProfiles();
  }, [userProfile]);

  // Show loading state while checking authentication or loading profile
  if (loading || !userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const profileDetails = [
    { 
      title: "About", 
      icon: Quote, 
      content: userProfile.introduction || "No introduction provided." 
    },
    { 
      title: "Basic Information", 
      icon: User, 
      content: [
        `Height: ${userProfile.preferredHeight || 'Not specified'}`,
        `Marital Status: ${userProfile.maritalStatus || 'Not specified'}`,
        `Annual Income: ${userProfile.annualSalary || 'Not specified'}`
      ].join(', ') 
    },
    { 
      title: "Present Address", 
      icon: MapPin, 
      content: [
        `Country: ${userProfile.country || 'Not specified'}`,
        `State: ${userProfile.state || 'Not specified'}`,
        `City: ${userProfile.city || 'Not specified'}`
      ].join(', ') 
    },
    { 
      title: "Education & Career", 
      icon: GraduationCap, 
      content: [
        `Religion: ${userProfile.religion || 'Not specified'}`,
        `Caste: ${userProfile.caste || 'Not specified'}`,
        `Community: ${userProfile.community || 'Not specified'}`
      ].join(', ') 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto"
    >
      <motion.div>
        <Card className="md:p-6 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Sidebar Section */}
            <div className="md:w-1/4 space-y-6">
              
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={userProfile.profileImage || "https://via.placeholder.com/300"}
                  alt="Profile"
                  className="w-full aspect-square object-cover rounded-lg mb-4 hover:brightness-110 transition-all duration-300"
                />
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    Member ID: <span className="text-accent">{userProfile.id}</span>
                  </p>
                  <h2 className="text-xl font-semibold mt-2">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
                </div>
              </motion.div>

              {/* Similar Profiles */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Similar Profiles</h2>
                <div className="space-y-4">
                  {similarProfiles.map((profile, idx) => (
                    <motion.div
                      key={profile.id}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={profile.image || "https://via.placeholder.com/300"} 
                          alt={profile.name} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{profile.name}</h3>
                        <p className="text-sm text-gray-600">{profile.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Main Content Section */}
            <div className="md:w-3/4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                
                {/* Profile Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-800">{`${userProfile.firstName} ${userProfile.lastName}`}</h1>
                  <p className="text-gray-600">Member ID: {userProfile.id}</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-gray-700">{userProfile.date_of_birth ? `${new Date().getFullYear() - new Date(userProfile.date_of_birth).getFullYear()} yrs` : 'Age not specified'}</div>
                    <div className="text-gray-700">{userProfile.maritalStatus || 'Not specified'}</div>
                    <div className="text-gray-700">{`${userProfile.religion}${userProfile.caste ? `, ${userProfile.caste}` : ''}`}</div>
                    <div className="text-gray-700">Lives in {userProfile.city || userProfile.state || userProfile.country || 'Location not specified'}</div>
                  </div>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="detailed-profile" className="w-full">
                  <TabsList className="w-full border-b">
                    {["detailed-profile", "partner-preference", "photo-gallery"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="flex-1 text-gray-600 hover:text-accent transition-colors duration-300"
                      >
                        {tab.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Detailed Profile Content */}
                  <TabsContent value="detailed-profile" className="mt-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {profileDetails.map((item, idx) => (
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

                  {/* Partner Preference */}
                  <TabsContent value="partner-preference">
                    <div className="mt-6 grid grid-cols-2 gap-4 text-gray-600">
                      <div>Age: {userProfile.preferredAge || 'Not specified'}</div>
                      <div>Height: {userProfile.preferredHeight || 'Not specified'}</div>
                      <div>Religion: {userProfile.preferredReligion || 'Not specified'}</div>
                      <div>Caste: {userProfile.preferredCaste || 'Not specified'}</div>
                      <div>Education: {userProfile.education || 'Not specified'}</div>
                      <div>Location: {userProfile.city || userProfile.state || userProfile.country || 'Not specified'}</div>
                    </div>
                  </TabsContent>

                  {/* Photo Gallery */}
                  <TabsContent value="photo-gallery">
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {userProfile.package?.features.find(f => f.name === 'galleryImageUpload')?.enabled ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={userProfile.profileImage || "https://via.placeholder.com/300"}
                            alt="Profile photo"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ) : (
                        <div className="col-span-3 text-center py-8 text-gray-500">
                          Upgrade your package to upload gallery images
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;