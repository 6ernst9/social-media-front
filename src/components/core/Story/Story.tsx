import React from "react";
import {StoryType} from "../../../types/content";
import "./styles.css";
import LText from "../LText/LText";
import {PRIMARY_LIGHT} from "../../../utils/constants";

interface StoryProps {
    story: StoryType;
    onClick: () => void;
}

const Story: React.FC<StoryProps> = ({  story, onClick  }) => {
    return (
        <div className="outer-story">
            <div className="inner-story"
                 style={{ border: '3px solid ' + PRIMARY_LIGHT}}
                 onClick={onClick}>
                <img src={story.posterId.profilePhoto}/>
            </div>
            <LText text={story.posterId.username} />
        </div>
    )
}

export default Story;