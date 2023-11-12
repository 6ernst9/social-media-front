import {User} from "./user";

export type Post = {
    contentId: string;
    user: User;
    photo: string;
    datePosted: string;
    description?: string;
}

export type Comment = {
    user: User;
    text: string;
    likes: User[];
    replies: Comment[];
    commTime: string;
}
