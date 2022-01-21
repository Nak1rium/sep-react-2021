import React from 'react';
import {Link} from "react-router-dom";

import "./User.css";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <>
            <div className={'user_main'}>
                <div>Name: {name}</div>
                <div>
                    <Link to={id.toString()} state={user}>
                        <button>User Details</button>
                    </Link>
                    <Link to={`${id}/albums`} state={user}>
                        <button>User Albums</button>
                        </Link>
                </div>
            </div>
        </>
);
};

export default User;