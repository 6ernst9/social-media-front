import {AuthState} from "./types";

export const defaultAuth: AuthState = {
    logged: false,
    error: null,
    token: null,
    userId: null
}