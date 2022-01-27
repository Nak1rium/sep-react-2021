import React from 'react';

import "./Episode.css";
import {Link} from "react-router-dom";

const Episode = ({mainInfo}) => {
    const {name,air_date,episode} = mainInfo;
    return (
        <div className={'episode_box'}>
            <div>{name}</div>
            <div>{air_date}</div>
            <div>{episode}</div>
            <Link to={`${name}/characters`} state={mainInfo}>Episode characters</Link>
        </div>
    );
};

export default Episode;