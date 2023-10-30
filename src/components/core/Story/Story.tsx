import React from "react";
import {StoryType} from "../../../types/auth";
import "./styles.css";
import LText from "../LText/LText";
import {PRIMARY_LIGHT} from "../../../utils/constants";

const Story: React.FC<StoryType> = ({ src, user  }) => {
    return (
        <div className="outer-story">
            <div className="inner-story"
                 style={{ border: '3px solid ' + PRIMARY_LIGHT}}>
                <img src={src}/>
            </div>
            <LText text={user} />
        </div>
    )
}

export default Story;