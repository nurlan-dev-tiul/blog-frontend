import { setUserDetails, setPhotoActionCreator,setEditUserActionCreator, setLoading } from "./actions/action.creators";
import { getUserApi,  addUserPhotoApi, editUserApi } from "services/user/userApi";
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


//! Загрузка фото пользователя
export const addProfilePhotoAction = (avatar) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;

    try {
        dispatch(setLoading())
        const { data } = await addUserPhotoApi(avatar);
        //! Dispatch in store
        dispatch(setPhotoActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Редактирование пользователя
export const editUserAction = (user) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await editUserApi(user);

         //! Dispatch in store
        dispatch(setEditUserActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}


