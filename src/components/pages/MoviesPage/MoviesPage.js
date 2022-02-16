import React from 'react';
import MoviesFilter from "../../MoviesFilter/MoviesFilter";
import MoviesList from "../../MoviesList/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            <MoviesFilter/>
            <MoviesList/>
        </div>
    );
};

export default MoviesPage;