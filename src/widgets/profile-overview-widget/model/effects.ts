import {request} from "../../../components/core/Request/request";
import {CONNECTIONS_BASE_URL, CONTENT_BASE_URL, USER_BASE_URL} from "../../../utils/constants";
import {
    feedPostsSuccess,
    feedStoriesSuccess,
    suggestedPostsSuccess
} from "../../feed-main-widget/model/reducers";

export const dataRequested = async({userId, jwtToken, dispatch}) => {
    await request({
        url: CONTENT_BASE_URL + '/getUserPosts/' + userId,
        method: 'GET',
        headers: {
            'Authorization' : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(feedPostsSuccess(response.data));
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
        dispatch(feedStoriesSuccess(response.data));
    }).catch((error) => {
    })

    await request({
        url: USER_BASE_URL + '/getUserDetails/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(feedStoriesSuccess(response.data));
    }).catch((error) => {
    })

    await request({
        url: CONNECTIONS_BASE_URL + '/getUserStreak/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(suggestedPostsSuccess(response.data));
    }).catch((error) => {
    })
}