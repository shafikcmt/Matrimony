import { atom } from "recoil";
import { Message } from '@/types/message';

export const messagesState = atom<Message[]>({
  key: "messagesState",
  default: [],
});

export const messagesLoadingState = atom<boolean>({
  key: "messagesLoadingState",
  default: false,
});

export const messagesErrorState = atom<string | null>({
  key: "messagesErrorState",
  default: null,
});

export const unreadMessagesCountState = atom<number>({
  key: "unreadMessagesCountState",
  default: 0,
}); 