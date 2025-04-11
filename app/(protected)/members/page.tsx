"use client";

import { useEffect, useState } from 'react';
import { UserProfile } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function MembersPage() {
  const [members, setMembers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/api/members');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch members');
        }
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format');
        }
        
        setMembers(data);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching members');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Our Members</h1>
        <p className="text-center text-gray-500">No members found.</p>
      </div>
    );
  }

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