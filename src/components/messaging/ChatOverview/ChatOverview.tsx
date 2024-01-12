import React, {useState} from "react";
import {useSelector} from "react-redux";
import {messageSelect} from "../../../widgets/messaging-overview-widget/model/selectors";
import BText from "../../core/BText/BText";
import Phone from '../../../assets/icons/phone.svg';
import Video from '../../../assets/icons/video.svg';
import Dots from '../../../assets/icons/dots-vertical.svg';

const ChatOverview: React.FC = () => {
    const currentConversation = useSelector(messageSelect.currentConversation);
    const [message, setMessage] = useState<string>('');

    return (
        <div className='chat-overview'>
            <div className='chat-overview-header'>
                <img src={currentConversation.profilePicture}/>
                <BText text={currentConversation.firstName + ' ' + currentConversation.lastName}/>
                <img src={Phone} className='chat-overview-header-icon'/>
                <img src={Video} className='chat-overview-header-icon'/>
                <img src={Dots} className='chat-overview-header-icon'/>
            </div>
            <div className='chat-overview-bottom'>
                <input className='chat-overview-chat' placeholder='Message...'/>
            </div>
        </div>
    );
}

export default ChatOverview;