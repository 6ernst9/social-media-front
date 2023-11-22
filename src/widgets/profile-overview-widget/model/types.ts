import {Post} from "../../../types/content";
import {StoryType} from "../../../types/auth";

export type ProfileState = {
    connection: string;
    isPrivate: boolean;
    userId: string;
    profilePicture: string;
    fullName: string;
    username: string;
    followers: number;
    following: number;
    description: string;
    highlights: StoryType[];
    posts: Post[];
}

export type Streak = {
    following: number;
    followers: number;
}