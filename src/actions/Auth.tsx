import * as api from '../api';
import { AppDispatch } from '../index';
import { NavigateFunction } from 'react-router-dom';
import { AUTH, CREDENTIALS } from '../constants/actionTypes';

/*----- Login Method -----*/
export const signin = (formData: any, navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({
            type: AUTH,
            data
        });
        navigate("/");

    } catch (error) {
        dispatch({
            type: CREDENTIALS,
            error
        });
    }   
};