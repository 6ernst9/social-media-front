import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultSession} from "./defaultState";
import {UserType} from "./types";

const sessionSlice = createSlice({
    name: 'sessionState',
    initialState: defaultSession,
    reducers: {
        startSession: (state, action: PayloadAction<UserType>) => {
            localStorage.setItem('userId', action.payload.userId);
            state.fullName = action.payload.fullName;
            state.profilePicture = action.payload.profilePicture;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
            state.phoneNumber = action.payload.phoneNumber;
        },
        endSession: (state) => {
            state = defaultSession
        }
    }
});

export const { startSession, endSession } = sessionSlice.actions;
export default sessionSlice.reducer;