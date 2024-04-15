import {createSlice} from "@reduxjs/toolkit";
import {defaultLayout} from "./defaultState";

const layoutSlice = createSlice({
    name: 'layoutState',
    initialState: defaultLayout,
    reducers: {
    }
});

export const { } = layoutSlice.actions;
export default layoutSlice.reducer;