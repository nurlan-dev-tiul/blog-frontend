import { userAction } from "./actions/action.types";

const initialState = {
    user: null,
    followed: undefined,
    unfollowed: undefined,
    photoProfile: null,
    loading: false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userAction.LOADING:
            return {
                ...state,
                loading: true,
            }
        case userAction.SET_USER_DETAILS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case userAction.FOLLOWED:
            return {
                ...state,
                followed: action.payload,
                unfollowed: undefined,
                loading: false
            }
        case userAction.UN_FOLLOWED:
            return {
                ...state,
                unfollowed: action.payload,
                followed: undefined,
                loading: false
            }
        case userAction.SET_PROFILE_PHOTO:
            return {
                ...state,
                photoProfile: action.payload,
                loading: false
            }
        default:
            return state
    }
}