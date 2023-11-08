import React, {useEffect} from "react";
import './styles.css';
import StorySlider from "../../components/feed/StorySlider/StorySlider";
import {mockPost, mockStories} from "./__tests__/mock";
import PostList from "../../components/feed/PostList/PostList";
import FeedSidebar from "../../components/feed/FeedSidebar/FeedSidebar";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {select} from "../../redux/core/session/selectors";
import {feedSelect} from "./model/selectors";
import {dataRequested} from "./model/effects";
const FeedMainWidget: React.FC = () => {
    const userId = useSelector(select.userId);
    const jwtToken = useSelector(select.jwtToken);
    const feedPosts = useSelector(feedSelect.feedPosts);
    const feedStories = useSelector(feedSelect.feedStories);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dataRequested({userId, jwtToken, dispatch})
        if(userId == null) {
            navigate('/login');
        }
    }, [dispatch, jwtToken, navigate, userId])

   return (
       <div className="widget-main">
           <div className="feed-central">
               <StorySlider stories={feedStories}/>
              <PostList posts={feedPosts}/>
           </div>
           <FeedSidebar />
       </div>
   );
};

export default FeedMainWidget;
