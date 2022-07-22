import { DELETE_POST, EDIT_COMMENT, GET_COMMENTS, GET_POSTS, LIKE, UNLIKE, UPDATE } from '../constants/actionTypes';

const initialState = {};

const postReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case GET_COMMENTS:
            return action.payload;
        case EDIT_COMMENT:
            return (state as []).map((post: any) => {
                if(post.id === action.payload.postId){
                    return {
                        ...post,
                        comments: post.comments.map((comment: any) => {
                            if(comment.id === action.payload.commentId){
                                return {
                                    ...comment,
                                    text: action.payload.text
                                }
                            } else {
                                return comment;
                            }
                        })
                    }
                } else {
                    return post;
                }
            })
        case UPDATE:
            return (state as []).map((post: any) => {
                if(post.id === action.payload.postId) {
                    return {
                        ...post,
                        message: action.payload.message
                    }
                }
                return post;
            });
        case LIKE: 
            return (state as []).map((post: any) => {
                if(post.id === action.payload.postId){
                    return {
                        ...post,
                        likers: [action.payload.userId, ...post.likers]
                    }
                }
                return post;
            });
        case DELETE_POST:
            return (state as []).filter((post: any) => post.id !== action.payload.postId);
        case UNLIKE:
            return (state as []).map((post: any) => {
                if(post.id === action.payload.postId){
                    return {
                        ...post,
                        likers: post.likers.filter((id: any) => id.id !== action.payload.userId)
                    }
                }
                return post;
            });
        default:
            return state;
    }
}

export default postReducer;