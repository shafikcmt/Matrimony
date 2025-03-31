import { ProfilePreferences } from '@/types/profile'
import { MatchPreferences } from '@/types/match'

export const dummyProfilePreferences: ProfilePreferences = {
  age_range: {
    min: 25,
    max: 35
  },
  gender: ['Female'],
  religion: ['Hindu', 'Buddhist'],
  caste: ['Brahmin', 'Kshatriya'],
  education: ['B.Tech', 'M.Tech', 'PhD'],
  occupation: ['Software Engineer', 'Data Scientist', 'Doctor'],
  income_range: {
    min: 800000,
    max: 2000000
  },
  location: {
    cities: ['Mumbai', 'Delhi', 'Bangalore'],
    states: ['Maharashtra', 'Delhi', 'Karnataka'],
    countries: ['India']
  }
}

export const dummyMatchPreferences: MatchPreferences = {
  age_range: {
    min: 28,
    max: 32
  },
  gender: ['Male'],
  religion: ['Hindu'],
  caste: ['Brahmin'],
  education: ['M.Tech', 'PhD'],
  occupation: ['Software Engineer', 'Data Scientist'],
  income_range: {
    min: 1000000,
    max: 1500000
  },
  location: {
    cities: ['Mumbai', 'Bangalore'],
    states: ['Maharashtra', 'Karnataka'],
    countries: ['India']
  }
} 