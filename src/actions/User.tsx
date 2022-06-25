import { AppDispatch } from '../index';
import * as api from '../api';
import { DEL_PICTURE, PICTURE, UPDATE_BIO } from '../constants/actionTypes';
import { showNotification } from '@mantine/notifications';
import { GiRabbitHead } from 'react-icons/gi';

export const editUserPic = (payload: any) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.editPicture(payload);

        dispatch({
            type: PICTURE,
            payload: data
        });

        showNotification({
            title: 'Notification',
            message: "Avatar modifié!",
            radius: "lg",
            color: 'green',
            icon: <GiRabbitHead/>,
        });

    } catch (error: any) {
        console.log(error)
    }
};

export const removeUserPic = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.deletePicture();

        dispatch ({
            type: DEL_PICTURE,
            payload: data
        });

    } catch (error: any) {
        console.log(error.message)
    }
}

export const updateBio = (bio: any) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.updateUserBio(bio);

        dispatch({
            type: UPDATE_BIO,
            payload: data
        });

        showNotification({
            title: 'Notification',
            message: "La bio a été mise à jour",
            radius: "lg",
            color: 'green',
            icon: <GiRabbitHead/>,
        });
    } catch (error: any) {
        console.log(error)
    }
}