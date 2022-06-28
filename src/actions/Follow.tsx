import { AppDispatch } from '../index';
import * as api from '../api';
import { GET_ALL } from '../constants/actionTypes';


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