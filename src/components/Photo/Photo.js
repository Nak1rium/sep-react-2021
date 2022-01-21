import React from 'react';

import "./Photo.css";

const Photo = ({photo: {albumId, id, title, thumbnailUrl}}) => {
    return (
        <div className={'photo_box'}>
            <div>
                <div>AlbumId: {albumId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </div>
            <img src={thumbnailUrl} alt={thumbnailUrl}/>
        </div>
    );
};

export default Photo;