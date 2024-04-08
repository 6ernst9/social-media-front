import React from "react";
import Plus from '../../../assets/icons/plus.svg';
import {Message} from "../../../widgets/messaging-overview-widget/model/types";
import MessageCard from "../MessageCard/MessageCard";
import {useDispatch} from "react-redux";
import {changeConversation} from "../../../widgets/messaging-overview-widget/model/reducers";
import {getPersonChats} from "../../../widgets/messaging-overview-widget/model/effects";
import SearchBar from "../SearchBar/SearchBar";
import StorySlider from "../StorySlider/StorySlider";
import {StoryType} from "../../../types/auth";

interface ChatListProps {
    profilePicture: string;
    jwtToken: string;
    userId: string;
    conversations: Message[];
    stories: StoryType[];
}

const ChatSidebar: React.FC<ChatListProps> = ({profilePicture, jwtToken, userId, stories, conversations}) => {
    const dispatch = useDispatch();

    return (
        <div className='chat-list-widget'>
            <div className='chat-list-header'>
                <img src={profilePicture} className='chat-list-header-profile'/>
                <img src={Plus} className='chat-list-header-logo'/>
                <div className='chat-list-header-icons'>
                    <img src={Plus} className='chat-list-header-icon'/>
                    <img src={Plus} className='chat-list-header-icon message'/>
                </div>
            </div>
            <StorySlider stories={stories}/>
            <SearchBar/>
            {conversations.map((conv, index) =>
                <MessageCard
                    key={index}
                    photo={conv.senderId.userId === userId ? conv.receiverId.profilePicture : conv.senderId.profilePicture}
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
                                userId: userId,
                                jwtToken,
                                dispatch,
                                receiverId: conv.senderId.userId === userId ? conv.receiverId.userId : conv.senderId.userId})
                    }}/>
            )}
        </div>
    );
}

export default ChatSidebar;