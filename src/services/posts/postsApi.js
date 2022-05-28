import { apiClient } from "services/api";

export const createPostApi = async (data) => {
    return await apiClient.post('/posts/create', data);
}

export const getPostsByCategoryApi= async (category) => {
    return await apiClient.get(`/posts?category=${category}`);
}

export const getPostsApi= async () => {
    return await apiClient.get('/posts');
}

export const getSinglePostApi= async (postId) => {
    return await apiClient.get(`/posts/${postId}`);
}

export const setPostLikesApi= async (postId) => {
    return await apiClient.put(`/posts/likes`, {postId: postId});
}


