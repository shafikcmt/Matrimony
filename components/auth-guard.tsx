"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userSelector, loadingSelector } from "@/store/auth";

const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/public-profile",
  "/matches",
  "/messages",
  "/settings",
  "/packages",
  "/payment",
  "/payment-history",
  "/profile-verification",
  "/profile-completion",
  "/profile-edit",
  "/profile-photos",
  "/profile-documents",
  "/profile-preferences",
  "/profile-privacy",
  "/profile-notifications",
  "/profile-security",
  "/profile-delete",
  "/profile-logout",
  "/profile-password",
  "/profile-email",
  "/profile-phone",
  "/profile-address",
  "/profile-education",
  "/profile-career",
  "/profile-family",
  "/profile-lifestyle",
  "/profile-hobbies",
  "/profile-interests",
  "/profile-about",
  "/profile-partner-preferences",
  "/profile-photo-gallery",
  "/profile-documents",
  "/profile-verification",
  "/profile-completion",
  "/profile-edit",
  "/profile-photos",
  "/profile-documents",
  "/profile-preferences",
  "/profile-privacy",
  "/profile-notifications",
  "/profile-security",
  "/profile-delete",
  "/profile-logout",
  "/profile-password",
  "/profile-email",
  "/profile-phone",
  "/profile-address",
  "/profile-education",
  "/profile-career",
  "/profile-family",
  "/profile-lifestyle",
  "/profile-hobbies",
  "/profile-interests",
  "/profile-about",
  "/profile-partner-preferences",
  "/profile-photo-gallery",
];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useRecoilValue(userSelector);
  const loading = useRecoilValue(loadingSelector);

  useEffect(() => {
    // Store the current URL in sessionStorage for redirection after login
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
      sessionStorage.setItem("redirectUrl", pathname);
    }

    // Only redirect if we're not loading and there's no user
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router, pathname]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not authenticated, don't render children (will redirect in useEffect)
  if (!user) {
    return null;
  }

  // If authenticated, render children
  return <>{children}</>;
} 