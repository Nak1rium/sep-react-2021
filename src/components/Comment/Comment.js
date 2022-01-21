import React from 'react';

import  "./Comment.css";

const Comment = ({comment:{postId,id,name,email,body}}) => {
    return (
        <div className={'comment_main'}>
            <div><span>PostId:</span> {postId}</div>
            <div><span>Id:</span> {id}</div>
            <div><span>Name:</span> {name}</div>
            <div><span>Email:</span> {email}</div>
            <div><span>Body:</span> {body}</div>
        </div>
    );
};

export default Comment;