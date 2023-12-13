import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultConv} from "./defaultState";
import {Message} from "./types";

const messageSlice = createSlice({
    name: 'messageState',
    initialState: defaultConv,
    reducers: {
        conversationsSuccess: (state, action: PayloadAction<Message[]>) => {
            state.conversations = action.payload;
        },
        personChatsSuccess: (state,action: PayloadAction<Message[]>) => {
            state.chats = action.payload;
        }
    }
});

export const { conversationsSuccess, personChatsSuccess } = messageSlice.actions;
export default messageSlice.reducer;