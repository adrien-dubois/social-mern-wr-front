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
export const getUser = () => API.get('/v1/user/datas');

// USER
export const editPicture = (payload: any) => API.patch('/v1/user/picture', payload);
export const deletePicture = () => API.post('/v1/user/del-picture');
export const updateUserBio = (formData: any) => API.patch('/v1/user/update-bio', formData);

// FOLLOWS
export const getAllUsers = () => API.get('/v1/user/');
export const follows = (idToFollow: any) => API.patch(`/v1/user/follow/${idToFollow}`);
export const unfollows = (idToUnfollow: any) => API.patch(`/v1/user/unfollow/${idToUnfollow}`);

// POSTS 
export const getAllPosts = () => API.get('/v1/post/');
export const likePost = (id: any) => API.patch(`/v1/post/like/${id}`);
export const unlikePost = (id: any) => API.patch(`/v1/post/unlike/${id}`);

export const updatePost = (id: any, message: any) => {
    const msg = () => {
        return JSON.stringify({
            "message" : message
        })
    }
    API.patch(`/v1/post/${id}`, msg())
};

export const deletePost = (id: any) => API.delete(`/v1/post/${id}`);


// COMMENTS
export const getCommentsByPost = ( postId: any ) => API.get(`/v1/comment/post/${postId}`);
export const postComment = ( formData: any ) => API.post(`/v1/comment/`, formData);
export const updateComment = ( id: any, formData: any ) => API.patch(`v1/comment/${id}`, formData);
export const eraseComment = ( id: any ) => API.delete(`/v1/comment/${id}`);