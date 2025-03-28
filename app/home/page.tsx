"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Users, Shield, Gift, MessageCircle } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-r from-primary/90 to-primary flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3"
            alt="Hero background"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="container mx-auto z-10 px-4 flex justify-center items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Match
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join millions of people finding their life partner through our platform
            </p>
            
            <Card className="p-6 bg-white/95 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select defaultValue="looking">
                  <SelectTrigger>
                    <SelectValue placeholder="I'm looking for" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="looking">I'm looking for</SelectItem>
                    <SelectItem value="bride">Bride</SelectItem>
                    <SelectItem value="groom">Groom</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="age">
                  <SelectTrigger>
                    <SelectValue placeholder="Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="age">Age</SelectItem>
                    {[...Array(43)].map((_, i) => (
                      <SelectItem key={i} value={String(18 + i)}>
                        {18 + i} years
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select defaultValue="religion">
                  <SelectTrigger>
                    <SelectValue placeholder="Religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="religion">Religion</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="buddhist">Buddhist</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Search className="w-4 h-4 mr-2" /> Search
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">All profiles are manually verified for authenticity</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Privacy Control</h3>
              <p className="text-gray-600">Your privacy is our top priority</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
              <p className="text-gray-600">Connect with matches through our secure messaging system</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Gift className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Special Features</h3>
              <p className="text-gray-600">Access exclusive features to find your perfect match</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={`https://images.unsplash.com/photo-152764744940${i}-87d4cb3db31b?ixlib=rb-4.0.3`}
                  alt={`Success story ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sarah & John</h3>
                  <p className="text-gray-600 mb-4">
                    "We found each other here and couldn't be happier. Thank you for helping us find true love!"
                  </p>
                  <div className="flex items-center text-primary">
                    <Heart className="w-4 h-4 mr-2" />
                    <span>Married on June 2024</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Soulmate?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of happy couples who found their perfect match
          </p>
          <Button size="lg" variant="secondary" className="text-primary">
            Create Free Profile
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage; 