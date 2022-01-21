import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Comment from "../../components/Comment/Comment";
import "./PostsCommentsPage.css";

const PostsCommentsPage = () => {

    const {state} = useLocation();

    const [comments, setComments] = useState([]);
    useEffect( () => {
        postsService.getPostsCommentsById(state.userId).then(value => setComments([...value]))
    }, [state.userId])

    return (
        <div>
            <div className={'heading'}>Post Comments</div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostsCommentsPage;