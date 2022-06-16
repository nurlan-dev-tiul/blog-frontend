import { apiClient } from "services/api";

export const getUserApi = async (userId) => {
    return await apiClient.get(`/user/${userId}`);
}

export const addUserPhotoApi = async (formData) => {
    return await apiClient.put('/user/profile-photo-upload', formData);
}

export const editUserApi = async (user) => {
    return await apiClient.put('/user/edit', user);
}


