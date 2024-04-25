import React, {useEffect, useState} from "react";
import {StoryType} from "../../../types/content";
import Left from "./../../../assets/icons/arrow-left.svg";
import Right from "./../../../assets/icons/arrow-right.svg";
import Dots from "./../../../assets/icons/dots-vertical.svg";
import './styles.css';
import {seeStory} from "../../../widgets/messaging-overview-widget/model/effects";
import {useDispatch, useSelector} from "react-redux";
import {sessionSelect} from "../../../redux/core/session/selectors";

interface StoryViewProps {
    stories: StoryType[];
    initialIndex: number;
    onStoryEnd: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({stories, initialIndex, onStoryEnd})=> {
    const [storyIndex, setStoryIndex] = useState(initialIndex);
    const id = useSelector(sessionSelect.id);
    const dispatch = useDispatch();

    useEffect(() => {
       seenStory();
        const timer = setTimeout(() => {
            goToNextStory();
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [storyIndex, stories]);

    const goToNextStory = () => {
        if (storyIndex < stories.length - 1) {
            setStoryIndex(storyIndex + 1);
        } else {
            onStoryEnd();
        }
    };

    const goToPreviousStory = () => {
        if (storyIndex > 0) {
            setStoryIndex(storyIndex - 1);
        } else {
          onStoryEnd();
        }
    };

    const checkIfSeen = () => {
        stories[storyIndex].seen.forEach((i) => {
            if(i.id === id) {
                return true;
            }
        })
        return false;
    }

    const seenStory = () => {
        if(!checkIfSeen()) {
            seeStory({id, jwtToken: '', storyId: stories[storyIndex].id, dispatch})
        }
    }

    return (
        <div className='messaging-story'>
            <div className='messaging-story-icon' onClick={goToPreviousStory}>
                <img src={Left} className='messaging-story-icon-arrow'/>
            </div>
            <div className='messaging-story-main'>
                <div className='messaging-story-main-header'>
                    <div className='messaging-story-main-header-user'>
                        <img className='messaging-story-main-header-user-profile' src={stories[storyIndex].posterId.profilePhoto}/>
                        <p className='messaging-story-title'>{stories[storyIndex].posterId.username}</p>
                    </div>  
                    <div className='messaging-story-icon'>
                        <img src={Dots} className='messaging-story-icon-arrow'/>
                    </div>
                </div>
                <img src={stories[storyIndex].url} className='messaging-story-photo'/>
            </div>
            <div className='messaging-story-icon' onClick={goToNextStory}>
                <img src={Right} className='messaging-story-icon-arrow'/>
            </div>
        </div>
    )
}

export default StoryView;