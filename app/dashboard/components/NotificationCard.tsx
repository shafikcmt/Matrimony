import React from 'react'
import { CheckCircle, AlertCircle, Circle, User, Camera, Briefcase, Users, Heart, MessageCircle, Star } from 'lucide-react'
import Image from 'next/image'

const completionSteps = [
  { label: 'Basic Information', status: 'done', icon: <CheckCircle className="text-green-500 w-5 h-5" /> },
  { label: 'Profile Photo', status: 'done', icon: <CheckCircle className="text-green-500 w-5 h-5" /> },
  { label: 'Education & Career', status: 'done', icon: <CheckCircle className="text-green-500 w-5 h-5" /> },
  { label: 'Family Details', status: 'warning', icon: <AlertCircle className="text-yellow-500 w-5 h-5" /> },
  { label: 'Partner Preferences', status: 'warning', icon: <AlertCircle className="text-yellow-500 w-5 h-5" /> },
  { label: 'Lifestyle Information', status: 'pending', icon: <Circle className="text-gray-400 w-5 h-5" /> },
]

const activities = [
  {
    user: 'Rahul M.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    action: 'expressed interest in you',
    icon: <Heart className="w-4 h-4 text-pink-500" />, time: '5 min ago',
  },
  {
    user: 'Priya S.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    action: 'viewed your profile',
    icon: <User className="w-4 h-4 text-blue-400" />, time: '1 hour ago',
  },
  {
    user: 'Amit K.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    action: 'sent you a message',
    icon: <MessageCircle className="w-4 h-4 text-green-500" />, time: '3 hours ago',
  },
  {
    user: 'Neha R.',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    action: 'shortlisted your profile',
    icon: <Star className="w-4 h-4 text-yellow-500" />, time: 'Yesterday',
  },
]

const NotificationCard = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
      {/* Profile Completion */}
      <div className="bg-white rounded-xl shadow p-4 mb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-base">Profile Completion</span>
          <span className="text-pink-500 font-bold text-lg">75%</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
          <div className="h-2 bg-pink-400 rounded-full" style={{ width: '75%' }}></div>
        </div>
        {/* Checklist */}
        <ul className="flex flex-col gap-2 mb-4">
          {completionSteps.map((step, idx) => (
            <li key={idx} className={`flex items-center gap-2 text-sm ${step.status === 'done' ? 'text-gray-700' : step.status === 'warning' ? 'text-yellow-600 font-semibold' : 'text-gray-400'}`}> 
              {step.icon}
              <span>{step.label}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-pink-50 text-pink-600 font-semibold py-2 rounded-lg mt-2 hover:bg-pink-100 transition">
          Complete Your Profile
        </button>
      </div>
      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-4">
        <span className="font-semibold text-base mb-3 block">Recent Activity</span>
        <ul className="flex flex-col gap-3">
          {activities.map((activity, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <Image src={activity.avatar} alt={activity.user} width={36} height={36} className="rounded-full w-9 h-9 object-cover" />
              <div className="flex-1">
                <span className="font-semibold text-gray-800">{activity.user}</span>
                <span className="text-gray-600 ml-1">{activity.action}</span>
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                  {activity.icon}
                  <span>{activity.time}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="w-full bg-gray-50 text-gray-700 font-semibold py-2 rounded-lg mt-4 hover:bg-gray-100 transition">
          View All Activity
        </button>
      </div>
    </div>
  )
}

export default NotificationCard