import { GET_USER } from "../constants/actionTypes";

const initialState = {};

const userReducer = ( state = initialState, action: any) => {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;