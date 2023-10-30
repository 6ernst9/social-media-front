import React from "react";
import './styles.css';
import StorySlider from "../../components/StorySlider/StorySlider";
import {mockPost, mockStories} from "./mock";
import PostList from "../../components/PostList/PostList";
import FeedSidebar from "../../components/FeedSidebar/FeedSidebar";
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
