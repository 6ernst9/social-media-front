import React from "react";
import LText from "../../core/LText/LText";
import BText from "../../core/BText/BText";
import {getTime} from "../../../utils/utils";

interface MessageCardProps {
    photo: string;
    fullName: string;
    message: string;
    date: string;
    isSeen: boolean;
    onClick: () => void;
}

const MessageCard: React.FC<MessageCardProps> =
    ({ photo,
         fullName,
         message,
         date,
        isSeen,
         onClick}) => {
    return (
        <div className='message-card' onClick={onClick}>
            <div className='message-card-right'>
                <img src={photo} className='message-card-img'/>
                <div className='message-card-text'>
                    <p className='message-card-title'>{fullName}</p>
                    {isSeen && (
                        <p className='message-card-message'>{message + ' • ' + getTime(date)}</p>
                    )}
                    {!isSeen && (
                        <p className='message-card-message message-seen'>{message + ' • ' + getTime(date)}</p>
                    )}
                </div>
            </div>
            <div className={isSeen ? 'message-card-bubble-seen' : 'message-card-bubble'}/>

        </div>
    )
};

export default MessageCard;