"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userSelector } from "@/store/auth";

const publicLinks = [
  { path: "/", name: "HOME" },
  { path: "/members", name: "MEMBERS" },
  { path: "/stories", name: "SUCCESS STORIES" },
  { path: "/plans", name: "PLANS" },
  { path: "/contact", name: "CONTACT" },
];

const authLinks = [
  { path: "/dashboard", name: "DASHBOARD" },
  { path: "/public-profile", name: "MY PROFILE" },
  { path: "/images", name: "MY IMAGES" },
  { path: "/settings", name: "SETTINGS" },
  { path: "/members", name: "BROWSE MEMBERS" },
];

const Nav = () => {
  const pathname = usePathname();
  const user = useRecoilValue(userSelector);

  const links = user ? authLinks : publicLinks;

  return (
    <nav className="flex gap-6 lg:gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`text-gray-700 hover:text-accent font-medium text-sm lg:text-base ${
            pathname === link.path ? "text-accent border-b-2 border-accent" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
