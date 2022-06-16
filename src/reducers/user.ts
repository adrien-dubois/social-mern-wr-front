import { GET_USER, PICTURE } from "../constants/actionTypes";

const userReducer = ( state = {}, action: any) => {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case PICTURE:
            return {
                ...state,
               uploadImage: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;