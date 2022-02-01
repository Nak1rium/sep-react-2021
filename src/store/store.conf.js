import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import usersReducer from "./user.slice";
import postsReducer from "./post.slice";
import commentsReducer from "./comments.slice";


const store = configureStore({
    reducer: {
        carReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }
})


export default store