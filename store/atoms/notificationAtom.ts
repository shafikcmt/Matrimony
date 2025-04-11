import { atom } from "recoil";
import { Notification } from '@/types/notification';

export const notificationsState = atom<Notification[]>({
  key: "notificationsState",
  default: [],
});

export const notificationsLoadingState = atom<boolean>({
  key: "notificationsLoadingState",
  default: false,
});

export const notificationsErrorState = atom<string | null>({
  key: "notificationsErrorState",
  default: null,
});

export const unreadNotificationsCountState = atom<number>({
  key: "unreadNotificationsCountState",
  default: 0,
}); 