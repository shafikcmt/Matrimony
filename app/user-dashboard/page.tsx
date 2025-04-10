"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Eye, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const profiles = [
  { name: "Mark Henry", age: 32, height: "5 Feet", status: "Never Married", religion: "Islam", caste: "Shia", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Liam Noah", age: 34, height: "5 Feet", status: "Married", religion: "Hinduism", caste: "Brahmin", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Mitchell Johnson", age: 34, height: "5 Feet", status: "Never Married", religion: "Judaism", caste: "Israelites", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Robert L. Gardner", age: 32, height: "5 Feet", status: "Never Married", religion: "Judaism", caste: "Israelites", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Wilson Arnold", age: 32, height: "5 Feet", status: "Never Married", religion: "Judaism", caste: "Israelites", img: "https://randomuser.me/api/portraits/men/5.jpg" }
];
const features = [
  "✔️ 40 Express Interests",
  "✔️ 50 Gallery Photo Upload",
  "✔️ 10 Contact Info View",
  "❌ 0 Profile Viewer View",
  "✔️ Show Auto Profile Match",
];

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-gray-50 min-h-screen"
    >
      <h1 className="text-2xl font-semibold text-center text-accent">
        User Dashboard  
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: CheckCircle, color: "text-green-500", value: "829", label: "Remaining Interest" },
          { icon: Phone, color: "text-yellow-500", value: "575", label: "Remaining Contact View" },
          { icon: Eye, color: "text-red-500", value: "0", label: "Profile Viewer View" },
          { icon: ImageIcon, color: "text-blue-500", value: "825", label: "Gallery Image Upload" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-all"
          >
            <stat.icon className={`${stat.color} w-10 h-10 mb-3`} />
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p className="text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Current Package */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">Current Package</h3>

          <div className="flex flex-col items-center">
            <ShieldCheck className="text-gray-500 w-12 h-12 mb-4" />
            <h4 className="text-lg font-semibold">Silver Package</h4>

            <ul className="text-gray-600 mt-4 space-y-2">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "#22c55e" }}
                  transition={{ duration: 0.1 }}
                  className="cursor-pointer transition-all"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <p className="text-red-500 mt-4">
              Package expiry date: <span className="font-bold">Expired</span>
            </p>

            <Button
              className="w-50 mt-4 bg-green-500 text-white hover:bg-green-600 transition-all transform hover:scale-105"
            >
              Upgrade Package
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">

          {/* Verified Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg p-6 rounded-lg flex justify-center items-center"
          >
            <div className="text-center">
              <div className="flex justify-center">
                <Image src="/verified.png" alt="Verified" width={100} height={100} className="mx-auto" />
              </div>
            </div>
          </motion.div>

          {/* Matched Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="bg-white shadow-lg p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Matched profile</h3>
            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-all cursor-pointer"
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
