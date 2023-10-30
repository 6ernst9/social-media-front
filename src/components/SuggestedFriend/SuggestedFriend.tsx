import React from "react";
import BText from "../BText/BText";
import LText from "../LText/LText";
import './styles.css';
import {DARK_GREY, PRIMARY_LIGHT} from "../../utils/constants";

interface SuggestedFriendProps {
    name: string;
    profilePicture: string;
    commonFollower: string;
}

const SuggestedFriend: React.FC<SuggestedFriendProps> = ({
                                            name,
                                            profilePicture,
                                            commonFollower
                                        }) => {
    return (
        <div className="suggested-friend-card">
            <div className="suggested-friend-text-img">
                <img src={profilePicture} className="suggested-friend-photo"/>
                <div className="suggested-friend-text">
                    <BText text={name}/>
                    <LText text={"Followed by " + commonFollower + " + more"}/>
                </div>
            </div>
            <div className="suggested-friend-follow">
                <BText text='Follow' color={PRIMARY_LIGHT}/>
            </div>
        </div>
    )
}

export default SuggestedFriend;