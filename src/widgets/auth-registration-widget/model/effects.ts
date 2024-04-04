import {request} from "../../../components/core/Request/request";
import {BASE_URL} from "../../../utils/constants";
import {RegisterProps} from "./types";
import {startSession} from "../../../redux/core/session/reducers";
import {registrationFailure, registrationSuccess} from "../../auth-login-widget/model/reducers";

export const register = async ({email, username, password, fullName, phoneNumber, dispatch }: RegisterProps) => {
    await request({
        url: BASE_URL,
        method: 'POST',
        data: {
            path: 'account.register',
            body: {email, fullName, phoneNumber, username, password}
        }
    }).then((response) => {
        dispatch(registrationSuccess());
        dispatch(startSession(response.data));
    }).catch((error) => {
        dispatch(registrationFailure(error.message));
    })
}