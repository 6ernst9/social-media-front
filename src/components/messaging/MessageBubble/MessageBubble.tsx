import React from "react";

interface MessageBubbleProps {
    content: string;
    isMine: boolean;
    firstCorner: boolean;
    secondCorner: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
    content,
    isMine,
    firstCorner,
    secondCorner}) => {
    let cornersStyle = '';
    if(firstCorner && secondCorner)
        cornersStyle = 'both-corners';
    else if(firstCorner)
        cornersStyle = 'first-corner';
    else if(secondCorner)
        cornersStyle = 'second-corner';

    const positionStyle = isMine ? 'my-message' : 'your-message';
    return <div className={'message-bubble ' + cornersStyle + ' ' + positionStyle }>
        <p>{content}</p>
    </div>
}

export default MessageBubble;