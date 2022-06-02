import { apiClient } from "services/api";

export const createPostApi = async (data) => {
    return await apiClient.post('/posts/create', data);
}

export const getPostsByCategoryApi= async (categoryId, page) => {
    return await apiClient.get(`/posts/category/${categoryId}?page=${page}`);
}

export const getPostsApi= async (pages) => {
    return await apiClient.get(`/posts?page=${pages}`);
}

export const getSinglePostApi= async (postId) => {
    return await apiClient.get(`/posts/${postId}`);
}

export const setPostLikesApi= async (postId) => {
    return await apiClient.put(`/posts/likes`, {postId: postId});
}


