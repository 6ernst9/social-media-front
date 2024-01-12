import {User} from "../../../types/user";
import {Dispatch} from "redux";

export type Message = {
    sender: User;
    receiver: User;
    message: string;
    date: string;
    isSeen: boolean;
}

export type MessageState = {
    currentConversation: User;
    chats: Message[];
    conversations: Message[];
}

export type ChatEffectsPayload = {
    userId: string;
    receiverId: string;
    jwtToken: string;
    dispatch: Dispatch;
}