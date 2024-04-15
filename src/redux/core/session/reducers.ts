import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultSession} from "./defaultState";
import {UserType} from "./types";

const sessionSlice = createSlice({
    name: 'sessionState',
    initialState: defaultSession,
    reducers: {
        startSession: (state, action: PayloadAction<UserType>) => {
            localStorage.setItem('id', action.payload.id);
            state.fullName = action.payload.fullName;
            state.profilePhoto = action.payload.profilePhoto;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.phoneNumber = action.payload.phoneNumber;
        },
        continueSession: (state, action: PayloadAction<UserType>) => {
            state.fullName = action.payload.fullName;
            state.profilePhoto = action.payload.profilePhoto;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.phoneNumber = action.payload.phoneNumber;
        },
        endSession: (state) => {
            state = defaultSession
        }
    }
});

export const { startSession, continueSession, endSession } = sessionSlice.actions;
export default sessionSlice.reducer;