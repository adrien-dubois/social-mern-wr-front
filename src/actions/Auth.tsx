import * as api from '../api';
import { AppDispatch } from '../index';
import { showNotification } from '@mantine/notifications';
import { GiMailbox, GiRabbitHead } from 'react-icons/gi';
import { 
    AUTH, 
    CREDENTIALS, 
    GET_USER, 
    MINLENGTH, 
    PASSWORDS, 
    RESET, 
    SIGNUP, 
    UNIQID, 
    VALIDATE 
} from '../constants/actionTypes';

/*----- Login Method -----*/
export const signin = (formData: any) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({
            type: AUTH,
            data
        });

        showNotification({
            title: 'Notification',
            message: "Connection réussie!",
            radius: "lg",
            color: 'green',
            icon: <GiRabbitHead/>,
        });

        window.location.href="/";

    } catch (error: any) {

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
export const signup = (formData: any ) => async (dispatch: AppDispatch) => {
    try {
        
        const { data } = await api.signUp(formData);

        dispatch({
            type: SIGNUP,
            data
        });
        
        showNotification({
            title: 'Notification',
            message: "Vérifiez vos mails afin d'activer votre compte.",
            radius: "lg",
            color: 'green',
            icon: <GiMailbox/>
        });

    } catch (error: any) {

        const err = error.response.data;

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

export const getUser = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.getUser();

        dispatch({
            type: GET_USER,
            payload: data
        });
    } catch (error: any) {
        console.log(error);
    }
}