"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import useAuthStore from "@/state/authState";
import useGetProfileData from "@/hooks/profile/useGetProfileData";
import { useToast } from "@/hooks/use-toast";
import GenderEnum from "@/constants/genderEnum";
import { useProfileStore } from "@/state/profile";

const ClientAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const authState = useAuthStore((state) => state);
  const setAuthStore = useAuthStore((state) => state.setAuthState);
  const profile = useProfileStore((state) => state.profile);
  const { fetchProfile } = useGetProfileData();

  const shouldRunAuth = pathname === "/" || pathname.startsWith("/profile");

  useEffect(() => {
    const init = async () => {
      if (!shouldRunAuth) return;
      
      if (authState.authId && profile?.firstName) return;
      
      setIsLoading(true);
      
      const { data, error } = await supabase.auth.getSession();
      const session = data?.session;
      
      if (!session) {
        router.push("/auth/login");
        setIsLoading(false);
        return;
      }
      
      const user = session.user;
      
      setAuthStore({
        authId: user.id || "",
        role: user.aud || "anon",
        dob: user.user_metadata?.dob || "",
        email: user.user_metadata?.email || "",
        firstName: user.user_metadata?.firstName || "",
        lastName: user.user_metadata?.lastName || "",
        gender: user.user_metadata?.gender as GenderEnum || GenderEnum.MALE,
        phoneNumber: user.user_metadata?.phoneNumber || "",
        autoAuthRefresh: {
          token: session.access_token || "",
          refreshToken: session.refresh_token || ""
        }
      });

      const { success, error: profileError } = await fetchProfile(user.id);

      if (!success) {
        toast.toast({
          title: "Error",
          description: profileError,
          variant: "destructive",
        });
        router.push("/auth/login");
      } else {
        router.push("/profile");
      }

      setIsLoading(false);
    };

    init();
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="w-[100dvw] h-[100dvh] flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default ClientAuthWrapper;