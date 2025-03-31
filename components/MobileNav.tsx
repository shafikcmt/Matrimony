"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRecoilValue } from 'recoil';
import { userSelector } from '@/store/auth';

const publicLinks = [
  { path: "/", name: "HOME" },
  { path: "/members", name: "ACTIVE MEMBERS" },
  { path: "/plans", name: "PREMIUM PLANS" },
  { path: "/stories", name: "HAPPY STORIES" },
  { path: "/contact", name: "CONTACT US" },
];

const authLinks = [
  { path: "/dashboard", name: "DASHBOARD" },
  { path: "/members", name: "ACTIVE MEMBERS" },
  { path: "/plans", name: "PREMIUM PLANS" },
  { path: "/stories", name: "HAPPY STORIES" },
  { path: "/contact", name: "CONTACT US" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userSelector);

  const links = user ? authLinks : publicLinks;

  return (
    <Sheet>
      <SheetTrigger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <nav className="flex flex-col gap-4 mt-10">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`text-gray-700 hover:text-accent font-medium px-4 py-2 ${
                pathname === link.path ? "text-accent border-b-2 border-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <SheetClose>{link.name}</SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
