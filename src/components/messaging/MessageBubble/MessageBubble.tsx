import React, {useState} from "react";
import {ReactComponent as Camera} from '../../../assets/icons/camera.svg';
import '../../../widgets/messaging-overview-widget/styles.css';
import {Chat} from "../../../widgets/messaging-overview-widget/model/types";

interface MessageBubbleProps {
    isMine: boolean
    msg: Chat
    firstCorner: boolean;
    secondCorner: boolean;
    openSnap: () => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
    msg,
    isMine,
    firstCorner,
    secondCorner,
    openSnap}) => {

    let cornersStyle = '';

    if(firstCorner && secondCorner)
        cornersStyle = 'both-corners';
    else if(firstCorner && isMine)
        cornersStyle = 'third-corner';
    else if(secondCorner && isMine)
        cornersStyle = 'second-corner';
    else if(firstCorner && !isMine)
        cornersStyle = 'forth-corner';
    else if(secondCorner && !isMine)
        cornersStyle = 'first-corner';

    const positionStyle = isMine ? 'my-message' : 'your-message';

    if(msg.type === 'snap') {
        return (
            <div className='snap-message' onClick={openSnap}>
                <div className='snap-message-bubble-header'>
                    <div className='snap-message-bubble'/>
                    <p className='snap-message-bubble-text'>{msg.isSeen ? 'Opened' : 'Click to open'}</p>
                </div>
                <div className='snap-message-bubble-icon'>
                    <Camera/>
                </div>
            </div>
        )
    } else {
        return (<div className={'message-bubble ' + cornersStyle + ' ' + positionStyle}>
            <p className={isMine? 'message-bubble-text-mine' : 'message-bubble-text'}>{msg.content}</p>
        </div>)
    }
}

export default MessageBubble;