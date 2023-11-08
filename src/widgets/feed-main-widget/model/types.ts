import {User} from "../../../types/user";
import {Post} from "../../../types/content";
import {StoryType} from "../../../types/auth";
import {Dispatch} from "redux";

export type FeedState = {
    feedStories: StoryType[];
    suggestedFriends: User[];
    suggestedPosts: Post[];
    feedPosts: Post[];
}

export type EffectsPayload = {
    userId: string;
    jwtToken: string;
    dispatch: Dispatch;
}