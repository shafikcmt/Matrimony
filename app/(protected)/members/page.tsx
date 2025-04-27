"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState } from "react";

// Define the UserProfile type
interface UserProfile {
  id: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  date_of_birth?: string;
  created_at: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<UserProfile[]>([
    {
      id: "1",
      full_name: "John Doe",
      avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
      phone: "+1 (555) 123-4567",
      date_of_birth: "1990-05-15",
      created_at: "2023-01-10"
    },
    {
      id: "2",
      full_name: "Jane Smith",
      avatar_url: "https://randomuser.me/api/portraits/women/2.jpg",
      phone: "+1 (555) 987-6543",
      date_of_birth: "1988-11-22",
      created_at: "2023-02-15"
    },
    {
      id: "3",
      full_name: "Michael Johnson",
      avatar_url: "https://randomuser.me/api/portraits/men/3.jpg",
      phone: "+1 (555) 456-7890",
      date_of_birth: "1992-08-30",
      created_at: "2023-03-20"
    },
    {
      id: "4",
      full_name: "Emily Davis",
      avatar_url: "https://randomuser.me/api/portraits/women/4.jpg",
      phone: "+1 (555) 234-5678",
      date_of_birth: "1995-04-12",
      created_at: "2023-04-05"
    },
    {
      id: "5",
      full_name: "Robert Wilson",
      avatar_url: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1 (555) 876-5432",
      date_of_birth: "1987-09-25",
      created_at: "2023-05-18"
    },
    {
      id: "6",
      full_name: "Sarah Brown",
      avatar_url: "https://randomuser.me/api/portraits/women/6.jpg",
      phone: "+1 (555) 345-6789",
      date_of_birth: "1993-07-08",
      created_at: "2023-06-22"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Our Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.avatar_url || undefined} />
                <AvatarFallback>{member.full_name?.charAt(0) || '?'}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{member.full_name || 'Anonymous'}</CardTitle>
                <p className="text-sm text-gray-500">
                  Member since {member.created_at ? new Date(member.created_at).toLocaleDateString() : 'Unknown'}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {member.phone && (
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> {member.phone}
                  </p>
                )}
                {member.date_of_birth && (
                  <p className="text-sm">
                    <span className="font-medium">Age:</span> {new Date().getFullYear() - new Date(member.date_of_birth).getFullYear()} years
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 