import { DEL_PICTURE, FOLLOW, GET_USER, PICTURE, UNFOLLOW, UPDATE_BIO } from "../constants/actionTypes";

type InitialState =  {
    id: number;
    email: any;
    userIdentifier: any;
    username: any;
    roles: string[];
    password: string;
    salt: any;
    pseudo: string;
    picture: string;
    bio: string;
    createdAt: any;
    updatedAt: any;
    follower: object[];
    following: object[];
    posts: object[];
    likes: object[];
    comments: object[];
    otp: string;
    activationToken: string;
    confirmPassword: string;

};

const initialState: InitialState = {
    id: 0,
    email: "",
    userIdentifier: "",
    username: "",
    roles: [""],
    password: "",
    salt: "",
    pseudo: "",
    picture: "",
    bio: "",
    createdAt: "",
    updatedAt: "",
    follower: [{}],
    following: [{}],
    posts: [{}],
    likes: [{}],
    comments: [{}],
    otp: "",
    activationToken: "",
    confirmPassword: "",
}

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
        case FOLLOW:
            return{
                ...state,
                following: [action.payload, ...state.following]
            };
        case UNFOLLOW:
            return {
                ...state,
                following: state.following.filter(function (el: any) {
                    return el.id !== action.payload.id
                })
            };
        default:
            return state;
    }
};

export default userReducer;