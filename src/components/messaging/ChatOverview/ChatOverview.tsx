import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {messageSelect} from "../../../widgets/messaging-overview-widget/model/selectors";
import {CompatClient, Stomp} from '@stomp/stompjs';

import Phone from '../../../assets/icons/phone.svg';
import Video from '../../../assets/icons/video.svg';
import Info from '../../../assets/icons/info.svg';
import Chat from '../../../assets/icons/chat.svg';
import Image from '../../../assets/icons/image.svg';
import Heart from '../../../assets/icons/heart.svg';
import Send from '../../../assets/icons/send.svg';
import Microphone from '../../../assets/icons/microphone.svg';

import BText from "../../core/BText/BText";
import LText from "../../core/LText/LText";
import Button from "../../core/Button/Button";
import MessageBubble from "../MessageBubble/MessageBubble";
import {sessionSelect} from "../../../redux/core/session/selectors";
import {getMessageShape} from "../../../utils/utils";
import {dataRequested, getPersonChats} from "../../../widgets/messaging-overview-widget/model/effects";
import {useNavigate} from "react-router-dom";
import {setCurrentProfile} from "../../../widgets/profile-overview-widget/model/reducers";

let socket: WebSocket;
let stompClient: CompatClient;

const ChatOverview: React.FC = () => {
    const currentConversation = useSelector(messageSelect.currentConversation);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwtToken = useSelector(sessionSelect.jwtToken);
    const messages = useSelector(messageSelect.currentChat);
    const id = useSelector(sessionSelect.id);
    const [message, setMessage] = useState<string>('');
    const [connected, setConnected] = useState<boolean>(false);
    const convSelected = currentConversation.userId === '';

   const updateMessages = () => {
       getPersonChats(
           {
               id,
               jwtToken,
               dispatch,
               receiverId: currentConversation.userId});
       dataRequested({id, jwtToken, dispatch});
   }

    const connect = () => {
        socket = new WebSocket('ws://localhost:8083/chat/websocket');
        stompClient = Stomp.over(socket);
        // @ts-ignore
        stompClient.connect({}, frame => {
            setConnected(true);

            stompClient.subscribe('/user/queue/reply', message => {
                updateMessages();
            });
            stompClient.subscribe('/user/queue/readStatus', message => {
                updateMessages();
            });
            stompClient.subscribe('/user/queue/contentUpdate', update => {
                updateMessages();
            });
            stompClient.subscribe('/user/queue/deleteMessage', update => {});
        });
    }

    const disconnect = () => {
        if(connected && socket){
            socket.close();
            setConnected(false);
        }
    }

    const sendMessage = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            stompClient.send("/app/sendMessage", {}, JSON.stringify({
                senderId: parseInt(id),
                receiverId: parseInt(currentConversation.userId),
                content: message,
                timestamp: new Date().toISOString()
            }));
            setMessage('');
            updateMessages();
        }
    };

    const onMessageChange = (event: React.FormEvent<HTMLInputElement>) => setMessage(event.currentTarget.value);

    useEffect(() => {
        //connect();
        return () => {
            if(stompClient) disconnect();
        }
    }, [])
    return (
        <div>
            {convSelected && (
                <div className='chat-overview-opening'>
                    <div className='chat-overview-opening-container'>
                        <div className='chat-overview-opening-icon-back'>
                            <img src={Chat} className='chat-overview-opening-icon'/>
                        </div>
                        <BText text='Your messages'/>
                        <LText text='Send private photos and messages to a friend or group'/>
                        <Button content='Send message'/>
                    </div>
                </div>
            )}
            {!convSelected && (
                <div className='chat-overview'>
                    <div className='chat-overview-header'>
                        <div className='chat-overview-header-info'>
                            <img src={currentConversation.profilePicture} className='chat-overview-header-picture' onClick={() => {
                                dispatch(setCurrentProfile(currentConversation.userId));
                                navigate('/profile');
                            }}/>
                            <BText text={currentConversation.fullName} onClick={() => {
                                dispatch(setCurrentProfile(currentConversation.userId));
                                navigate('/profile');
                            }}/>
                        </div>
                        <div className='chat-overview-header-actions'>
                            <img src={Phone} className='chat-overview-icon'/>
                            <img src={Video} className='chat-overview-icon'/>
                            <img src={Info} className='chat-overview-icon' onClick={() => {
                                dispatch(setCurrentProfile(currentConversation.userId));
                                navigate('/profile');
                            }}/>
                        </div>
                    </div>
                    <div className='chat-overview-messages-container'>
                        {messages.map((msj, index) =>
                            <MessageBubble
                                content={msj.content}
                                isMine={msj.senderId === id}
                                firstCorner={getMessageShape({messages, index})[0]}
                                secondCorner={getMessageShape({messages, index})[1]}/>
                        )}
                    </div>
                    <div className='chat-overview-bottom'>
                        <div className='chat-overview-form'>
                            <input
                                className='chat-overview-chat'
                                placeholder='Message...'
                                value={message}
                                onChange={onMessageChange}/>
                            {message.length === 0 && (
                                <div className='chat-overview-bottom-icons'>
                                    <img src={Microphone} className='chat-overview-icon'/>
                                    <img src={Image} className='chat-overview-icon'/>
                                    <img src={Heart} className='chat-overview-icon'/>
                                </div>
                            )}
                            {message.length > 0 && (
                                <div className='chat-overview-bottom-icons'>
                                    <img src={Send} className='chat-overview-icon' onClick={() => sendMessage()}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatOverview;