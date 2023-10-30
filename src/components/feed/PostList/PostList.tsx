import React from "react";
import {Post} from "../../../types/content";
import PhotoPost from "../../core/PhotoPost/PhotoPost";

interface PostListProps {
    posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return(
        <div style = {{
            width:'35vw',
            display: 'flex',
            flexDirection: 'column',
            gap: 15
        }}>
            {posts.map((post) => {
                return <PhotoPost {...post} />
            })}
        </div>
    );
}

export default PostList;