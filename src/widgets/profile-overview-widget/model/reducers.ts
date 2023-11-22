import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultProfile} from "./defaultState";
import {ProfileState, Streak} from "./types";
import {Post} from "../../../types/content";
import {StoryType} from "../../../types/auth";

const profileSlice = createSlice({
    name: 'profileState',
    initialState: defaultProfile,
    reducers: {
        refreshProfile: (state, action: PayloadAction<ProfileState>) => {
            state = action.payload;
        },
        addPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        addHighlights: (state, action: PayloadAction<StoryType[]>) => {
            state.highlights = action.payload;
        },
        addBio: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        addStreak: (state, action: PayloadAction<Streak>) =>{
            state.followers = action.payload.followers;
            state.following = action.payload.following;
        },
        closeProfile: (state) => {
            state = defaultProfile
        }
    }
});

export const { addPosts, addHighlights, addBio, addStreak, refreshProfile, closeProfile } = profileSlice.actions;
export default profileSlice.reducer;