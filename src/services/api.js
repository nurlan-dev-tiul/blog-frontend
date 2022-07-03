import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://app-blog-mern.herokuapp.com/api',
});
// https://app-blog-mern.herokuapp.com/api
// http://localhost:5000/api

//! Get token localStorage
apiClient.interceptors.request.use((config) => {
    const user = localStorage.getItem('userBlog');
    if(user){
        const token = JSON.parse(user);
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}, (err) => {
    return Promise.reject(err)
});