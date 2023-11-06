import React, {useEffect} from "react";
import './styles.css';
import StorySlider from "../../components/feed/StorySlider/StorySlider";
import {mockPost, mockStories} from "./__tests__/mock";
import PostList from "../../components/feed/PostList/PostList";
import FeedSidebar from "../../components/feed/FeedSidebar/FeedSidebar";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {select} from "../../redux/core/session/selectors";
const FeedMainWidget: React.FC = () => {
    const userId = useSelector(select.userId);
    const navigate = useNavigate();

    useEffect(() => {
        if(userId == null) {
            navigate('/login');
        }
    }, [navigate, userId])

   return (
       <div className="widget-main">
           <div className="feed-central">
               <StorySlider stories={mockStories}/>
              <PostList posts={[mockPost]}/>
           </div>
           <FeedSidebar />
       </div>
   );
};

export default FeedMainWidget;
