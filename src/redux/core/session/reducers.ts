import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultSession} from "./defaultState";
import {UserResponse, UserType} from "./types";

const sessionSlice = createSlice({
    name: 'sessionState',
    initialState: defaultSession,
    reducers: {
        startSession: (state, action: PayloadAction<UserResponse>) => {
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            state.fullName = action.payload.user.fullName;
            state.profilePicture = action.payload.user.profilePicture;
            state.username = action.payload.user.username;
            state.email = action.payload.user.email;
            state.userId = action.payload.user.userId;
            state.phoneNumber = action.payload.user.phoneNumber;
        },
        continueSession: (state, action: PayloadAction<UserType>) => {
            state.fullName = action.payload.fullName;
            state.username = action.payload.username;
            state.profilePicture = action.payload.profilePicture;
            state.email = action.payload.email;
            state.userId = action.payload.userId;
            state.phoneNumber = action.payload.phoneNumber;
        },
        endSession: (state) => {
            state = defaultSession
        }
    }
});

export const { startSession, continueSession, endSession } = sessionSlice.actions;
export default sessionSlice.reducer;