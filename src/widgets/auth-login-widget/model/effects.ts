import {BASE_URL} from "../../../utils/constants";
import {loginFailure, loginSuccess} from "./reducers";
import {LoginProps} from "./types";
import {request} from "../../../components/core/Request/request";
import {continueSession, startSession} from "../../../redux/core/session/reducers";
import {getAccountByUsername} from "../../auth-registration-widget/model/types";

export const login = async ({username, password, dispatch}: LoginProps) => {
    await request({
        url: BASE_URL,
        method: 'POST',
        data: {
            path: 'account.login',
            body: {username, password}
        }
    }).then((response) => {
        console.debug(response.data);
        dispatch(loginSuccess());
        getAccount({username, dispatch})
    }).catch((error) => {
        dispatch(loginFailure(error.message));
    })
}

export const getAccount = async({username ,dispatch} : getAccountByUsername) => {
    await request({
        url: BASE_URL,
        method: 'POST',
        data: {
            path: 'account.get-account-by-username' + username
        }
    }).then((response) => {
        dispatch(startSession(response.data));
    }).catch((error) => {
        console.error(error);
    })
}