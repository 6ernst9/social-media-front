import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showSidebar} from "../../redux/core/layout/reducers";
import {sessionSelect} from "../../redux/core/session/selectors";
import LText from "../../components/core/LText/LText";
import Button from "../../components/core/Button/Button";
import Dots from '../../assets/icons/dots-vertical.svg';
import {profileSelect} from "./model/selectors";
import BText from "../../components/core/BText/BText";
import StorySlider from "../../components/feed/StorySlider/StorySlider";
import Credits from "../../components/core/Credits/Credits";

const ProfileOverviewWidget: React.FC = () => {
    const dispatch = useDispatch();
    const userId = useSelector(sessionSelect.userId);

    const profilePhoto = useSelector(profileSelect.profilePicture);
    const username = useSelector(profileSelect.profileUsername);
    const name = useSelector(profileSelect.profileFullName);
    const profileUserId = useSelector(profileSelect.profileUserId);
    const isPrivate = useSelector(profileSelect.profilePrivate);
    const highlights = useSelector(profileSelect.profileHighlights);
    const followersNumber = useSelector(profileSelect.followersNumber);
    const followingNumber = useSelector(profileSelect.followingNumber);
    const description = useSelector(profileSelect.profileDescription);
    const posts = useSelector(profileSelect.profilePosts);
    const connection = useSelector(profileSelect.profileConnection);

    const myProfile = userId === profileUserId;

    useEffect(() => {
        dispatch(showSidebar());
    })
    return (
        <div className='profile-container'>
            <div className='profile-header-container'>
                <img src={profilePhoto} className='profile-profile-photo'/>
                <div className='profile-info'>
                    <div className='profile-info-head'>
                        <LText text={username}/>
                        <Button content={myProfile ? 'Edit Profile' : connection}/>
                        <Button content={myProfile ? 'View Archive' : 'Message'}/>
                        <img src={Dots}/>
                    </div>
                    <div className='profile-info-numbers'>
                        <div className='profile-info-number'>
                            <BText text={posts.length.toString()}/>
                            <LText text={' posts'}/>
                        </div>
                        <div className='profile-info-number'>
                            <BText text={followersNumber.toString()}/>
                            <LText text={' followers'}/>
                        </div>
                        <div className='profile-info-number'>
                            <BText text={followingNumber.toString()}/>
                            <LText text={' following'}/>
                        </div>
                    </div>
                    <BText text={name}/>
                    <LText text={description}/>
                </div>
                <StorySlider stories={highlights}/>
                {((isPrivate && connection === "Following") || !isPrivate ) &&
                    <div className='profile-posts-grid'>
                    {posts.map((post) => {
                        return <img src={post.photo} key={post.contentId}/>
                    })}
                </div>}
                <Credits/>
            </div>
        </div>
    );
};

export default ProfileOverviewWidget;
