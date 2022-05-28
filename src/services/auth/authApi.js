import { apiClient } from "services/api";

export const loginApi = async (data) => {
    return await apiClient.post('/auth/login', data);
}

export const registerApi= async (data) => {
    return await apiClient.post('/auth/register', data);
}

export const getProfileApi= async () => {
    return await apiClient.get('/auth/profile');
}