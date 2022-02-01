import React from 'react';

import "./Post.css";

const Post = ({post:{id,title}}) => {
    return (
        <div className={'posts_box'}>
            <div><span>Id:</span> {id}</div>
            <div><span>Title:</span> {title}</div>
        </div>
    );
};

export default Post;