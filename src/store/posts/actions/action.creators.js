import { postsAction } from "./action.types"

//* Action creators
export const newPostActionCreator = (newPost) => {
    return {
        type: postsAction.SET_NEW_POST,
        payload: newPost
    }
}

export const setAllPostsActionCreator = (posts) => {
    return {
        type: postsAction.SET_ALL_POSTS,
        payload: posts
    }
}

export const setPostsByCategoryActionCreator = (posts) => {
    return {
        type: postsAction.SET_POSTS_BY_CATEGORY,
        payload: posts
    }
}

export const setPostLikesActionCreators = (post) => {
    return {
        type: postsAction.SET_POST_LIKES,
        payload: post
    }
}

export const setSinglePostActionCreator = (post) => {
    return {
        type: postsAction.SET_SINGLE_POST,
        payload: post
    }
}

