import {BASE_URL} from "../../../utils/constants";
import {loginFailure, loginSuccess} from "./reducers";
import {getSessionState, LoginProps} from "./types";
import {request} from "../../../components/core/Request/request";
import {continueSession, startSession} from "../../../redux/core/session/reducers";
import {showSidebar} from "../../../redux/core/layout/reducers";

export const login = async ({username, password, dispatch}: LoginProps) => {
    await request({
        url: BASE_URL,
        method: 'POST',
        data: {
            path: 'account.login',
            body: {username, password}
        }
    }).then((response) => {
        dispatch(loginSuccess());
        dispatch(startSession(response.data));
    }).catch((error) => {
        dispatch(loginFailure(error.message));
    })
}

export const getSession = async ({ token, dispatch }: getSessionState) => {
    await request({
        url: BASE_URL,
        method: 'GET',
        data: {
          path: 'account.getSession', body: {token}
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        dispatch(continueSession(response.data))
        dispatch(loginSuccess());
        dispatch(showSidebar());
    }).catch((err) => {
        console.error(err);
    })
}