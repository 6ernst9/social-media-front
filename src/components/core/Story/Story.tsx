import React from "react";
import {StoryType} from "../../../types/content";
import "./styles.css";
import LText from "../LText/LText";
import {useSelector} from "react-redux";
import {sessionSelect} from "../../../redux/core/session/selectors";

interface StoryProps {
    story: StoryType;
    onClick: () => void;
}

const Story: React.FC<StoryProps> = ({  story, onClick  }) => {
    const id = useSelector(sessionSelect.id);

    const checkIfSeen = () => {
        story.seen.forEach((user) => {
            if(user.id === id) {
                return true;
            }
        })
        return false;
    };

    return (
        <div className="outer-story">
            <div className={checkIfSeen() ? "inner-story-seen" : "inner-story"}
                 onClick={onClick}>
                <img src={story.posterId.profilePhoto}/>
            </div>
            <p>{story.posterId.username}</p>
        </div>
    )
}

export default Story;