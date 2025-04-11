export interface Notification {
  id: string;
  userId: string;
  type: 'match' | 'message' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  data?: {
    matchId?: string;
    messageId?: string;
    [key: string]: any;
  };
}

export interface NotificationPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface NotificationResponse {
  notifications: Notification[];
  pagination: NotificationPagination;
} 