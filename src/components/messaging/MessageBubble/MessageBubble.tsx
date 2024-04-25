import React from "react";
import Camera from '../../../assets/icons/camera.svg';
import '../../../widgets/messaging-overview-widget/styles.css';

interface MessageBubbleProps {
    isSnap: boolean
    content: string;
    isMine: boolean;
    isSeen: boolean;
    firstCorner: boolean;
    secondCorner: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
    content,
    isSnap,
    isSeen,
    isMine,
    firstCorner,
    secondCorner}) => {
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
    if(isSnap) {
        return (
            <div className='snap-message'>
                <div className='snap-message-bubble-header'>
                    <div className='snap-message-bubble'/>
                    <p className='snap-message-bubble-text'>{isSeen ? 'Opened' : 'Click to open'}</p>
                </div>
                <div className='snap-message-bubble-icon'>
                    <img src={Camera} className='snap-message-bubble-icon-camera'/>
                </div>
            </div>
        )
    } else {
        return (<div className={'message-bubble ' + cornersStyle + ' ' + positionStyle}>
            <p className={isMine? 'message-bubble-text-mine' : 'message-bubble-text'}>{content}</p>
        </div>)
    }
}

export default MessageBubble;