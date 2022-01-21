import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {usersService} from "../../services/users.service";
import UserPost from "../../components/UserPost/UserPost";
import "./UserPostsPage.css";

const UserPostsPage = () => {

        const {state} = useLocation();

        const [posts, setPosts] = useState([]);

        useEffect( () => {
            usersService.getUserPostsById(state.id).then(value => setPosts([...value]))
        },[state.id])

    return (
        <div>
           <div className={'user_posts_heading'}>User Posts</div>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostsPage;