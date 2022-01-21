import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";
import Album from "../../components/Album/Album";
import "./UserAlbumsPage.css";

const UserAlbumsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        usersService.getUserAlbumsById(id).then(value => setAlbums([...value]))
    }, [id, state])

    return (
        <>
            <div className={'user_album_heading'}>User Albums</div>
            <div>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
            <div><Outlet/></div>
        </>
    );
};

export default UserAlbumsPage;