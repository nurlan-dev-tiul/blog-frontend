import { apiClient } from "services/api";

export const getUserApi = async (userId) => {
    return await apiClient.get(`/user/${userId}`);
}

export const followUserApi = async (userId) => {
    return await apiClient.put('/user/follow', {followId: userId});
}

export const unFollowUserApi = async (userId) => {
    return await apiClient.put('/user/unfollow', {unFollowId: userId});
}

export const addUserPhotoApi = async (formData) => {
    return await apiClient.put('/user/profile-photo-upload', formData);
}

export const editUserApi = async (user) => {
    return await apiClient.put('/user/edit', user);
}


