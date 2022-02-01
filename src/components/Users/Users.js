import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import "./Users.css";
import User from "../User/User";
import {getAllUsers} from "../../store";

const Users = () => {
    const {users} = useSelector(state => state['usersReducer']);
    const dispatch = useDispatch();


    useEffect( ()=> {
        dispatch(getAllUsers())
    },[])

    return (
        <div className={'main_box_users'}>
            <div className={'users_box'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default Users;