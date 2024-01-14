import {request} from "../../../components/core/Request/request";
import {CONNECTIONS_BASE_URL, CONTENT_BASE_URL, USER_BASE_URL} from "../../../utils/constants";
import {addPosts, addStreak, refreshProfile} from "./reducers";
import {EffectsPayload} from "../../feed-main-widget/model/types";
import {useSelector} from "react-redux";
import {sessionSelect} from "../../../redux/core/session/selectors";
import {ProfileEffectsPayload} from "./types";

export const dataRequested = async({userId, myUserId, jwtToken, dispatch}: ProfileEffectsPayload) => {
    await request({
        url: USER_BASE_URL + '/user/getSession/' + userId,
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        console.log(response.data);
        dispatch(refreshProfile({
            userId: response.data.userId,
            profilePicture: response.data.profilePicture,
            fullName: response.data.firstName + ' ' + response.data.lastName,
            username: response.data.username,
            bio: response.data.bio,
            isPrivate: response.data.isPrivate
        }));
    }).catch((err) => console.error(err));

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
        url: CONNECTIONS_BASE_URL + '/getUserStreak/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(addStreak(response.data));
    }).catch((error) => {
        console.error(error);
    })

    await request({
        url: CONNECTIONS_BASE_URL + '/getConnection/' + myUserId + '/' + userId,
        method: 'GET',
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(addStreak(response.data));
    }).catch((error) => {
        console.error(error);
    })
}