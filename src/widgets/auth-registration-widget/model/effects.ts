import {request} from "../../../components/core/Request/request";
import {BASE_URL} from "../../../utils/constants";
import {getAccountByUsername, RegisterProps} from "./types";
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
        console.debug(response.data)
        dispatch(registrationSuccess());
        getAccount({username, dispatch});
    }).catch((error) => {
        dispatch(registrationFailure(error.message));
    })
}

export const getAccount = async({username ,dispatch} : getAccountByUsername) => {
    await request({
        url: BASE_URL,
        method: 'GET',
        data: {
            path: 'account.get-account-by-username' + username
        }
    }).then((response) => {
        dispatch(startSession(response.data));
    }).catch((error) => {
        console.error(error);
    })
}