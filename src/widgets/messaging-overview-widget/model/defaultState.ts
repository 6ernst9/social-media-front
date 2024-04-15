import {MessageState} from "./types";

export const defaultConv: MessageState = {
    currentConversation: {
        userId: "",
        fullName: "",
        profilePhoto: "",
        username: "",
        password: "",
    },
    chats: [],
    conversations: [],
    searchResults: [],
    stories: []
}