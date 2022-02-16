import React from 'react';

import "./MoviesListCard.css";
import {useSelector} from "react-redux";
import PosterPreview from "../PosterPreview/PosterPreview";
import {Link} from "react-router-dom";

const MoviesListCard = ({movie: {title, poster_path, genre_ids,release_date,id}}) => {

    const {genres} = useSelector(state => state['genresReducer']);
    const genresArr = [];

    if (genres.genres) {
        genre_ids.forEach((genre_id) => {
            const element = genres.genres.find(genre => genre.id === genre_id)
            if (element) {
                genresArr.push(element.name);
            }
        })
    }

    return (
        <>
            <Link className={'movie_list_card_link'} to={`/${title}`} state={id}>
                <div className={'main_box_MoviesListCard'}>
                    <PosterPreview poster_path={poster_path} title={title}/>
                    <div>{title}</div>
                    <div className={'year_and_genre_box'}>
                        <div>{release_date ? release_date.slice(0, 4) : 'TBD'}</div>
                        <div>
                            {genresArr.slice(0, 2).map(genre => {
                                return (<span key={genre}>,{genre}</span>)
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default MoviesListCard;