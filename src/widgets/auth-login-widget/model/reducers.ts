import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultAuth} from "./defaultState";

const authSlice = createSlice({
    name: 'authState',
    initialState: defaultAuth,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
           state.isLogged = true;
           state.token = action.payload;
           state.error = '';
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLogged = false;
            state.token = '';
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLogged = false;
            state.token = '';
            state.error = '';
        }
    }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;