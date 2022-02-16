import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services/genres.service";

const initialState = {
    genres: {}
}

export const getAllGenres = createAsyncThunk(
    'genres/getAllGenres',
    async (_) => {
        return await genresService.getAllGenres();
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGenres.fulfilled]:(state,action) => {
            state.genres = action.payload
        }
    }
});

const genresReducer = genresSlice.reducer;

export default genresReducer;