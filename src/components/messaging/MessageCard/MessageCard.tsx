import React from "react";
import {getTime} from "../../../utils/utils";
import {ReactComponent as SendFill} from "../../../assets/icons/sendFill.svg";
import {ReactComponent as Send} from "../../../assets/icons/send.svg";

interface MessageCardProps {
    photo: string;
    fullName: string;
    date: string;
    isMine: boolean;
    isSeen: boolean;
    onClick: () => void;
}

const MessageCard: React.FC<MessageCardProps> =
    ({ photo,
         fullName,
         date,
        isSeen,
        isMine,
         onClick}) => {
    let message;
    if(isMine && !isSeen) {
        message = 'Sent';
    }
    if(isMine && isSeen) {
        message = 'Opened';
    }
    if(!isMine && !isSeen) {
        message = 'New Chat';
    }
    if(!isMine && isSeen) {
        message = 'Received';
    }

    return (
        <div className='message-card' onClick={onClick}>
            <div className='message-card-right'>
                <img src={photo} className='message-card-img'/>
                <div className='message-card-text'>
                    <p className='message-card-title'>{fullName}</p>
                    {(isSeen || isMine) && (
                        <div className='message-card-bottom'>
                            {isMine && isSeen && <Send/>}
                            {isMine && !isSeen && <SendFill/>}
                            <p className='message-card-message'>{message + ' • ' + getTime(date)}</p>
                        </div>
                    )}
                    {!isSeen && !isMine && (
                        <p className='message-card-message message-seen'>{message + ' • ' + getTime(date)}</p>
                    )}
                </div>
            </div>
            {!isMine && <div className={isSeen ? 'message-card-bubble-seen' : 'message-card-bubble'}/>}

        </div>
    )
};

export default MessageCard;