import { Match, MatchRequest } from '@/types/match'
import { dummyProfiles } from './profiles'

export const dummyMatches: Match[] = [
  {
    id: '1',
    user_id: '1',
    matched_user_id: '2',
    status: 'accepted',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z',
    matched_user: dummyProfiles[1]
  }
]

export const dummyMatchRequests: MatchRequest[] = [
  {
    id: '1',
    from_user_id: '1',
    to_user_id: '2',
    status: 'pending',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z',
    from_user: dummyProfiles[0]
  }
] 