import React, {useEffect} from "react";
import ChatOverview from "../../components/messaging/ChatOverview/ChatOverview";
import ChatSidebar from "../../components/messaging/ChatSidebar/ChatSidebar";
import {useDispatch, useSelector} from "react-redux";
import {sessionSelect} from "../../redux/core/session/selectors";
import {dataRequested} from "./model/effects";
import {messageSelect} from "./model/selectors";
import {closeSidebar, showSidebar} from "../../redux/core/layout/reducers";
import {useNavigate} from "react-router-dom";
import {authSelect} from "../auth-login-widget/model/selectors";
import {closeProfile} from "../profile-overview-widget/model/reducers";
import './styles.css';

const MessagingOverviewWidget: React.FC = () => {
    const profilePicture = useSelector(sessionSelect.profilePicture);
    const userId = useSelector(sessionSelect.userId);
    const isLogged = useSelector(authSelect.isLogged);
    const jwtToken = useSelector(sessionSelect.jwtToken);
    const conversations = useSelector(messageSelect.conversations);
    const stories = useSelector(messageSelect.stories);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(showSidebar());
        dispatch(closeProfile());
        if(!isLogged) {
            navigate('/login');
            dispatch(closeSidebar());
        }
        dataRequested({userId, jwtToken, dispatch});
    }, [dispatch, jwtToken, userId])

    return (
        <div className='messaging-overview'>
            <ChatSidebar
                stories={stories}
                jwtToken={jwtToken}
                userId={userId}
                profilePicture={profilePicture}
                conversations={conversations}/>
            <ChatOverview/>
        </div>
    );
};

export default MessagingOverviewWidget;
