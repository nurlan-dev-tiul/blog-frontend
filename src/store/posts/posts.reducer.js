import { postsAction } from "./actions/action.types"

const initialState = {
    posts: [],
    post: null,
    postLikes: null,
    loading: false
}

export const postsReducer = (state=initialState, action) => {
    switch(action.type){
        case postsAction.LOADING:
            return{
                ...state,
                loading: true
            }
        case postsAction.SET_ALL_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            }
        case postsAction.SET_POST_LIKES:
            return{
                ...state,
                postLikes: action.payload,
                loading: false
        }
        case postsAction.SET_NEW_POST:
            return{
                ...state,
                post: action.payload,
                loading: false
        }
        case postsAction.SET_SINGLE_POST:
            return{
                ...state,
                post: action.payload
            }
        default:
            return state;
    }
}