import { authAction } from "./auth.action";

const initialState = {
    userDetails: null,
    isAuth: false,
    loading: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case authAction.LOADING:
            return {
                ...state,
                loading: true,
            }
        case authAction.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
                isAuth: true,
                loading: false
            }
        case authAction.LOGOUT_USER:
            return {
                ...state,
                userDetails: null,
                isAuth: false
            }
        default:
            return state
    }
}