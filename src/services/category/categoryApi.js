import { apiClient } from "services/api";

export const getCategoriesApi = async () => {
    return await apiClient.get('/category/all');
}

