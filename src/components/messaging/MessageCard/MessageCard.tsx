import React from "react";
import LText from "../../core/LText/LText";

interface MessageCardProps {
    photo: string;
    fullName: string;
    message: string;
    date: string;
}

const MessageCard: React.FC<MessageCardProps> =
    ({ photo,
         fullName,
         message,
         date}) => {
    return (
        <div className='message-card'>
            <img src={photo} className='message-card-img'/>
            <div className='message-card-text'>
                <LText text={fullName}/>
                <LText text={message + ' • ' + date + 'h'}/>
            </div>
        </div>
    )
};

export default MessageCard;