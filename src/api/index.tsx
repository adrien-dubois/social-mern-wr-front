import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

/*----- JWT Check Middleware -----*/
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers!.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')!).token}`;
    }
    
    return req;
})

/*----- ENDPOINTS -----*/

// AUTH
export const signIn = (formData: any) => API.post('/login_check',formData);
export const signUp = (formData: any) => API.post('/v1/register',formData);

// USER
export const getUser = () => API.get('/v1/user/datas');
export const editPicture = (payload: any) => API.patch('/v1/user/picture', payload);
export const deletePicture = () => API.post('/v1/user/del-picture');
export const updateUserBio = (formData: any) => API.patch('/v1/user/update-bio', formData);