import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import BlogReducer from "../reducers/BlogReducer";
import CategoryReducer from "../reducers/CategoryReducer";
import UserReducer from "../reducers/UserReducer";
import MyBlogsReducer from "../reducers/MyBlogsReducer";

const rootReducer = combineReducers({
    blogs:BlogReducer,
    categories:CategoryReducer,
    user:UserReducer,
    myBlogs:MyBlogsReducer
})
const store = configureStore({
    reducer:rootReducer
});

export default store