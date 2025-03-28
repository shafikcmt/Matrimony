"use client";
import React from "react";
import { CheckCircle, Phone, Eye, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Dummy matched profile data
const profiles = [
  { name: "Liam Noah", age: 34, height: "5 Feet", status: "Married", religion: "Hinduism", caste: "Brahmin", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Mark Henry", age: 32, height: "5 Feet", status: "Never Married", religion: "Islam", caste: "Shia", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Mitchell Johnson", age: 32, height: "5 Feet", status: "Never Married", religion: "Judaism", caste: "Israelites", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Robert L. Gardner", age: 32, height: "5 Feet", status: "Never Married", religion: "Judaism", caste: "Israelites", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Wilson Arnold", age: 32, height: "5 Feet", status: "Never Married", religion: "Judaism", caste: "Israelites", img: "https://randomuser.me/api/portraits/men/5.jpg" }
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        
        {/* Stat Cards */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
          <CheckCircle className="text-green-500 w-8 h-8 mb-2" />
          <h2 className="text-2xl font-bold">789</h2>
          <p className="text-gray-500">Remaining Interest</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
          <Phone className="text-yellow-500 w-8 h-8 mb-2" />
          <h2 className="text-2xl font-bold">565</h2>
          <p className="text-gray-500">Remaining Contact View</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
          <Eye className="text-red-500 w-8 h-8 mb-2" />
          <h2 className="text-2xl font-bold">0</h2>
          <p className="text-gray-500">Remaining Profile Viewer View</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
          {/* <Image className="text-pink-500 w-8 h-8 mb-2" /> */}
          <h2 className="text-2xl font-bold">775</h2>
          <p className="text-gray-500">Remaining Gallery Image Upload</p>
        </div>
      </div>

      {/* Packages Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Current Package */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Current Package</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShieldCheck className="text-blue-500 w-12 h-12 mr-4" />
              <div>
                <h4 className="text-lg font-semibold">Platinum Package</h4>
                <ul className="text-gray-600 mt-2">
                  <li>✔️ 500 Express Interests</li>
                  <li>✔️ 500 Gallery Photo Upload</li>
                  <li>✔️ 500 Contact Info View</li>
                  <li>❌ 0 Profile Viewer View</li>
                  <li>✔️ Show Auto Profile Match</li>
                </ul>
                <p className="text-red-500 mt-2">Package expiry date: <span className="font-bold">Expired</span></p>
              </div>
            </div>
          </div>
          <Button className="w-full mt-4 bg-green-500 text-white hover:bg-green-600">
            Upgrade Package
          </Button>
        </div>

        {/* Verified Badge */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-center items-center">
          <div className="text-center">
            <Image
              src="https://www.svgrepo.com/show/330175/verified.svg"
              alt="Verified"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-yellow-500 text-lg font-bold mt-2">VERIFIED</p>
          </div>
        </div>

        {/* Matched Profiles */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Matched profile</h3>
          <div className="space-y-4">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition"
              >
                <Image
                  src={profile.img}
                  alt={profile.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{profile.name}</h4>
                  <p className="text-gray-500 text-sm">{profile.age} yrs, {profile.height}, {profile.status}</p>
                  <p className="text-gray-500 text-sm">{profile.religion}, {profile.caste}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
