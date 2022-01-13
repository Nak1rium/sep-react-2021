import React from 'react';

import './Post.css';

const Post = ({post}) => {
    return (
        <div className={'post_box'}>
            <div><span>Post ID:</span> {post.id}</div>
            <div><span>Post title:</span> {post.title}</div>
            <div><span>Post body:</span> {post.body}</div>
        </div>
    );
};

export default Post;