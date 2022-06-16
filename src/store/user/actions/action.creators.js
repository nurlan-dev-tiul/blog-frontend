import { userAction } from "./action.types"

//! Action Creators loading
export const setLoading = () => {
    return {
        type: userAction.LOADING,
    }
}

//! Action Creators детального пользователя
export const setUserDetails = (user) => {
    return {
        type: userAction.SET_USER_DETAILS,
        payload: user
    }
}

//! Action Creators загрузка фото пользователя
export const setPhotoActionCreator = (image) => {
    return {
        type: userAction.SET_PROFILE_PHOTO,
        payload: image
    }
}

//! Action Creators загрузка фото пользователя
export const setEditUserActionCreator = (user) => {
    return {
        type: userAction.SET_EDIT,
        payload: user
    }
}

