import {User} from "../../../types/user";
import {Dispatch} from "redux";
import {StoryType} from "../../../types/content";

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
    type: string;
}

export type MessageState = {
    currentConversation: User;
    chats: Chat[];
    conversations: Message[];
    searchResults: User[]
    stories: StoryType[];
}

export type ChatEffectsPayload = {
    id: string;
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
    id: string;
    jwtToken: string;
    dispatch: Dispatch;
}

export type GetAccountPayload = {
    id: string;
    jwtToken: string;
}

export type SearchPayload = {
    term: string;
    dispatch: Dispatch;
}