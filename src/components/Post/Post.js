import React from 'react';
import {Link} from "react-router-dom";

import "./Post.css";

const Post = ({post}) => {
    const {id, title} = post;

    const componentDidMount = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={'post_box'}>
            <div><span>Title:</span> {title}</div>
            <div>
                <Link to={id.toString()} state={post}>
                <button onClick={componentDidMount}>Post Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;