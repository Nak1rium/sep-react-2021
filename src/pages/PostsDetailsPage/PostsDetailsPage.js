import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import "./PostsDetailsPage.css";


const PostsDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postsService.getById(id).then(value => setPost({...value}))
    }, [id, state])

    return (
        <>
            {post && (
                <div className={'main_posts_details'}>
                    <h1>Post Details</h1>
                    <div className={'main_posts_details_box'}>
                        <div><span>Id:</span> {post.id}</div>
                        <div><span>UserId:</span> {post.userId}</div>
                        <div><span>Title:</span> {post.title}</div>
                        <div><span>Body:</span> {post.body}</div>
                        <div>
                            <Link to={'comments'} state={state}>
                                <button>Posts comments</button>
                            </Link>
                        </div>
                    </div>
                    <div><Outlet/></div>
                </div>
            )}
        </>
    );
};

export default PostsDetailsPage;