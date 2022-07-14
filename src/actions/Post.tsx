import { AppDispatch } from '../index';
import * as api from '../api';
import { GET_POSTS, LIKE, UNLIKE } from '../constants/actionTypes';

export const getPosts = () => async (dispatch: AppDispatch) => {
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