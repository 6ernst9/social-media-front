import {RootState} from "../../../redux/store";

export const select = ({
    authError: (state: RootState) => state.auth.error
});