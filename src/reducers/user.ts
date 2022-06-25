import { DEL_PICTURE, GET_USER, PICTURE, UPDATE_BIO } from "../constants/actionTypes";

const initialState = {};

const userReducer = ( state = initialState , action: any) => {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case PICTURE:
            return {
                ...state,
               picture: action.payload
            };
        case DEL_PICTURE:
            return {
                ...state,
                picture: action.payload
            }
        case UPDATE_BIO:
            return {
                ...state,
                bio: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;