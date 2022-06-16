import { postsAction } from "./action.types"

//* Action creators

//! Новый пост
export const loadingActionCreator = () => {
    return {
        type: postsAction.LOADING,
    }
}

//! Новый пост
export const newPostActionCreator = (newPost) => {
    return {
        type: postsAction.SET_NEW_POST,
        payload: newPost
    }
}

//! Все статьи
export const setAllPostsActionCreator = (posts) => {
    return {
        type: postsAction.SET_ALL_POSTS,
        payload: posts
    }
}


//! Лайки
export const setPostLikesActionCreators = (post) => {
    return {
        type: postsAction.SET_POST_LIKES,
        payload: post
    }
}

//! Детальный пост
export const setSinglePostActionCreator = (post) => {
    return {
        type: postsAction.SET_SINGLE_POST,
        payload: post
    }
}

//! Редактирование
export const editPostActionCreator = (post) => {
    return {
        type: postsAction.SET_EDIT_POST,
        payload: post
    }
}

//! Для статуса что Отредактировано
export const editedPostActionCreator = () => {
    return {
        type: postsAction.EDITED_POST,
    }
}


//! Удаление
export const deletePostActionCreator = (post) => {
    return {
        type: postsAction.DELETE_POST,
        payload: post
    }
}

