"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "HOME" },
  { path: "/members", name: "ACTIVE MEMBERS" },
  { path: "/plans", name: "PREMIUM PLANS" },
  { path: "/stories", name: "HAPPY STORIES" },
  { path: "/contact", name: "CONTACT US" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 lg:gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
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
