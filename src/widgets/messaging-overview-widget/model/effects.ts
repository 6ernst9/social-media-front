import {request} from "../../../components/core/Request/request";
import {BASE_URL} from "../../../utils/constants";
import {conversationsSuccess, personChatsSuccess, searchTerm, storiesSuccess} from "./reducers";
import {
    Chat,
    ChatEffectsPayload,
    EffectsPayload,
    GetAccountPayload, Message,
    SearchPayload
} from "./types";
import {User} from "../../../types/user";

export const dataRequested = async ({ userId, jwtToken, dispatch}: EffectsPayload) => {
    let conversations: Message[] = [];
    await request({
        url: BASE_URL,
        method: 'GET',
        data: {
            path: 'messaging.get-conversations/' + userId
        },
        headers: {
            'Authorization' : "Bearer " + jwtToken
        }
    }).then((response) => {
        response.data.map((msg: Chat) => {
            getAccount({userId: msg.senderId, jwtToken})
                .then((sender) => {
                    getAccount({userId: msg.receiverId, jwtToken})
                        .then((receiver) => {
                            conversations.push({
                                senderId: sender,
                                receiverId: receiver,
                                content: msg.content,
                                timestamp: msg.content,
                                isSeen: msg.isSeen })
                    })
                })
        })
        dispatch(conversationsSuccess(conversations));
    }).catch((error) => {
        console.error(error);
    });

    await request({
        url: BASE_URL,
        method: 'GET',
        data: {
            path: 'content.get-stories/' + userId
        },
        headers: {
            Authorization: "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(storiesSuccess(response.data));
    }).catch((error) => {
        console.error(error);
    });
}

export const getPersonChats = async ({ userId, jwtToken, dispatch, receiverId}: ChatEffectsPayload) => {
    await request({
        url: BASE_URL,
        method: 'GET',
        data: {path: 'messaging.get-chats/' + userId + '/' + receiverId},
        headers: {
            Authorization : "Bearer " + jwtToken
        }
    }).then((response) => {
        dispatch(personChatsSuccess(response.data));
    }).catch((error) => {
        console.error(error);
    })
}

// export const readPersonChat = async ({userId, messageId, jwtToken, dispatch}: ReadChatEffectsPayload) => {
//     await request({
//         url: MESSAGES_BASE_URL + 'updateReadStatus',
//         method: 'POST',
//         data: {messageId, isSeen: false},
//         headers: {
//             Authorization : "Bearer " + jwtToken
//         }
//     }).then((response) => {
//         dataRequested({userId, jwtToken, dispatch});
//     }).catch((error) => {
//         console.error(error);
//     })
// }

export const getAccount = async({userId, jwtToken}: GetAccountPayload): Promise<User> => {
    return await request({
        url: BASE_URL,
        method: 'GET',
        data: {
            path: 'account.get-account/' + userId
        },
        headers: {
            Authorization: "Bearer " + jwtToken
        }
    }).then((response) => response.data);
}

export const searchByTerm = async({term, dispatch}: SearchPayload) => {
    await request({
        url: BASE_URL,
        method: 'GET',
        data: {
            path: 'account.search-by-term' + term
        }
    }).then((response) => {
        dispatch(searchTerm(response.data));
    }).catch((error) => {
        console.error(error);
    })
}