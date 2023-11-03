import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultAuth} from "./defaultState";
import {AuthPayload} from "./types";

const authSlice = createSlice({
    name: 'authState',
    initialState: defaultAuth,
    reducers: {
        loginSuccess: (state, action: PayloadAction<AuthPayload>) => {
           state.logged = true;
           state.token = action.payload.token;
           state.userId = action.payload.userId;
           state.error = 'NO-ERROR';
        },
        registrationSuccess: (state, action: PayloadAction<AuthPayload>) => {
            state.logged = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.error = 'NO-ERROR';
        },
        loginFailure: (state, action: PayloadAction<AuthPayload>) => {
            state.logged = false;
            state.error = action.payload.error;
            state.token = null;
            state.userId = null;
        },
        registrationFailure: (state, action: PayloadAction<AuthPayload>) => {
            state.logged = false;
            state.error = action.payload.error;
            state.token = null;
            state.userId = null;
        },
        logout: (state) => {
            state.logged = false;
            state.token = null;
            state.error = null;
            state.userId = null;
        }
    }
});

export const { loginSuccess, registrationSuccess, loginFailure, registrationFailure, logout } = authSlice.actions;
export default authSlice.reducer;