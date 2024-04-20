import {User} from "./user";

export type Content = {
    id: string;
    posterId: string;
    url: string;
    type: string;
    timestamp: string;
    seen: number[];
    receivers: number[]
}

export interface StoryType {
    id: string;
    posterId: User;
    url: string;
    timestamp: string;
    receivers: User[];
    seen: User[];
}

export interface StoryResponse {
    id: string;
    posterId: number;
    url: string;
    timestamp: string;
    receivers: number[];
    seen: number[];
}
