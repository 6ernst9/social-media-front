import {request} from "../../../components/core/Request/request";
import { MESSAGES_BASE_URL } from "../../../utils/constants";
import {conversationsSuccess, personChatsSuccess} from "./reducers";
import {EffectsPayload} from "../../feed-main-widget/model/types";
import {ChatEffectsPayload} from "./types";

export const dataRequested = async ({ userId, jwtToken, dispatch}: EffectsPayload) => {
    await request({
        url: MESSAGES_BASE_URL + 'getPersonConversations/' + userId,
        method: 'GET',
        headers: {
            'Authorization' : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(conversationsSuccess(response.data));
    }).catch((error) => {
        console.error(error);
    })
}

export const getPersonChats = async ({ userId, jwtToken, dispatch, receiverId}: ChatEffectsPayload) => {
    await request({
        url: MESSAGES_BASE_URL + 'getPersonChat/' + userId + '/' + receiverId,
        method: 'GET',
        data: {userId, receiverId},
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(personChatsSuccess(response.data));
    }).catch((error) => {
        console.error(error);
    })
}