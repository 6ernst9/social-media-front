import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultProfile} from "./defaultState";
import {ProfileAccount, ProfileState, Streak} from "./types";
import {Post} from "../../../types/content";

const profileSlice = createSlice({
    name: 'profileState',
    initialState: defaultProfile,
    reducers: {
        refreshProfile: (state, action: PayloadAction<ProfileAccount>) => {
            state.profilePicture = action.payload.profilePicture;
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.fullName = action.payload.fullName;
            state.isPrivate = action.payload.isPrivate;
        },
        addPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
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

export const { addPosts, addBio, addStreak, refreshProfile, closeProfile } = profileSlice.actions;
export default profileSlice.reducer;