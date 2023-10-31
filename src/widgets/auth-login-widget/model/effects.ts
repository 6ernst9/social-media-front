import {USER_BASE_URL} from "../../../utils/constants";
import {loginFailure, loginSuccess} from "./reducers";
import {LoginProps} from "./types";
import {request} from "../../../components/core/Request/request";

export const login = async ({username, password, dispatch}: LoginProps) => {
    await request({
        url: USER_BASE_URL + '/login',
        method: 'POST',
        data: {username, password}
    }).then((response) => {
        dispatch(loginSuccess(response.data.token));
    }).catch((error) => {
        console.log(error);
        dispatch(loginFailure(error.message));
    })
}