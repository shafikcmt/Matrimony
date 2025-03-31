"use client";
import React from "react";
import { useRecoilValue } from 'recoil'
import { userSelector, userProfileSelector } from '@/store/auth'
import { dummyMatches, dummyMatchRequests } from '@/data/matches'
import { Match, MatchRequest } from '@/types/match'

const Dashboard = () => {
  const user = useRecoilValue(userSelector)
  const profile = useRecoilValue(userProfileSelector)

  // For now, we'll use dummy data
  const matches = dummyMatches
  const matchRequests = dummyMatchRequests

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Profile Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Name</p>
            <p className="font-medium">{profile?.full_name}</p>
          </div>
          <div>
            <p className="text-gray-600">Age</p>
            <p className="font-medium">{profile ? calculateAge(profile.date_of_birth) : 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-600">Location</p>
            <p className="font-medium">{profile ? `${profile.city}, ${profile.state}` : 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-600">Occupation</p>
            <p className="font-medium">{profile?.occupation || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Matches */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* Match Requests */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Match Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchRequests.map((request) => (
            <MatchRequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function calculateAge(dateOfBirth: string): number {
  const today = new Date()
  const birthDate = new Date(dateOfBirth)
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

function MatchCard({ match }: { match: Match }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={match.matched_user.avatar_url || '/images/default-avatar.png'}
          alt={match.matched_user.full_name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{match.matched_user.full_name}</h3>
          <p className="text-gray-600">{calculateAge(match.matched_user.date_of_birth)} years</p>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        <p>{match.matched_user.occupation}</p>
        <p>{match.matched_user.city}, {match.matched_user.state}</p>
      </div>
    </div>
  )
}

function MatchRequestCard({ request }: { request: MatchRequest }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={request.from_user.avatar_url || '/images/default-avatar.png'}
          alt={request.from_user.full_name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{request.from_user.full_name}</h3>
          <p className="text-gray-600">{calculateAge(request.from_user.date_of_birth)} years</p>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        <p>{request.from_user.occupation}</p>
        <p>{request.from_user.city}, {request.from_user.state}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Accept
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Reject
        </button>
      </div>
    </div>
  )
} 