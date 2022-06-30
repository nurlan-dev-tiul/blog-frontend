import { postsAction } from "./actions/action.types"

const initialState = {
    posts: [],
    popularPosts: [],
    totalPages: null,
    limit: 0,
    post: null,
    postLikes: null,
    loading: false,
    editedPost: false,
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
        case postsAction.SET_POPULAR_POSTS:
            return{
                ...state,
                popularPosts: action.payload,
                loading: false,
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
        case postsAction.SET_EDIT_POST:
            return{
                ...state,
                post: action.payload,
                editedPost: true,
                loading: false
            }
        case postsAction.EDITED_POST:
            return{
                ...state,
                editedPost: false
            }
        case postsAction.DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter((obj) => obj._id !== action.payload),
                deleted: action.payload
            }
        default:
            return state;
    }
}