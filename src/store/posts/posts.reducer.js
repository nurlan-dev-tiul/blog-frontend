import { postsAction } from "./actions/action.types"

const initialState = {
    posts: [],
    categoryPosts: [],
    totalPages: null,
    limit: 0,
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
                posts: action.payload.docs,
                totalPages: action.payload.totalPages,
                limit: action.payload.limit,
                loading: false,
            }
        // case postsAction.SET_POSTS_BY_CATEGORY:
        //     return{
        //         ...state,
        //         categoryPosts: action.payload.posts,
        //         currentPage: action.payload.currentPages,
        //         numberOfPages: action.payload.numberOfPage,
        //         loading: false,
        //         posts: []
        //     }
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