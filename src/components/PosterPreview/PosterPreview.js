import React from 'react';

import "./PosterPreview.css";
import {urls} from "../../configs/urls";

const PosterPreview = ({poster_path,title}) => {
    return (
        <>
            {poster_path ?
            <img className={'poster_preview_img'} src={urls.images + poster_path} alt={title}/>
                :
                <div className={'poster_preview_img'} style={{background:"lightgrey"}}></div>
            }
            <div className={'poster_preview_img play_button_box'}>
                <div className={'play_button'}></div>
            </div>
        </>
    );
};

export default PosterPreview;