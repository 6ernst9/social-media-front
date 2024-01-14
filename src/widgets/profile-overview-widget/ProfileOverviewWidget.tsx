import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebar, showSidebar} from "../../redux/core/layout/reducers";
import {sessionSelect} from "../../redux/core/session/selectors";
import LText from "../../components/core/LText/LText";
import Button from "../../components/core/Button/Button";
import Dots from '../../assets/icons/dots-vertical.svg';
import {profileSelect} from "./model/selectors";
import BText from "../../components/core/BText/BText";
import Credits from "../../components/core/Credits/Credits";
import {dataRequested} from "./model/effects";
import {authSelect} from "../auth-login-widget/model/selectors";
import {useNavigate} from "react-router-dom";
import './styles.css';
import {setCurrentProfile} from "./model/reducers";
import Line from "../../components/core/Line/Line";

const ProfileOverviewWidget: React.FC = () => {
    const userId = useSelector(sessionSelect.userId);
    const jwtToken = useSelector(sessionSelect.jwtToken);

    const profilePhoto = useSelector(profileSelect.profilePicture);
    const username = useSelector(profileSelect.profileUsername);
    const name = useSelector(profileSelect.profileFullName);
    const profileUserId = useSelector(profileSelect.profileUserId);
    const followersNumber = useSelector(profileSelect.followersNumber);
    const followingNumber = useSelector(profileSelect.followingNumber);
    const description = useSelector(profileSelect.profileDescription);
    const posts = useSelector(profileSelect.profilePosts);
    const connection = useSelector(profileSelect.profileConnection);
    const isPrivate = useSelector(profileSelect.profilePrivate);

    const isMyProfile = userId === profileUserId;
    const isLogged = useSelector(authSelect.isLogged);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(profileUserId === '') dispatch(setCurrentProfile(userId));
    useEffect(() => {
        dispatch(showSidebar());

        if(!isLogged) {
            navigate('/login');
            dispatch(closeSidebar());
        }
        dataRequested({userId: profileUserId, myUserId: userId, jwtToken, dispatch});
    }, [jwtToken, profileUserId])
    return (
        <div className='profile-container'>
            <div className='profile-header-container'>
                <img src={profilePhoto} className='profile-profile-photo'/>
                <div className='profile-info'>
                    <div className='profile-info-head'>
                        <BText text={username}/>
                        <Button content={isMyProfile ? 'Edit Profile' : connection}/>
                        <Button content={isMyProfile ? 'View Archive' : 'Message'}/>
                        <img src={Dots}/>
                    </div>
                    <div className='profile-info-number'>
                        <div className='profile-info-numbers'>
                            <BText text={posts.length.toString()}/>
                            <LText text={' posts'}/>
                        </div>
                        <div className='profile-info-numbers'>
                            <BText text={followersNumber.toString()}/>
                            <LText text={' followers'}/>
                        </div>
                        <div className='profile-info-numbers'>
                            <BText text={followingNumber.toString()}/>
                            <LText text={' following'}/>
                        </div>
                    </div>
                    <div className='profile-info-identity'>
                        <BText text={name}/>
                        <LText text={description}/>
                    </div>
                </div>
            </div>
            <Line/>
            {(isMyProfile || (isPrivate && connection === "Following") || !isPrivate ) &&
                <div className='profile-posts-grid'>
                    {posts.map((post) => {
                        return <img src={post.photo} key={post.contentId} className='profile-post-image'/>
                    })}
                </div>}
            <Credits/>
            <Line/>
        </div>
    );
};

export default ProfileOverviewWidget;
