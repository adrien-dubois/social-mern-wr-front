import { CREDENTIALS, VALIDATE } from '../constants/actionTypes';

const errorReducer = (state = { errorsData: null }, action: any) => {
    switch (action.type) {
        case CREDENTIALS:
            return{
                message: "Email et/ou mot de passe incorrect(s).",
                isError: true
            }
        case VALIDATE:
            return{
                message: 'Votre compte doit être activé, regardez vos emails',
                isError: true 
            }
        default:
            return state;
    }
}

export default errorReducer;