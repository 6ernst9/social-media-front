import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultAuth} from "./defaultState";

const loginSlice = createSlice({
    name: 'authState',
    initialState: defaultAuth,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            localStorage.setItem('session', action.payload);
           state.logged = true;
           state.error = 'NO-ERROR';
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.logged = false;
            state.error = action.payload;
        },
        changePage: (state) => {
            state.error = null;
        },
        registrationSuccess: (state,action: PayloadAction<string>) => {
            localStorage.setItem('session', action.payload);
            state.logged = true;
            state.error = 'NO-ERROR';
        },
        registrationFailure: (state, action: PayloadAction<string>) => {
            state.logged = false;
            state.error = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('id');
            localStorage.removeItem('token');
            localStorage.removeItem('session');
            state = defaultAuth;
        }
    }
});

export const { loginSuccess, registrationSuccess, registrationFailure, loginFailure, changePage, logout } = loginSlice.actions;
export default loginSlice.reducer;