import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services/users.service";


const initialState = {
    users: []
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        const users = await usersService.getAll();
        return users
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
})


const usersReducer = usersSlice.reducer;

export default usersReducer;


