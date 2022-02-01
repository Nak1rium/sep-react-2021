import React from 'react';

import "./User.css";

const User = ({user:{id,name,username,email}}) => {
    return (
        <div className={'user_box'}>
            <div><span>Id:</span> {id}</div>
            <div><span>Name:</span> {name}</div>
            <div><span>Username:</span> {username}</div>
            <div><span>Email:</span> {email}</div>
        </div>
    );
};

export default User;