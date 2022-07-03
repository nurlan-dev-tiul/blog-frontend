import { apiClient } from "services/api";

export const getUserApi = async (userId) => {
    return await apiClient.get(`/user/${userId}`);
}

export const addUserPhotoApi = async (avatar) => {
    return await apiClient.put('/user/upload', {profilePhoto: avatar});
}

export const editUserApi = async (user) => {
    return await apiClient.put('/user/edit', user);
}


