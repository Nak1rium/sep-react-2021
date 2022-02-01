import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import Comment from "../Comment/Comment";
import "./Comments.css";

const Comments = () => {
    const {comments} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect( ()=> {
        dispatch(getAllComments())
    },[])

    return (
        <div className={'main_comments_box'}>
            <div className={'comments_box'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;