import { userAction } from "./actions/action.types";

const initialState = {
    user: null,
    photoProfile: null,
    editSuccess: false,
    editedPost: false,
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
                loading: false,
                editSuccess: false,
            }
        case userAction.SET_PROFILE_PHOTO:
            return {
                ...state,
                photoProfile: action.payload,
                loading: false
            }
        case userAction.SET_EDIT:
            return {
                ...state,
                editSuccess: true,
                loading: false
            }
        default:
            return state
    }
}