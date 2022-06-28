import { GET_ALL } from '../constants/actionTypes';

const initialState = {};

const followReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case GET_ALL:
            return action.payload;
        default:
            return state;
    }
}

export default followReducer;