import {Dispatch} from "redux";

export type LoginProps = {
    username: string;
    password: string;
    dispatch: Dispatch;
}

export type AuthPayload = {
    token: string | null;
    userId: number | null;
    error: string | null;
}

export type AuthState = {
    logged: boolean;
    error: string | null;
    token: string | null;
    userId: number | null;
}