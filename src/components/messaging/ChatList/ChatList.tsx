import React from "react";
import Plus from '../../../assets/icons/plus.svg';
import BText from "../../core/BText/BText";
import {Message} from "../../../widgets/messaging-overview-widget/model/types";
import MessageCard from "../MessageCard/MessageCard";
import {useDispatch} from "react-redux";
import {changeConversation} from "../../../widgets/messaging-overview-widget/model/reducers";

interface ChatListProps {
    username: string;
    conversations: Message[];
}

const ChatList: React.FC<ChatListProps> = ({username, conversations}) => {
    const dispatch = useDispatch();
    return (
        <div className='chat-list-widget'>
            <div className='chat-list-header'>
                <BText text={username}/>
                <img src={Plus} className='chat-list-header-text'/>
            </div>
            <BText text='Messages'/>
            {conversations.map((conv) =>
                <MessageCard
                    photo={conv.receiver.profilePicture}
                    fullName={conv.receiver.firstName + conv.receiver.lastName}
                    message={conv.message}
                    date={conv.date}
                    onClick={() => dispatch(changeConversation(conv.receiver))}/>
            )}
        </div>
    );
}

export default ChatList;