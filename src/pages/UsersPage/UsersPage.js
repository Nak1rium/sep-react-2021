import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import User from "../../components/User/User";
import "./UsersPage.css";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <>
            <div className={'users_page_box'}>
                <div className={'users_page_main'}>
                    <h1>Users</h1>
                    {users.map(user => <User key={user.id} user={user}/>)}
                </div>
                <div><Outlet/></div>
            </div>
        </>
    );
};

export default UsersPage;