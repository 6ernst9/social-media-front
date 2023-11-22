import {request} from "../../../components/core/Request/request";
import {CONNECTIONS_BASE_URL, CONTENT_BASE_URL, USER_BASE_URL} from "../../../utils/constants";
import {addBio, addHighlights, addPosts, addStreak} from "./reducers";
import {EffectsPayload} from "../../feed-main-widget/model/types";

export const dataRequested = async({userId, jwtToken, dispatch}: EffectsPayload) => {
    await request({
        url: CONTENT_BASE_URL + '/getUserPosts/' + userId,
        method: 'GET',
        headers: {
            'Authorization' : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(addPosts(response.data));
    }).catch((error) => {
        console.log(error);
    })

    await request({
        url: CONTENT_BASE_URL + '/getUserHighlights/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(addHighlights(response.data));
    }).catch((error) => {
    })

    await request({
        url: USER_BASE_URL + '/getUserBio/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(addBio(response.data));
    }).catch((error) => {
    })

    await request({
        url: CONNECTIONS_BASE_URL + '/getUserStreak/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(addStreak(response.data));
    }).catch((error) => {
    })
}