import React from "react";
import SuggestedFriend from "../SuggestedFriend/SuggestedFriend";
import {mockUsers} from "../../../widgets/feed-main-widget/__tests__/mock";
import './styles.css';
import BText from "../../core/BText/BText";
import UserCard from "../UserCard/UserCard";
import {DARK_GREY} from "../../../utils/constants";
import LText from "../../core/LText/LText";

const FeedSidebar: React.FC = () => {
    return (
        <div className="feed-sidebar-card">
            <UserCard
                name={mockUsers[0].name}
                username={mockUsers[0].username}
                profilePhoto={mockUsers[0].profilePhoto}/>
            <div className="suggested-card">
                <div className="suggested-text">
                    <BText text="Suggested for you" color={DARK_GREY}/>
                    <BText text="See all"/>
                </div>
                {mockUsers.map((user) => (
                    <SuggestedFriend
                    name={user.username}
                    profilePicture={user.profilePhoto}
                    commonFollower={user.username} />
                    )
                )}
            </div>
            <div className="suggested-card">
                <LText text="About • Help • Privacy • Terms • Language" color={DARK_GREY}/>
                <LText text="©2023 YOLO FROM ROBERT ERNST" color={DARK_GREY}/>
            </div>

        </div>
    )
}

export default FeedSidebar;