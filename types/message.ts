import { UserProfile } from './auth'

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
  sender?: {
    id: string;
    name: string;
    photo: string;
  };
}

export interface Conversation {
  id: string;
  participants: {
    user: UserProfile;
  }[];
  updated_at: string;
}

export interface MessagePagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface MessageResponse {
  messages: Message[];
  pagination: MessagePagination;
} 