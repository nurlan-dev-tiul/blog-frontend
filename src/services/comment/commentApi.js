import { apiClient } from "services/api";

export const createCommentApi = async (data) => {
    return await apiClient.post('/comments/create', data);
}

export const getSingleCommentApi= async (data) => {
    return await apiClient.get('/comments/');
}

export const removeCommentApi= async (id) => {
    return await apiClient.delete(`/comments/${id}`);
}


