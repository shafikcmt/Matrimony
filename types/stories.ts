export interface UserStory {
  id: string;
  coupleName: string;
  story: string;
  marriageDate: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateUserStoryDTO {
  coupleName: string;
  story: string;
  marriageDate: string;
  image: string;
}

export interface UpdateUserStoryDTO {
  coupleName?: string;
  story?: string;
  marriageDate?: string;
  image?: string;
}

export interface UserStoryResponse {
  success: boolean;
  data?: UserStory | UserStory[];
  error?: string;
}

export interface UserStoryFilters {
  search?: string;
  startDate?: string;
  endDate?: string;
  sortBy?: 'marriageDate' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface UserStoryPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface UserStoryState {
  stories: UserStory[];
  currentStory: UserStory | null;
  isLoading: boolean;
  error: string | null;
  pagination: UserStoryPagination;
}

export type UserStorySortField = 'marriageDate' | 'createdAt';
export type UserStorySortOrder = 'asc' | 'desc';

export interface UserStorySort {
  field: UserStorySortField;
  order: UserStorySortOrder;
}

export interface UserStoryQueryParams {
  search?: string;
  startDate?: string;
  endDate?: string;
  sort?: UserStorySort;
  page?: number;
  limit?: number;
}
