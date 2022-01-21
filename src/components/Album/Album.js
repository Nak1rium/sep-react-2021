import React from 'react';

import "./Album.css";
import {Link} from "react-router-dom";

const Album = ({album:{userId,id,title}}) => {
    return (
        <div className={'album_box'}>
           <div><span>UserId:</span> {userId}</div>
           <div><span>Id:</span> {id}</div>
           <div><span>Title:</span> {title}</div>
            <div>
                <Link to={`${id}/photos`} state={id}>
                <button>Album Photos</button>
                </Link>
            </div>
        </div>
    );
};

export default Album;