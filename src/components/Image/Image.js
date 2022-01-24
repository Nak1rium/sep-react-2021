import React, {useEffect, useState} from 'react';

import {baseURL} from "../../configs/urls";
import {useLocation} from "react-router-dom";
import "./Image.css";

const Image = () => {

    const url = useLocation();

    const [imgUrl, setImgUrl] = useState(null);

    const [random, setRandom] = useState(Math.random());

    const generateRandom = () => {
        setRandom(Math.random())
    }

    useEffect(() => {
        setImgUrl(url.pathname + `?random=${random}`)
    }, [url, random]);

    return (
        <div className={'image'}>
            {imgUrl && <img src={`${baseURL}${imgUrl}`} alt={url}/>}
            <button onClick={generateRandom}>Update</button>
        </div>
    );
};

export default Image;