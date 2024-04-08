import {MessageState} from "./types";

export const defaultConv: MessageState = {
    currentConversation: {
        userId: "",
        fullName: "",
        profilePicture: "",
        username: "",
        password: "",
    },
    chats: [],
    conversations: [],
    searchResults: [],
    stories: []
}