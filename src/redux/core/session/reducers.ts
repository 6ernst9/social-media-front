import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultSession} from "./defaultState";
import {UserSession} from "./types";

const sessionSlice = createSlice({
    name: 'sessionState',
    initialState: defaultSession,
    reducers: {
        startSession: (state, action: PayloadAction<UserSession>) => {
            state = action.payload;
        },
        endSession: (state) => {
            state = defaultSession
        }
    }
});

export const { startSession, endSession } = sessionSlice.actions;
export default sessionSlice.reducer;