import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../services/comments.service";


const initialState = {
    comments: []
}

export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (_, {rejectWithValue}) => {
        const comments = await commentsService.getAll();
        return comments
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload
        }
    }
})


const commentsReducer = commentsSlice.reducer;

export default commentsReducer;