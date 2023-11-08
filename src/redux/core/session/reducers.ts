import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultSession} from "./defaultState";
import {UserResponse} from "./types";

const sessionSlice = createSlice({
    name: 'sessionState',
    initialState: defaultSession,
    reducers: {
        startSession: (state, action: PayloadAction<UserResponse>) => {
            state.token = action.payload.token;
            state.fullName = action.payload.firstName + action.payload.lastName;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
            state.phoneNumber = action.payload.phoneNumber;
            state.language = action.payload.language;
        },
        endSession: (state) => {
            state = defaultSession
        }
    }
});

export const { startSession, endSession } = sessionSlice.actions;
export default sessionSlice.reducer;