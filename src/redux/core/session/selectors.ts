import {RootState} from "../../../redux/store";

export const select = ({
    jwtToken: (state: RootState) => state.session.token,
    userId: (state: RootState) => state.session.userId,
    email: (state: RootState) => state.session.email,
    username: (state: RootState) => state.session.username,
    fullName: (state: RootState) => state.session.fullName,
    phoneNumber: (state: RootState) => state.session.phoneNumber,
});