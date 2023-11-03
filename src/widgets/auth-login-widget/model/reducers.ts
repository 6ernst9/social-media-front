import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultAuth} from "./defaultState";

const authSlice = createSlice({
    name: 'authState',
    initialState: defaultAuth,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
           state.logged = true;
           state.token = action.payload;
           state.error = 'NO-ERROR';
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.logged = false;
            state.error = action.payload;
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

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;