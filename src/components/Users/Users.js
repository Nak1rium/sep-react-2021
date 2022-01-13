import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css';
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const [user, setUser] = useState(null);
    const getUserId = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setUser(value))
    }

    const [posts, setPosts] = useState(null);
    const getPostsByUserId = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }

    return (
        <div>
            <div className={'main_users'}>
                <div className={'container'}>
                    <div className={'heading'}>Users</div>
                    {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
                {user && <UserDetails user={user} getPostsByUserId={getPostsByUserId}/>}
            </div>
            <div className={'posts_box'}>{posts && <Posts posts={posts}/>}</div>
        </div>
    );
};

export default Users;