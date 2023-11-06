import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultAuth} from "../../auth-login-widget/model/defaultState";

const loginSlice = createSlice({
    name: 'authState',
    initialState: defaultAuth,
    reducers: {
        registrationSuccess: (state) => {
            state.logged = true;
            state.error = 'NO-ERROR';
        },
        registrationFailure: (state, action: PayloadAction<string>) => {
            state.logged = false;
            state.error = action.payload;
        }
    }
});

export const { registrationSuccess, registrationFailure } = loginSlice.actions;
export default loginSlice.reducer;