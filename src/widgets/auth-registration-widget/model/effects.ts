import {request} from "../../../components/core/Request/request";
import {USER_BASE_URL} from "../../../utils/constants";
import {RegisterProps} from "./types";
import {startSession} from "../../../redux/core/session/reducers";
import {registrationFailure, registrationSuccess} from "../../auth-login-widget/model/reducers";

export const register = async ({email,
                                username,
                               password,
                               fullName,
                               phoneNumber,
                               dispatch }: RegisterProps) => {
    await request({
        url: USER_BASE_URL + '/register',
        method: 'POST',
        data: {email, fullName, phoneNumber, username, password}
    }).then((response) => {
        dispatch(registrationSuccess());
        dispatch(startSession(response.data));
    }).catch((error) => {
        dispatch(registrationFailure(error.message));
    })
}