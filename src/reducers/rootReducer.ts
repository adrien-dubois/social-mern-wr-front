import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import errorReducer from "./errors";
import followReducer from "./follow";
import postReducer from "./posts";
import userReducer from "./user";

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    follows: followReducer,
    posts: postReducer,
});

export default rootReducer;