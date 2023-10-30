import React from "react";
import {Post} from "../../../types/content";
import LText from "../LText/LText";
import BText from "../BText/BText";
import Heart from '../../../assets/icons/heart.svg';
import Chat from '../../../assets/icons/chat.svg';
import Send from '../../../assets/icons/sendFill.svg';
import Bookmark from '../../../assets/icons/bookmark.svg';
import Clock from '../../../assets/icons/clock.svg';
import Dots from '../../../assets/icons/dots-vertical.svg';
import {MEDIUM_GREY, PRIMARY_LIGHT} from "../../../utils/constants";
import Line from "../Line/Line";
import "./styles.css";

const PhotoPost: React.FC<Post> = ({user,
                              photos,
                              location,
                              description,
                              likes,
                              comments}) => {
    return (
        <div className="post-container">
            <div className="post-topbar">
                <div className="post-topbar-left">
                    <img className="post-profile-photo" src={user.profilePhoto}/>
                    <div>
                        <BText text={user.name}/>
                        {location && <p>{location}</p>}
                    </div>
                </div>
                <img className="post-icon" src={Dots}/>
            </div>
            <div className="post-image-container">
                <img className="post-image" src={photos[0]}/>
            </div>
            <div className="post-under-img-container">
                <div className="post-actions">
                    <div className="post-like-comm-share">
                        <img className="post-icon" src={Heart}/>
                        <img className="post-icon" src={Chat}/>
                        <img className="post-icon" src={Send}/>
                    </div>
                    <img className="post-icon" src={Bookmark}/>
                </div>
                <div className="post-actions">
                    <div className="post-likes">
                        {likes.slice(0, 4).map((user) => {
                            return(
                                <img key={user.id} className="post-like-image" src={user.profilePhoto}/>
                            )
                        })}
                    </div>
                    <div className="post-liked-text">
                        <LText text={'liked'}/>
                        <BText text={likes[0].username}/>
                        <LText text={' and '}/>
                        <BText text={likes.length-1 + ' more'}/>
                    </div>
                </div>
                {description && <div className="post-description">
                    <BText text={user.username}/>
                    <LText text={description}/>
                </div>}
                {comments.length > 0 && <Line padding={10}/>}
                {comments.length > 0 &&
                    <div className="post-bottom-container">
                        <div className="post-description">
                            <LText text={'div all comments'} color={MEDIUM_GREY}/>
                            <BText text={'(' + comments.length.toString() + ')'} color={PRIMARY_LIGHT}/>
                        </div>
                        <div className="post-description">
                            <img src={Clock} className="post-small-icon"/>
                            <LText text={'3h ago'} color={MEDIUM_GREY}/>
                        </div>
                    </div>
                }
                <LText text="Add a comment..."/>
                <Line />
            </div>
        </div>
    )
}

export default PhotoPost;