"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Bell, Mail, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useRecoilValue } from 'recoil'
import { userSelector, userProfileSelector, useAuthActions } from '@/store/auth'
import { User as SupabaseUser } from '@supabase/supabase-js'
import DropDownSheet from "./DropDownSheet";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useRecoilValue(userSelector) as SupabaseUser | null;
  const profile = useRecoilValue(userProfileSelector);
  const { signOut } = useAuthActions();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1C1F2A] text-gray-200 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-sm">Welcome to Heavenly Match</span>
          <div className="flex items-center gap-4">
            <span className="text-sm hidden md:inline">Help Line +01 112 352 666</span>
            <div className="flex items-center gap-3">
              <Bell className="md:w-6 w-4 md:h-6 h-4 hover:text-accent cursor-pointer" />
              <Mail className="md:w-6 w-4 md:h-6 h-4 hover:text-accent cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-accent text-xl sm:text-3xl font-bold flex items-center gap-2">
                <Heart className="md:w-8 w-6 md:h-8 h-6 fill-accent cursor-pointer" />
                HeavenlyMatch
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Nav />
              <div className="flex items-center gap-3">
                {user ? (
                  <DropDownSheet/>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="outline" className="text-accent hover:text-accent/90 text-sm">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button variant="destructive" className="bg-accent hover:bg-accent/90">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-3">
              {user ? (
                <DropDownSheet/>
              ) : (
                <Button variant="outline" className="text-accent hover:text-accent/90 text-sm shadow-md">
                  Login
                </Button>
              )}
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
