"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Phone, Eye, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRecoilValue } from "recoil";
import { userSelector, loadingSelector, errorSelector, userProfileSelector } from "@/store/auth";

// Types
interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  height: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  profileImage: string;
}

// Mock package data for demonstration
const mockPackage = {
  name: "Premium",
  expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
  features: [
    { name: "Unlimited Profile Views", enabled: true },
    { name: "Direct Contact", enabled: true },
    { name: "Advanced Search", enabled: true },
    { name: "Profile Highlight", enabled: false },
  ],
  stats: {
    remainingInterest: 50,
    remainingContactView: 20,
    profileViewerView: 100,
    galleryImageUpload: 5,
  }
};

// API functions
const fetchProfiles = async ({ pageParam = 1 }) => {
  const response = await fetch(`/api/matches?page=${pageParam}&limit=5`);
  if (!response.ok) {
    throw new Error('Failed to fetch profiles');
  }
  const data = await response.json();
  return {
    profiles: data.profiles,
    nextPage: data.nextPage,
    hasMore: data.hasMore
  };
};

const Dashboard = () => {
  const user = useRecoilValue(userSelector);
  const userProfile = useRecoilValue(userProfileSelector);
  const isLoading = useRecoilValue(loadingSelector);
  const error = useRecoilValue(errorSelector);
  const { ref, inView } = useInView();

  // Fetch profiles with infinite scroll
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error: queryError
  } = useInfiniteQuery({
    queryKey: ['profiles'],
    queryFn: fetchProfiles,
    getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 1,
  });

  // Load more profiles when scrolling to bottom
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error || queryError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error?.message || (queryError instanceof Error ? queryError.message : 'An error occurred')}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Please log in to view your dashboard.</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-gray-50 min-h-screen"
    >
      <h1 className="text-4xl font-bold text-center text-accent mb-8">
        User Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {Object.entries(mockPackage.stats).map(([key, value], index) => {
          const icons = {
            remainingInterest: CheckCircle,
            remainingContactView: Phone,
            profileViewerView: Eye,
            galleryImageUpload: ImageIcon
          };
          const labels = {
            remainingInterest: "Remaining Interest",
            remainingContactView: "Remaining Contact View",
            profileViewerView: "Profile Viewer View",
            galleryImageUpload: "Gallery Image Upload"
          };
          const Icon = icons[key as keyof typeof icons];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-all"
            >
              <Icon className={`w-10 h-10 mb-3 ${index === 2 ? 'text-red-500' : 'text-green-500'}`} />
              <h2 className="text-2xl font-bold">{value}</h2>
              <p className="text-gray-500">{labels[key as keyof typeof labels]}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Package Info */}
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
            <h4 className="text-lg font-semibold">{mockPackage.name}</h4>

            <ul className="text-gray-600 mt-4 space-y-2 w-full">
              {mockPackage.features.map((feature, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: feature.enabled ? "#22c55e" : "#ef4444" }}
                  transition={{ duration: 0.1 }}
                  className="cursor-pointer transition-all flex items-center gap-2"
                >
                  {feature.enabled ? "✔️" : "❌"} {feature.name}
                </motion.li>
              ))}
            </ul>

            <p className="text-red-500 mt-4">
              Package expiry date:{" "}
              <span className="font-bold">
                {new Date(mockPackage.expiryDate).toLocaleDateString()}
              </span>
            </p>

            <Button
              className="w-50 mt-4 bg-green-500 text-white hover:bg-green-600 transition-all transform hover:scale-105"
              onClick={() => toast.info("Package upgrade coming soon!")}
            >
              Upgrade Package
            </Button>
          </div>
        </motion.div>

        {/* Matched Profiles */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Matched Profiles</h3>
            <div className="space-y-4">
              <AnimatePresence>
                {data?.pages.map((page, i) => (
                  <React.Fragment key={i}>
                    {page.profiles.map((profile: Profile) => (
                      <motion.div
                        key={profile.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.1 }}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-all cursor-pointer"
                      >
                        <Image
                          src={profile.profileImage || "https://via.placeholder.com/60"}
                          alt={`${profile.firstName} ${profile.lastName}`}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{`${profile.firstName} ${profile.lastName}`}</h4>
                          <p className="text-gray-500 text-sm">
                            {profile.dateOfBirth ? `${new Date().getFullYear() - new Date(profile.dateOfBirth).getFullYear()} yrs` : 'Age not specified'}, 
                            {profile.height ? `, ${profile.height}` : ''}, 
                            {profile.maritalStatus}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {profile.religion}{profile.caste ? `, ${profile.caste}` : ''}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))}
              </AnimatePresence>
              <div ref={ref} className="h-10" />
              {isFetchingNextPage && (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
