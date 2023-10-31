import {RootState} from "../../../redux/store";

export const select = ({
    userToken: (state: RootState) => state.auth.token,
    isLogged: (state: RootState) => state.auth.logged,
    authError: (state: RootState) => state.auth.error
});