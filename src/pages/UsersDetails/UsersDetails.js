import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";

import "./UserDetails.css";

const UsersDetails = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const [user, setUser] = useState(null);

    useEffect( () => {
        if (state) {
            setUser(state)
            return
        }
        usersService.getUserById(id).then(value => setUser({...value}))
    },[id,state])

    return (
        <>
            {user && (
                <div>
                   <div className={'user_details_heading'}>User Details</div>
                    <div className={'user_details_box'}>
                        <div><span>Id:</span> {user.id}</div>
                        <div><span>Name:</span> {user.name}</div>
                        <div><span>Username:</span> {user.username}</div>
                        <div><span>Email:</span> {user.email}</div>
                        <div>
                            <Link to={'posts'} state={state}>
                                <button>User Posts</button>
                            </Link>
                        </div>
                    </div>
                    <div><Outlet/></div>
                </div>
            )}
        </>
    );
};

export default UsersDetails;