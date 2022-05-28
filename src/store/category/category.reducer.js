import { categoryAction } from "./category.action";

const initialState = {
    categories: [],
    loading: false
}

export const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case categoryAction.LOADING:
            return {
                ...state,
                loading: true,
            }
        case categoryAction.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        default:
            return state;
    }
}