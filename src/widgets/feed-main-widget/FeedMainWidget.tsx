import React from "react";
import './styles.css';
import StorySlider from "../../components/feed/StorySlider/StorySlider";
import {mockPost, mockStories} from "./__tests__/mock";
import PostList from "../../components/feed/PostList/PostList";
import FeedSidebar from "../../components/feed/FeedSidebar/FeedSidebar";
const FeedMainWidget: React.FC = () => {
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
