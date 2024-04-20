import React from "react";
import Logo from '../../../assets/icons/logo-header.svg';
import Edit from '../../../assets/icons/edit.svg';
import Add from '../../../assets/icons/user-plus.svg';
import {Message} from "../../../widgets/messaging-overview-widget/model/types";
import MessageCard from "../MessageCard/MessageCard";
import {useDispatch} from "react-redux";
import {changeConversation} from "../../../widgets/messaging-overview-widget/model/reducers";
import {getPersonChats} from "../../../widgets/messaging-overview-widget/model/effects";
import SearchBar from "../SearchBar/SearchBar";
import StorySlider from "../StorySlider/StorySlider";
import {StoryType} from "../../../types/content";

interface ChatListProps {
    profilePhoto: string;
    jwtToken: string;
    userId: string;
    conversations: Message[];
    stories: StoryType[];
}

const ChatSidebar: React.FC<ChatListProps> = ({profilePhoto, jwtToken, userId, stories, conversations}) => {
    const dispatch = useDispatch();

    return (
        <div className='chat-list-widget'>
            <div className='chat-list-header'>
                <img src={profilePhoto} className='chat-list-header-profile'/>
                <img src={Logo} className='chat-list-header-logo'/>
                <div className='chat-list-header-icons'>
                    <div className='chat-list-header-icon-back'>
                        <img src={Add} className='chat-list-header-icon'/>
                    </div>
                    <div className='chat-list-header-icon-back header-icon-message'>
                        <img src={Edit} className='chat-list-header-icon header-message-icon'/>
                    </div>
                </div>
            </div>
            <StorySlider stories={stories}/>
            <SearchBar/>
            {conversations.map((conv, index) =>
                <MessageCard
                    key={index}
                    photo={conv.senderId.userId === userId ? conv.receiverId.profilePhoto : conv.senderId.profilePhoto}
                    fullName={ conv.senderId.userId === userId
                        ? conv.receiverId.fullName
                        : conv.senderId.fullName}
                    message={conv.content}
                    date={conv.timestamp}
                    isSeen={conv.isSeen}
                    onClick={() => {
                        dispatch(changeConversation(conv.senderId.userId === userId ? conv.receiverId : conv.senderId));

                        getPersonChats(
                            {
                                id: userId,
                                jwtToken,
                                dispatch,
                                receiverId: conv.senderId.userId === userId ? conv.receiverId.userId : conv.senderId.userId})
                    }}/>
            )}
        </div>
    );
}

export default ChatSidebar;