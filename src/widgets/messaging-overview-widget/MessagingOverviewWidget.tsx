import React, {useEffect} from "react";
import ChatOverview from "../../components/messaging/ChatOverview/ChatOverview";
import ChatList from "../../components/messaging/ChatList/ChatList";
import {useDispatch, useSelector} from "react-redux";
import {sessionSelect} from "../../redux/core/session/selectors";
import {dataRequested} from "./model/effects";
import {messageSelect} from "./model/selectors";
import {closeSidebar, showSidebar} from "../../redux/core/layout/reducers";
import {useNavigate} from "react-router-dom";
import {authSelect} from "../auth-login-widget/model/selectors";

const MessagingOverviewWidget: React.FC = () => {
    const username = useSelector(sessionSelect.username);
    const userId = useSelector(sessionSelect.userId);
    const isLogged = useSelector(authSelect.isLogged);
    const jwtToken = useSelector(sessionSelect.jwtToken);
    const conversations = useSelector(messageSelect.conversations);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(showSidebar());
        if(!isLogged) {
            navigate('/login');
            dispatch(closeSidebar());
        }
        dataRequested({userId, jwtToken, dispatch});
    }, [dispatch, jwtToken, userId])

    return (
        <div>
            <ChatList username={username} conversations={conversations}/>
            <ChatOverview/>
        </div>
    );
};

export default MessagingOverviewWidget;
