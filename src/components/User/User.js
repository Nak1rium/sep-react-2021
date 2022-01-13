import React from 'react';

import './User.css';
import Btn from "../Btn/Btn";

const User = ({user: {id, name, email}, getUserId}) => {
    return (
        <div className={'box'}>
            <div>
                <div><span>User id:</span> {id} </div>
                <div><span>User name:</span> {name} </div>
                <div><span>User email:</span> {email} </div>
            </div>
            <Btn onClick={getUserId} id={id} title={'GetId'}/>
        </div>
    );
};

export default User;