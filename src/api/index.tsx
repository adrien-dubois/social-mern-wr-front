import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000/' });

/*----- ENDPOINTS -----*/

// AUTH

export const signIn = (formData: any) => API.post('api/v1/user/login',formData,{withCredentials: true});
export const signUp = (formData: any) => API.post('api/v1/user/register',formData,{withCredentials: true});