import { authAction } from "./action.types"

//! Action Creators
export const setUserDetails = (userDetails) => {
    return {
        type: authAction.SET_USER_DETAILS,
        payload: userDetails
    }
}

//! Action Creators
export const loadingActionCreators = () => {
    return {
        type: authAction.LOADING,
    }
}
