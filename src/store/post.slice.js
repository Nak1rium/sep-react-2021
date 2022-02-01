import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services/posts.service";


const initialState = {
    posts: []
}

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (_, {rejectWithValue}) => {
        const posts = await postsService.getAll();
        return posts
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        }
    }
})


const postsReducer = postsSlice.reducer;

export default postsReducer;