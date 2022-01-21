import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Photo from "../../components/Photo/Photo";
import "./AlbumPhotosPage.css";

const AlbumPhotosPage = () => {

    const {state} = useLocation()

    const [photos, setPhotos] = useState([]);

   useEffect( () => {
       albumsService.getAlbumPhotosById(state).then(value => setPhotos([...value]))
   },[state])

    return (
        <>
            <div className={'album_photos_heading'}>Album Photos</div>
        <div>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
        </>
    );
};

export default AlbumPhotosPage;