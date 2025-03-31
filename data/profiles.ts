import { UserProfile } from '@/types/auth'

export const dummyProfiles: UserProfile[] = [
  {
    id: '1',
    full_name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    date_of_birth: '1990-01-01',
    gender: 'Male',
    religion: 'Hindu',
    caste: 'Brahmin',
    education: 'B.Tech',
    occupation: 'Software Engineer',
    income: '1000000',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    about: 'Looking for a life partner who shares similar values and interests.',
    profile_picture: '/images/profile1.jpg',
    avatar_url: '/images/avatar1.jpg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    full_name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1987654321',
    date_of_birth: '1992-05-15',
    gender: 'Female',
    religion: 'Hindu',
    caste: 'Kshatriya',
    education: 'M.Tech',
    occupation: 'Data Scientist',
    income: '1200000',
    city: 'Delhi',
    state: 'Delhi',
    country: 'India',
    about: 'Seeking a partner who values family and career growth.',
    profile_picture: '/images/profile2.jpg',
    avatar_url: '/images/avatar2.jpg',
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z'
  }
] 