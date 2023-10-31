import {Dispatch} from "redux";

export type LoginProps = {
    username: string;
    password: string;
    dispatch: Dispatch;
}