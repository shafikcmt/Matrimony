import { Briefcase, Calendar, GraduationCap, Languages, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='h-full w-full rounded-xl relative border-none shadow-xl bg-white flex flex-col items-center justify-between'>
            {/* Top Banner and Profile Image */}
            <div className='w-full h-[180px]  rounded-t-xl relative'>
            <Image src='https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&
              ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='demo' className='w-full h-full object-cover rounded-t-xl' width={1920} height=
              {1080} />
              <div className='absolute left-1/2 -bottom-14 transform -translate-x-1/2'>
                <Image
                  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='profile'
                  className='w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg'
                  width={1920}
                  height={1080}
                />
                <span className='absolute bottom-3 right-4 w-4 h-4 bg-green-500 border-2 border-white rounded-full'></span>
              </div>
            </div>
            {/* Name and Location */}
            <div className='mt-16 flex flex-col items-center'>
              <h1 className='text-2xl font-semibold'>Sophia Lawrence</h1>
              <h3 className='flex gap-2 items-center text-gray-500 text-sm mt-1'>
                <MapPin className='w-4 h-4 text-pink-500' />
                Mumbai, India
              </h3>
            </div>
            {/* Quote/Bio */}
            <div className='mt-6 px-4'>
              <div className='bg-pink-50 rounded-lg p-4 text-center text-gray-700 italic text-sm'>
                "Passionate about art, travel, and finding someone to share life's adventures. Looking forward to building a meaningful relationship."
              </div>
            </div>
            {/* Details Section */}
            <div className='mt-6 grid grid-cols-2 gap-4 w-full px-4 text-center'>
              <div>
                <div className='flex items-center justify-center gap-2 text-pink-500'>
                  <Calendar className='w-4 h-4' />
                  <span className='font-semibold'>Age</span>
                </div>
                <div className='text-gray-800'>28 years</div>
              </div>
              <div>
                <div className='flex items-center justify-center gap-2 text-pink-500'>
                  <GraduationCap className='w-4 h-4' />
                  <span className='font-semibold'>Education</span>
                </div>
                <div className='text-gray-800'>MBA Finance</div>
              </div>
              <div>
                <div className='flex items-center justify-center gap-2 text-pink-500'>
                  <Briefcase className='w-4 h-4' />
                  <span className='font-semibold'>Profession</span>
                </div>
                <div className='text-gray-800'>Marketing Manager</div>
              </div>
              <div>
                <div className='flex items-center justify-center gap-2 text-pink-500'>
                  <Languages className='w-4 h-4' />
                  <span className='font-semibold'>Languages</span>
                </div>
                <div className='text-gray-800'>English, Hindi</div>
              </div>
            </div>
            {/* View Full Profile Button */}
            <div className='mt-8 mb-4 w-full flex justify-center'>
              <Link href={'/profile'}>
              <button className='bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-8 rounded-full shadow transition-all duration-200'>
                <span className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8l8 8 8-8" />
                  </svg>
                  View Full Profile
                </span>
              </button>
              </Link>
            </div>
          </div>
  )
}

export default ProfileCard