import {Dispatch} from "redux";

export type RegisterProps = {
    email: string;
    fullName: string;
    username: string;
    password: string;
    phoneNumber: number;
    dispatch: Dispatch;
}