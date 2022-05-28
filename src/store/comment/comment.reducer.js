import { commentAction } from "./comment.action";

const initialState = {
    comment: null,
    deleteComment: null,
    loading: false
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case commentAction.LOADING:
            return {
                ...state,
                loading: true,
            }
        case commentAction.SET_COMMENT:
            return {
                ...state,
                comment: action.payload,
                loading: false
            }
        case commentAction.REMOVE_COMMENT:
            return {
                ...state,
                deleteComment: action.payload,
                loading: false
            }
        default:
            return state;
    }
}