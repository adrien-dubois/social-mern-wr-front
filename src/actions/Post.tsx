import { AppDispatch } from '../index';
import * as api from '../api';
import { 
    DELETE_POST, 
    GET_COMMENTS, GET_POSTS, 
    LIKE, 
    UNLIKE, 
    UPDATE, 
    ADD_COMMENT, 
    EDIT_COMMENT
} from '../constants/actionTypes';

export const getPosts = ( num: any ) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.getAllPosts();

        const array = data.slice(0, num);

        dispatch({
            type: GET_POSTS,
            payload: array
        });

    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = ( ) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.getAllPosts();

        dispatch({
            type: GET_POSTS,
            payload: data
        });

    } catch (error) {
        console.log(error)
    }
}



export const likeNewPost = (postId: any, userId: any) => async (dispatch: AppDispatch) => {
    try {
        await api.likePost(postId);

        dispatch({
            type: LIKE,
            payload: {postId, userId}
        });

    } catch (error) {
        console.log(error)
    }
}

export const unlikeNewPost = (postId: any, userId: any) => async (dispatch: AppDispatch) => {
    try {
        await api.unlikePost(postId);

        dispatch({
            type: UNLIKE,
            payload: {postId, userId}
        });

    } catch (error) {
        console.log(error)
    }
}

export const updateOnePost = ( postId: any, message: any ) => async (dispatch: AppDispatch) => {
    try {
        await api.updatePost(postId, message);

        dispatch({
            type: UPDATE,
            payload: {message, postId}
        });

    } catch (error) {
        console.log(error)
    }
}

export const delPost = (postId: any) => async (dispatch: AppDispatch) => {
    try {
        await api.deletePost(postId);

        dispatch({
            type: DELETE_POST,
            payload: { postId }
        })
    } catch (error) {
        console.log(error)
    }
}

export const getComs = (postId: any) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.getCommentsByPost(postId);

        dispatch({
            type: GET_COMMENTS,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const addComment = (formData: any, postId: string) => async (dispatch: AppDispatch) => {
    try {
        await api.postComment(formData);

        dispatch({
            type: ADD_COMMENT,
            payload: { postId }
        });

    } catch (error) {
        console.log(error)
    }
}

export const editComment = (formData: any, commentId: string, postId: number, text: string) => async (dispatch: AppDispatch) => {
    try {
        await api.updateComment(commentId, formData);

        dispatch({
            type: EDIT_COMMENT,
            payload: { postId, commentId, text }
        });

    } catch (error) {
        console.log(error)
    }
}