import {createSlice} from "@reduxjs/toolkit";
import {defaultLayout} from "./defaultState";

const layoutSlice = createSlice({
    name: 'layoutState',
    initialState: defaultLayout,
    reducers: {
        toggleDark: (state) => {
            state.isDark = true;
            localStorage.setItem('theme', 'dark');
        },
        toggleLight: (state) => {
            state.isDark = false;
            localStorage.setItem('theme', 'light');
        },
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        }
    }
});

export const { toggleDark, toggleLight, openModal, closeModal } = layoutSlice.actions;
export default layoutSlice.reducer;