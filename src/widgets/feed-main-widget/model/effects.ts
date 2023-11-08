import {request} from "../../../components/core/Request/request";
import {USER_BASE_URL} from "../../../utils/constants";
import {
    feedPostsSuccess,
    feedStoriesSuccess,
    suggestedFriendsSuccess,
    suggestedPostsSuccess
} from "./reducers";
import {EffectsPayload} from "./types";

export const dataRequested = async ({ userId, jwtToken, dispatch}: EffectsPayload) => {
    await request({
        url: USER_BASE_URL + '/feedPosts',
        method: 'GET',
        data: { userId, jwtToken}
    }).then((response) => {
        dispatch(feedPostsSuccess(response.data));
    }).catch((error) => {
    })

    await request({
        url: USER_BASE_URL + '/feedStories',
        method: 'GET',
        data: { userId, jwtToken}
    }).then((response) => {
        dispatch(feedStoriesSuccess(response.data));
    }).catch((error) => {
    })

    await request({
        url: USER_BASE_URL + '/suggestedPosts',
        method: 'GET',
        data: { userId, jwtToken}
    }).then((response) => {
        dispatch(suggestedPostsSuccess(response.data));
    }).catch((error) => {
    })

    await request({
        url: USER_BASE_URL + '/suggestedFriends',
        method: 'GET',
        data: { userId, jwtToken}
    }).then((response) => {
        dispatch(suggestedFriendsSuccess(response.data));
    }).catch((error) => {
    })
}