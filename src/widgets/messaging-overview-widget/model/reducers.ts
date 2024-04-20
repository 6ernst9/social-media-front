import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultConv} from "./defaultState";
import {Chat, Message} from "./types";
import {User} from "../../../types/user";
import {StoryType} from "../../../types/content";

const messageSlice = createSlice({
    name: 'messageState',
    initialState: defaultConv,
    reducers: {
        conversationsSuccess: (state, action: PayloadAction<Message[]>) => {
            state.conversations = action.payload;
        },
        personChatsSuccess: (state,action: PayloadAction<Chat[]>) => {
            state.chats = action.payload;
        },
        changeConversation: (state, action: PayloadAction<User>) => {
            state.currentConversation = action.payload;
        },
        searchTerm: (state, action: PayloadAction<User[]>) => {
            state.searchResults = action.payload;
        },
        storiesSuccess: (state, action: PayloadAction<StoryType[]>) => {
            state.stories = action.payload;
        }
    }
});

export const { conversationsSuccess, personChatsSuccess, changeConversation, storiesSuccess, searchTerm } = messageSlice.actions;
export default messageSlice.reducer;