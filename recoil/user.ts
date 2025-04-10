import { ProfileFormData } from "@/types/profile";
import { atom } from "recoil";

export const userAtom = atom<any>({
  key: "userAtom",
  default: {
    full_name: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    religion: "",
    caste: "",
    education: "",
    occupation: "",
    income: "",
    city: "",
    state: "",
    country: "",
    about: "",
  },
});
