import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import "./MoviesList.css";
import {getAllMovieByParams, getAllMovies, getMoviesBySearch, setLoading} from "../../store/movies.slice";
import {getAllGenres} from "../../store/genres.slice";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Pagination from "../Pagination/Pagination";
import {filters, years} from "../../shared";
import {genresService} from "../../services/genres.service";


const MoviesList = () => {

    const search = useLocation().search;
    const [reload, setReload] = useState();
    const {movies, isLoading, moviesByParams, data, moviesBySearch} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!search) return
        setReload(search);
    }, [search])

    useEffect(() => {
        let page = new URLSearchParams(search).get('page');
        if (page !== null) {
            dispatch(setLoading());
            dispatch(getAllMovies(page));
        }
    }, [reload]);

    useEffect(() => {
        dispatch(setLoading());
        dispatch(getAllMovies());
        dispatch(getAllGenres());
    }, [])

    useEffect(() => {
        genresService.getAllGenres().then(genres => {
            let page = new URLSearchParams(search).get('page');
            let filterParams = new URLSearchParams(search).get('filter');
            let yearParams = new URLSearchParams(search).get('year');
            let genreParams = new URLSearchParams(search).get('genre');
            const genreForApi = genres.genres?.find(genre => genre.name === genreParams);
            const yearForApi = years.find(year => year.visibleYear === yearParams);
            const filterForApi = filters.find(filter => filter.visibleFilter === filterParams);
            const filter = filterForApi?.filterForApi;
            const year = yearForApi?.yearForApi;
            const genre = genreForApi?.id;
            dispatch(setLoading())
            dispatch(getAllMovieByParams({filter, page, year, genre}));
        })
    }, [reload])

    useEffect(() => {
        let page = new URLSearchParams(search).get('page');
        let query = data.search;
        if (data.search) {
        dispatch(setLoading())
        dispatch(getMoviesBySearch({page, query}));
        }
    }, [data, reload])

    let filterParams = new URLSearchParams(search).get('filter');
    let yearParams = new URLSearchParams(search).get('year');
    let genreParams = new URLSearchParams(search).get('genre');

    return (
        <div className={!isLoading ? 'box_shadow' : ''}>
            {!isLoading ? <div className={'main_box_MoviesList'}>
                {((filterParams || yearParams || genreParams) ? moviesByParams.results : data.search ? moviesBySearch.results : movies.results)?.map(movie =>
                    <MoviesListCard key={movie.id} movie={movie}/>)}
            </div> : <div className={'loader_box'}>
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
            </div>}
            {!isLoading && <>
                <div className={'line'}></div>
                <Pagination/></>}
        </div>
    );
};

export default MoviesList;