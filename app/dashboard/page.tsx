import { Locate, MapPin, GraduationCap, Briefcase, Calendar, Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProfileCard from './components/ProfileCard'
import MiddleCard from './components/MiddleCard'
import NotificationCard from './components/NotificationCard'

const Dashboard = () => {
  return (
    <>
      <div className='h-screen grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
        <div className='p-4'>
          <ProfileCard />
        </div>
        <div className='p-4'>
          <MiddleCard />
        </div>
        <div className='p-4'>
          <NotificationCard />
        </div>
      </div>
    </>
  )
}

export default Dashboard