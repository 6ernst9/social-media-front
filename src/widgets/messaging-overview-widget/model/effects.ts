import {request} from "../../../components/core/Request/request";
import {BASE_URL} from "../../../utils/constants";
import {conversationsSuccess, personChatsSuccess, searchTerm, storiesSuccess} from "./reducers";
import {
    Chat,
    ChatEffectsPayload,
    EffectsPayload,
    GetAccountPayload,
    SearchPayload
} from "./types";
import {User} from "../../../types/user";
import {Content, StoryResponse} from "../../../types/content";

export const dataRequested = async ({ id, jwtToken, dispatch}: EffectsPayload) => {
    const response = await request({
        url: BASE_URL,
        method: 'GET',
        params: {
            path: encodeURIComponent('messaging.get-conversations/' + id)
        },
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGSh23zOl21k4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            'X-FI-SY-IP': '127.0.0',
            'X-FI-SY-SITE-ID': 'COM',
            'X-FI-SY-DEVICE': 'DESKTOP'
        }
    });
    const messages: Chat[] = response.data;

    const convs = messages.map(async msg => {
        const sender = await getAccount({id: msg.senderId, jwtToken});
        const receiver = await getAccount({id: msg.receiverId, jwtToken});

        return {
            senderId: sender,
            receiverId: receiver,
            content: msg.content,
            timestamp: msg.timestamp,
            isSeen: msg.isSeen
        }
    });

    const conversations = await Promise.all(convs);
    dispatch(conversationsSuccess(conversations));

    const res = await request({
        url: BASE_URL,
        method: 'GET',
        params: {
            path: encodeURIComponent('content.get-stories/' + id)
        },
        headers: {
            'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGSh23zOl21k4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            'X-FI-SY-IP' : '127.0.0',
            'X-FI-SY-SITE-ID': 'COM',
            'X-FI-SY-DEVICE': 'DESKTOP'
        }
    });

    let storyResponses: StoryResponse[] = res.data;

    const storyz = storyResponses.map(async story => {
        const posterId = await getAccount({id: story.posterId.toString(), jwtToken});

        let receivers: User[] = [];
        let seen: User[] = [];

        story.receivers.map(async receiverId => {
            await getAccount({id: receiverId.toString(), jwtToken})
                .then(receiverResponse => receivers.push(receiverResponse));
        })

        story.seen.map(async seenId => {
            await getAccount({id: seenId.toString(), jwtToken})
                .then(seenResponse => seen.push(seenResponse));
        })

        return {
            id: story.id,
            posterId,
            receivers,
            seen,
            url: story.url,
            timestamp: story.timestamp
        }
    });

    const stories = await Promise.all(storyz);
    dispatch(storiesSuccess(stories));
}

export const getPersonChats = async ({ id, jwtToken, dispatch, receiverId}: ChatEffectsPayload) => {
    const response = await request({
        url: BASE_URL,
        method: 'GET',
        params: {
            path: encodeURIComponent('messaging.get-chats/' + id + '/' + receiverId)
        },
        headers: {
            'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGSh23zOl21k4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            'X-FI-SY-IP' : '127.0.0',
            'X-FI-SY-SITE-ID': 'COM',
            'X-FI-SY-DEVICE': 'DESKTOP'
        }
    });

    let chat: Chat[] = response.data;

    const res = await request({
        url: BASE_URL,
        method: 'GET',
        params: {
            path: encodeURIComponent('content.get-snaps-with/' + id + '/' + receiverId)
        },
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGSh23zOl21k4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            'X-FI-SY-IP': '127.0.0',
            'X-FI-SY-SITE-ID': 'COM',
            'X-FI-SY-DEVICE': 'DESKTOP'
        }
    });
    const snaps: Content[] = res.data;
    snaps.map((snap) => {
        let seen: boolean = false;
        const posterId = snap.posterId;
        const receiver = snap.posterId === id ? receiverId : id;

        snap.seen.map((id) => {
            if(id.toString() === receiver) {
                seen = true;
            }
        });

        const snapMessage: Chat = {
            senderId: posterId,
            receiverId: receiver,
            content: snap.url,
            timestamp: snap.timestamp,
            type: snap.type,
            isSeen: seen
        };

        chat = [...chat, snapMessage]
    })

    dispatch(personChatsSuccess(chat));
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

export const getAccount = async({id, jwtToken}: GetAccountPayload): Promise<User> => {
    return await request({
        url: BASE_URL,
        method: 'GET',
        params: {
            path: encodeURIComponent('account.get-account/' + id)
        },
        headers: {
            'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGSh23zOl21k4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            'X-FI-SY-IP' : '127.0.0',
            'X-FI-SY-SITE-ID': 'COM',
            'X-FI-SY-DEVICE': 'DESKTOP'
        }
    }).then((response) => response.data);
}

export const searchByTerm = async({term, dispatch}: SearchPayload) => {
    await request({
        url: BASE_URL,
        method: 'GET',
        params: {
            path: encodeURIComponent('account.search-by-term' + term)
        }
    }).then((response) => {
        dispatch(searchTerm(response.data));
    }).catch((error) => {
        console.error(error);
    })
}