import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import errorReducer from "./errors";
import userReducer from "./user";

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
});

export default rootReducer;