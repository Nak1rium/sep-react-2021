import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/post.slice";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
    const {posts} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();


    useEffect( ()=> {
        dispatch(getAllPosts())
    },[])
    return (
        <div className={'main_box_posts'}>
            <div className={'box_of_posts'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default Posts;