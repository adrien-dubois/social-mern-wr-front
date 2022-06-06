import * as api from '../api';
import { AppDispatch } from '../index';
import { NavigateFunction } from 'react-router-dom';
import { AUTH, CREDENTIALS, PASSWORDS, SIGNUP, UNIQID, VALIDATE } from '../constants/actionTypes';

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

        // IF NOT ACTIVATED BY MAIL
        if(error.response.status === 403) {
            dispatch({
                type: VALIDATE,
                error
            });
        };

        // IF BAD CREDENTIALS
        if(error.response.status === 401){
            dispatch({
                type: CREDENTIALS,
                error
            });
        };
    }   
};

/*----- Sign up method -----*/
export const signup = (formData: any, navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
    try {
        
        const { data } = await api.signUp(formData);

        dispatch({
            type: SIGNUP,
            data
        });

        navigate('/');

    } catch (error) {

        const err = error.response.data;

        // PASSWORD
        if(err.message !== undefined){
            dispatch({
                type: PASSWORDS,
                error
            });
        };
        
        // UNIQID
        if(err.detail !== undefined){
            dispatch({
                type: UNIQID,
                error
            });
        };

    }
};