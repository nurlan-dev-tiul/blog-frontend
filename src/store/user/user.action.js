import { setUserDetails, followUser, unFollowUser, setPhotoActionCreator } from "./actions/action.creators";
import { followUserApi, getUserApi, unFollowUserApi, addUserPhotoApi } from "services/user/userApi";
import { closeAlertActionCreator, errorAlertActionCreator } from "store/alert/alert.action";

//! Получаем пользователя
export const getUserAction = (userId) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await getUserApi(userId);

         //! Dispatch in store
        dispatch(setUserDetails(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}


//! Подписываемся на пользователя
export const followUserAction = (userId) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await followUserApi(userId);

        //! Dispatch in store
        dispatch(followUser(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Отписка от пользователя
export const unFollowUserAction = (userId) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await unFollowUserApi(userId);
        //! Dispatch in store
        dispatch(unFollowUser(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Загрузка фото пользователя
export const addProfilePhotoAction = (avatar) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    const formData = new FormData();
    formData.append('image', avatar);
    try {
        const { data } = await addUserPhotoApi(formData);
        //! Dispatch in store
        dispatch(setPhotoActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

