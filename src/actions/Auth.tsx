import * as api from '../api';
import { AppDispatch } from '../index';
import { NavigateFunction } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { FiUserCheck } from 'react-icons/fi';
import { 
    AUTH, 
    CREDENTIALS, 
    MINLENGTH, 
    PASSWORDS, 
    RESET, 
    SIGNUP, 
    UNIQID, 
    VALIDATE 
} from '../constants/actionTypes';

/*----- Login Method -----*/
export const signin = (formData: any, navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({
            type: AUTH,
            data
        });

        showNotification({
            title: 'Notification',
            message: "Vous êtes bien connecté",
            radius: "lg",
            color: 'green',
            icon: <FiUserCheck/>,
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
        
        showNotification({
            title: 'Notification',
            message: "Vérifiez vos mails afin d'activer votre compte",
            radius: "lg",
            color: 'green'
        });

        navigate('/');

    } catch (error) {

        const err = error.response.data;

        console.log(err)

        // PASSWORD
        if(err.message !== undefined){
            dispatch({
                type: PASSWORDS,
                error
            });
        };
        
        // UNIQID
        if(err.detail !== undefined && err.status === 500){
            dispatch({
                type: UNIQID,
                error
            });
        };

        if(err.detail.includes("password")){
            dispatch({
                type: MINLENGTH,
                error
            });
        };

    }
};

export const resetErrors = (dispatch: AppDispatch) =>{
    dispatch({ type: RESET });
}