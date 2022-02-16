import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import "./MovieInfo.css";
import {getMovieById, setLoading} from "../../store/movies.slice";
import {urls} from "../../configs/urls";
import StarsRating from "../StarsRating/StarsRating";

const MovieInfo = () => {
    const {state} = useLocation();
    const {
        movie: {
            backdrop_path,
            original_title,
            overview,
            production_companies,
            production_countries,
            release_date,
            status,
            vote_average,
            vote_count
        }, isLoading
    } = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading())
        dispatch(getMovieById(state));
    }, [state])

    return (
        <>
            { !isLoading?
                <div className={'movie_info_box'}>
                    <div className={'movie_info_img_box'}>
                        <img className={'info_img'} src={urls.imagesW1280 + backdrop_path} alt={original_title}/>
                    </div>
                    <div className={'main_content'}>
                        <div className={'title_name'}>{original_title}</div>
                        <div><span>Overview:</span> {overview}</div>
                        <div className={'companies'}><span>Companies:</span>
                            {production_companies?.map(company => {
                                return <div key={company.id}>{company.name}.</div>
                            })}
                        </div>
                        <div className={'countries'}><span>Production countries:</span>
                            {production_countries?.map(country => {
                                return <div key={country.name}>{country.name}.</div>
                            })}
                        </div>
                        <div>
                            <span>Release date:</span> {release_date}.
                        </div>
                        <div>
                            <span>Status:</span> {status}.
                        </div>
                        <div className={'stars_box'}>
                            <StarsRating voteAverage={vote_average}/>
                            <div>{vote_average}</div>
                            <div><span>Votes:</span>{vote_count}</div>
                        </div>
                    </div>
                </div>
                :
                <div className={'loader_box'}>
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
        </>
    );
};

export default MovieInfo;