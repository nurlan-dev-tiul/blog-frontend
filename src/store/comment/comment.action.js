import { closeAlertActionCreator, errorAlertActionCreator } from "store/alert/alert.action";
import { createCommentApi, removeCommentApi } from "services/comment/commentApi";

export const commentAction = {
    SET_COMMENT: 'COMMENT.SET_COMMENT',
    REMOVE_COMMENT: 'COMMENT.REMOVE_COMMENT',
    LOADING: 'COMMENT.LOADING'
}

//! Action Creators на добавление комментария
export const setCommentActionCreator = (comment) => {
    return {
        type: commentAction.SET_COMMENT,
        payload: comment
    }
}

//! Action Creators на удаления комментария
export const removeCommentActionCreator = (comment) => {
    return {
        type: commentAction.REMOVE_COMMENT,
        payload: comment
    }
}


//! Action Creators загрузка
export const loadingActionCreators = () => {
    return {
        type: commentAction.LOADING,
    }
}

//! Action thunk запрос на сервер на добавления комментария
export const createCommentAction = (comment) => async(dispatch) => {
    try {
        dispatch(loadingActionCreators());

        const { data } = await createCommentApi(comment);
        dispatch(setCommentActionCreator(data));

    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Action thunk запрос на сервер на удаления комментария
export const deleteCommentAction = (commentId) => async(dispatch) => {
    try {
        dispatch(loadingActionCreators());

        const { data } = await removeCommentApi(commentId);
        dispatch(removeCommentActionCreator(data));

    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}