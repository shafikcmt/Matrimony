import { atom } from "recoil";

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  updatedAt: string;
  matchedUser?: {
    id: string;
    name: string;
    photo: string;
    age: number;
    location: string;
  };
}

export const matchesState = atom<Match[]>({
  key: "matchesState",
  default: [],
});

export const matchesLoadingState = atom<boolean>({
  key: "matchesLoadingState",
  default: false,
});

export const matchesErrorState = atom<string | null>({
  key: "matchesErrorState",
  default: null,
}); 