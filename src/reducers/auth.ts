import { AUTH, GET_USER, LOGOUT, SIGNUP } from "../constants/actionTypes";

const initialState = {
    authData: null,
    id: Number
}

const authReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return {
                ...state,
                authData: action?.data
            };
        case SIGNUP:
            return {
                ...state,
                authData: action?.data
            };
        case GET_USER:
            return{
                ...state,
                id: action?.data
            }
        case LOGOUT:
            localStorage.clear();
            return {...state,authData: null};
        default:
            return state;
    }
};

export default authReducer;