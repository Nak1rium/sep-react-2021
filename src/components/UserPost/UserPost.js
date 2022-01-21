import React from 'react';

import "./UserPost.css";

const UserPost = ({post:{userId,id,title,body}}) => {
    return (
        <div className={'user_post_box'}>
            <div><span>UserId:</span> {userId}</div>
            <div><span>Id:</span> {id}</div>
            <div><span>Title:</span> {title}</div>
            <div><span>Body:</span> {body}</div>
        </div>
    );
};

export default UserPost;