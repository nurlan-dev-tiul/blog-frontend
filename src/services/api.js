import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
});

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