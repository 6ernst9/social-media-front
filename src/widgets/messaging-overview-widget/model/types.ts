import {User} from "../../../types/user";
import {Dispatch} from "redux";
import {StoryType} from "../../../types/auth";

export type Message = {
    senderId: User;
    receiverId: User;
    content: string;
    timestamp: string;
    isSeen: boolean;
}

export type Chat = {
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
    isSeen: boolean;
}

export type MessageState = {
    currentConversation: User;
    chats: Chat[];
    conversations: Message[];
    searchResults: User[]
    stories: StoryType[];
}

export type ChatEffectsPayload = {
    userId: string;
    receiverId: string;
    jwtToken: string;
    dispatch: Dispatch;
}

export type ReadChatEffectsPayload = {
    messageId: string;
    userId: string;
    jwtToken: string;
    dispatch: Dispatch;
}

export type EffectsPayload = {
    userId: string;
    jwtToken: string;
    dispatch: Dispatch;
}

export type GetAccountPayload = {
    userId: string;
    jwtToken: string;
}

export type SearchPayload = {
    term: string;
    dispatch: Dispatch;
}