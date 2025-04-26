"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Settings, Users, Heart, LogOut, Handshake, House, BookHeart, Images, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const allLinks = [
    { icon: BookHeart, label: "Public Profile", link: "/public-profile" },
    { icon: House, label: "Dashboard", link: "/dashboard" },
    { icon: Users, label: "Members", link: "/members" },
    { icon: Images, label: "Gallery", link: "/images" },
    { icon: Handshake, label: "My Happy Story", link: "/my-story" },
    { icon: Settings, label: "Manage My Profile", link: "/profile" },
    { icon: Heart, label: "My Interests", link: "/interests" },
    { icon: Users, label: "Ignored User List", link: "/ignored-users" },
    { icon: Trash2, label: "Delete Account", link: "/delete-account" },
];

export default function DropDownSheet() {
    const route = usePathname();
    
    const profileImage = "https://github.com/shadcn.png";
    const fullName = "User";
    const displayName = "User";
    
    return (
        <div className="flex items-center justify-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 hover:bg-transparent"
                    >
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={profileImage} />
                        </Avatar>
                    </Button>
                </SheetTrigger>
                <SheetContent className="md:w-[20vw] w-[300px]">
                    <SheetHeader>
                        <SheetTitle className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={profileImage} />
                            </Avatar>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-medium">{fullName}</span>
                                <span className="text-xs text-muted-foreground">{displayName}</span>
                            </div>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="mt-6 space-y-3">
                        {allLinks.map((item, index) => (
                            <SheetClose asChild className="flex flex-col" key={index}>
                                <Link href={item.link}>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start text-sm hover:text-white ${
                                            route === item.link ? "text-accent" : ""
                                        }`}
                                    >
                                        <item.icon className="mr-2 h-5 w-5" /> {item.label}
                                    </Button>
                                    <Separator />
                                </Link>
                            </SheetClose>
                        ))}
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-sm hover:text-white"
                        >
                            <LogOut className="mr-2 h-5 w-5" /> Signout
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}