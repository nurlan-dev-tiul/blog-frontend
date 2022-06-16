import { getCategoriesApi } from "services/category/categoryApi";
import { errorAlertActionCreator } from "store/alert/alert.action";

export const categoryAction = {
    SET_CATEGORIES: 'CATEGORY.SET_CATEGORIES',
    LOADING: 'CATEGORY.LOADING'
}

//! Action Creators 
export const setCategoriesActionCreator = (categories) => {
    return {
        type: categoryAction.SET_CATEGORIES,
        payload: categories
    }
}

//! Action Creators
export const loadingActionCreators = () => {
    return {
        type: categoryAction.LOADING,
    }
}

//! Action thunk запрос на сервер на получение категории и отправка данных в store
export const getCategoriesAction = () => async(dispatch) => {
    try {
        dispatch(loadingActionCreators());

        const { data } = await getCategoriesApi();
        dispatch(setCategoriesActionCreator(data));

    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}