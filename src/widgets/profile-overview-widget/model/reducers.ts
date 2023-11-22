import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultProfile} from "./defaultState";
import {ProfileState} from "./types";
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
        closeProfile: (state) => {
            state = defaultProfile
        }
    }
});

export const { refreshProfile, closeProfile } = profileSlice.actions;
export default profileSlice.reducer;