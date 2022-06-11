import { MINLENGTH } from '../constants/actionTypes';
import { 
    CREDENTIALS, 
    PASSWORDS, 
    RESET, 
    UNIQID, 
    VALIDATE 
} from '../constants/actionTypes';

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
        case PASSWORDS:
            return{
                message: "Les mots de passe ne sont pas identiques",
                isPass: true
            };
        case UNIQID:
            return{
                message: "Cet email est déjà enregistré sur un compte utilisateur.",
                isError: true
            };
        case MINLENGTH:
            return{
                message: "Le mot de passe doit contenir 6 caractères min.",
                isPass: true
            };
        case RESET:
            return { isError: false };
        default:
            return state;
    }
}

export default errorReducer;