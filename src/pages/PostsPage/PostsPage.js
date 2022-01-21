import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";
import "./PostPage.css";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    useEffect( () => {
        postsService.getAll().then(value => setPosts([...value]))
    },[])

    return (
        <div className={'post_page_main'}>
            <div className={'post_page_box'}>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;