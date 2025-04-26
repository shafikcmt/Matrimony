import { create } from "zustand";
import { UserProfileType } from "@/types/user";

type UserStateType = {
  userData: UserProfileType | null;

  setUserData: (user: UserProfileType) => void;
  clearUserData: () => void;
  updateUserField: (field: keyof UserProfileType, value: any) => void;
};

export const useUserStore = create<UserStateType>((set) => ({
  userData: null,

  setUserData: (user) =>
    set(() => ({
      userData: user,
    })),

  clearUserData: () =>
    set(() => ({
      userData: null,
    })),

  updateUserField: (field, value) =>
    set((state) => ({
      userData: state.userData ? { ...state.userData, [field]: value } : null,
    })),
}));
