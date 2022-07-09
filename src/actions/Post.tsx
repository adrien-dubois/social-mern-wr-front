import { AppDispatch } from '../index';
import * as api from '../api';
import { GET_POSTS } from '../constants/actionTypes';

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