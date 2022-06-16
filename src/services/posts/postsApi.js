import { apiClient } from "services/api";

//! Добавление статьи
export const createPostApi = async (data) => {
    return await apiClient.post('/posts/create', data);
}

//! Получение статей по категории
export const getPostsByCategoryApi= async (categoryId, page) => {
    return await apiClient.get(`/posts/category/${categoryId}?page=${page}`);
}

//! Получение всех статей
export const getPostsApi= async (pages) => {
    return await apiClient.get(`/posts?page=${pages}`);
}

//! Детальная статья
export const getSinglePostApi= async (postId) => {
    return await apiClient.get(`/posts/${postId}`);
}

//! Добавление лайка
export const setPostLikesApi= async (postId) => {
    return await apiClient.put(`/posts/likes`, {postId: postId});
}

//! Редактирование статьи
export const editPostApi= async (id, post) => {
    return await apiClient.put(`/posts/update/${id}`, post);
}

//! Редактирование статьи Image
export const editImagePostApi= async (id, image) => {
    return await apiClient.put(`/posts/update-image/${id}`, image);
}

//! Удаление статьи
export const deletePostApi= async (postId) => {
    return await apiClient.delete(`/posts/delete/${postId}`);
}


