import { userAction } from "./action.types"

//! Action Creators детального пользователя
export const setUserDetails = (user) => {
    return {
        type: userAction.SET_USER_DETAILS,
        payload: user
    }
}

//! Action Creators 
export const followUser = (message) => {
    return {
        type: userAction.FOLLOWED,
        payload: message
    }
}

//! Action Creators
export const unFollowUser = (message) => {
    return {
        type: userAction.UN_FOLLOWED,
        payload: message
    }
}

//! Action Creators загрузка фото пользователя
export const setPhotoActionCreator = (image) => {
    return {
        type: userAction.SET_PROFILE_PHOTO,
        payload: image
    }
}


