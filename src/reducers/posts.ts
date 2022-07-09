import { GET_POSTS } from '../constants/actionTypes';

const initialState = {};

const postReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}

export default postReducer;