import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../services/movies.service";

const initialState = {
    movies: {},
    movie: {},
    isLoading: false,
    moviesByParams: {},
    moviesBySearch: {},
    data: {}
}

export const getAllMovies = createAsyncThunk(
    'movies/getAllFilms',
    async (page) => {
        return await moviesService.getAll(page);
    }
);

export const getMovieById = createAsyncThunk(
    'movies/getMovieById',
    async (id) => {
        return await moviesService.getMovieById(id);
    }
);

export const getAllMovieByParams = createAsyncThunk(
    'movies/getAllMovieByParams',
    async (request) => {
        const {filter, page, year, genre} = request;
        return await moviesService.getMoviesByParams(filter, page, year, genre);
    }
);

export const getMoviesBySearch = createAsyncThunk(
    'movies/getMoviesBySearch',
    async (request) => {
        const {page, query} = request;
        return await moviesService.getMoviesBySearch(page, query);
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true
        },
        getData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
            state.isLoading = false
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.movie = action.payload
            state.isLoading = false
        },
        [getAllMovieByParams.fulfilled]: (state, action) => {
            state.moviesByParams = action.payload
            state.isLoading = false
        },
        [getMoviesBySearch.fulfilled]: (state, action) => {
            state.moviesBySearch = action.payload
            state.isLoading = false
        }
    }
});


const moviesReducer = moviesSlice.reducer;

export const {setLoading,getData} = moviesSlice.actions;
export default moviesReducer;