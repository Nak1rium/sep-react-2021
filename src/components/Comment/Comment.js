import React from 'react';

import "./Comment.css";

const Comment = ({comment:{id,name,email,body}}) => {
    return (
        <div className={'comment_box'}>
            <div><span>Id:</span> {id}</div>
            <div><span>Name:</span> {name}</div>
            <div><span>Email:</span> {email}</div>
            <div><span>Body:</span> {body}</div>
        </div>
    );
};

export default Comment;