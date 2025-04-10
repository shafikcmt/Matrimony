"use client";
"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MembersPage() {
  const members = [
    { id: 1, name: "Sarah Johnson", age: 28, location: "New York, USA", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3", occupation: "Software Engineer" },
    { id: 2, name: "Michael Chen", age: 32, location: "San Francisco, USA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3", occupation: "Doctor" },
    { id: 3, name: "Emily Davis", age: 27, location: "London, UK", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3", occupation: "Marketing Manager" },
    { id: 4, name: "Daniel Carter", age: 35, location: "Toronto, Canada", image: "https://images.unsplash.com/photo-1522091066250-665186289043?ixlib=rb-4.0.3", occupation: "Graphic Designer" },
    { id: 5, name: "Olivia Martinez", age: 30, location: "Madrid, Spain", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3", occupation: "Data Analyst" },
    { id: 6, name: "James Lee", age: 29, location: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3", occupation: "UX Designer" },
];


  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-accent">Active Members</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              >
                <Heart className="h-5 w-5 text-accent" />
              </Button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.occupation}</p>
              
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{member.location}</span>
              </div>
              
              <div className="flex items-center gap-4 mt-6">
                <Link href={`/members/${member.id}`} className="flex-1">
                  <Button className="bg-accent hover:bg-accent/90 w-full">
                    View Profile
                  </Button>
                </Link>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
