import {RootState} from "../../store";

export const select = ({
    showSidebar: (state: RootState) => state.layout.showSidebar,
    isDark: (state: RootState) => state.layout.isDark
});