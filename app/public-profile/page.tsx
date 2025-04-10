"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Phone, Quote } from "lucide-react";
import { motion } from "framer-motion";

const ProfileCard = () => {
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
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  alt="Profile"
                  className="w-full aspect-square object-cover rounded-lg mb-4 hover:brightness-110 transition-all duration-300"
                />
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    Member ID: <span className="text-accent">E0EE4E4D</span>
                  </p>
                  <h2 className="text-xl font-semibold mt-2">Donna J. Perryman</h2>
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
                  {[
                    {
                      name: "Mark Henry",
                      details: "32 yrs, 5 Feet, Never Married, Islam, Shia",
                      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                    },
                    {
                      name: "Robert L. Gardner",
                      details: "32 yrs, 5 Feet, Never Married, Judaism",
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    }
                  ].map((profile, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={profile.image} 
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
                  <h1 className="text-3xl font-bold text-gray-800">Donna J. Perryman</h1>
                  <p className="text-gray-600">Member ID: E0EE4E4D</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-gray-700">32 yrs, 5</div>
                    <div className="text-gray-700">Never Married</div>
                    <div className="text-gray-700">Islam, Sunni</div>
                    <div className="text-gray-700">Lives in Belarus</div>
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
                        {tab.replace("-", " ")}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Detailed Profile Content */}
                  <TabsContent value="detailed-profile" className="mt-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {[
                        { title: "About", icon: Quote, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { title: "Basic Information", icon: User, content: `Height: 5'5\", Weight: 54kg, Marital Status: Never Married` },
                        { title: "Present Address", icon: MapPin, content: "Country: Belarus, State: Minsk, City: Minsk" },
                        { title: "Education", icon: GraduationCap, content: "Master's Degree in Computer Science" },
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

                  {/* Partner Preference */}
                  <TabsContent value="partner-preference">
                    <div className="mt-6 grid grid-cols-2 gap-4 text-gray-600">
                      <div>Age: 28-35 years</div>
                      <div>Height: 5'8" - 6'2"</div>
                      <div>Religion: Islam</div>
                      <div>Education: Bachelor's or higher</div>
                      <div>Occupation: Any Professional</div>
                      <div>Location: Any</div>
                    </div>
                  </TabsContent>

                  {/* Photo Gallery */}
                  <TabsContent value="photo-gallery">
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb`}
                            alt={`Gallery photo ${i}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
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
