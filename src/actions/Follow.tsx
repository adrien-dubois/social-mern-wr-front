import { AppDispatch } from '../index';
import * as api from '../api';
import { FOLLOW, GET_ALL, UNFOLLOW } from '../constants/actionTypes';


export const getAllUsers = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.getAllUsers();

        dispatch({
            type: GET_ALL,
            payload: data
        });

    } catch (error) {
        console.log(error)
    }
}

export const followUser = (idToFollow : any) => async (dispatch: AppDispatch) =>{
    try {
        const { data } = await api.follows(idToFollow);

        dispatch({
            type: FOLLOW,
            payload: data
        });

    } catch (error) {
        console.log(error)
    }
}


export const unfollowUser = (idToUnfollow : any) => async (dispatch: AppDispatch) =>{
    try {
        const { data } = await api.unfollows(idToUnfollow);

        dispatch({
            type: UNFOLLOW,
            payload: data
        });

    } catch (error) {
        console.log(error)
    }
}
