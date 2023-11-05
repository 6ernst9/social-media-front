import {RootState} from "../../../redux/store";

export const select = ({
    authError: (state: RootState) => state.auth.error,
    userId: (state: RootState) => state.auth.userId,
    jwtToken: (state: RootState) => state.auth.token
});