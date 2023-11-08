import {USER_BASE_URL} from "../../../utils/constants";
import {loginFailure, loginSuccess} from "./reducers";
import {LoginProps} from "./types";
import {request} from "../../../components/core/Request/request";
import {startSession} from "../../../redux/core/session/reducers";

export const login = async ({username, password, dispatch}: LoginProps) => {
    await request({
        url: USER_BASE_URL + '/login',
        method: 'POST',
        data: {username, password}
    }).then((response) => {
        dispatch(loginSuccess());
        dispatch(startSession(response.data));
    }).catch((error) => {
        dispatch(loginFailure(error.message));
    })
}