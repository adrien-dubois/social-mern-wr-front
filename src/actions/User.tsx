import { AppDispatch } from '../index';
import * as api from '../api';
import { PICTURE } from '../constants/actionTypes';
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
}