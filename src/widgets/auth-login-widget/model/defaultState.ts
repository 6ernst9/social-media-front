import {AuthState} from "../../../types/auth";

export const defaultAuth: AuthState = {
    logged: false,
    error: null,
    token: null,
    userId: null
}