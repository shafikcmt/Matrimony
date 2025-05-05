import { create } from 'zustand';
import GenderEnum from "@/constants/genderEnum";

type AuthDataType = {
  authId: string;
  role: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  phoneNumber: string;
  autoAuthRefresh: {
    token: string;
    refreshToken: string;
  };
};

type AuthStateType = AuthDataType & {
  isValid: (data: AuthDataType) => boolean;
  setAuthState: (data: AuthDataType) => void;
  resetAuthState: () => void;
};

const initialAuthState: AuthDataType = {
  authId: '',
  role: '',
  dateOfBirth: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: GenderEnum.MALE,
  phoneNumber: '',
  autoAuthRefresh: {
    token: '',
    refreshToken: ''
  }
};

const useAuthStore = create<AuthStateType>((set) => ({
  ...initialAuthState,
  isValid: (data) => Boolean(data?.authId?.trim()?.length),
  setAuthState: (data) => set({ ...data }),
  resetAuthState: () => set({ ...initialAuthState, gender: GenderEnum.OTHER }),
}));

export default useAuthStore;