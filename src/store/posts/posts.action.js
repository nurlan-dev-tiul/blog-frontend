import { closeAlertActionCreator, errorAlertActionCreator } from "store/alert/alert.action";
import { 
    getPostsApi, 
    createPostApi, 
    getPostsByCategoryApi, 
    getSinglePostApi, 
    setPostLikesApi, 
    deletePostApi, 
    editPostApi,
    editImagePostApi
} from "services/posts/postsApi"
import { 
    newPostActionCreator, 
    setAllPostsActionCreator, 
    setSinglePostActionCreator,
    setPostLikesActionCreators,
    deletePostActionCreator,
    editPostActionCreator,
    loadingActionCreator
} from "./actions/action.creators";


//* Action thunk 
//! Новый пост
export const createPostAction = (newPost, navigate) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        dispatch(loadingActionCreator());

        const { data } = await createPostApi(newPost);
        dispatch(newPostActionCreator(data));
        navigate('/');

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Получение всех постов
export const getPostsAction = (pages) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await getPostsApi(pages);
        dispatch(setAllPostsActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }

    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Получение всех постов по категориям
export const getPostsByCategoryAction = (categoryId, pages) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {

        const { data } = await getPostsByCategoryApi(categoryId, pages);
        dispatch(setAllPostsActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }

    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Получение одного поста
export const getSinglePostAction = (id) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await getSinglePostApi(id);
        dispatch(setSinglePostActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Лайки
export const setPostLikesAction = (postId) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await setPostLikesApi(postId);
        dispatch(setPostLikesActionCreators(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Редактирование статьи
export const editPostAction = (id, post) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;

    try {
        const { data } = await editPostApi(id, post);
        dispatch(editPostActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Редактирование картинки статьи
export const editImagePostAction = (id, image) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;

    try {
        dispatch(loadingActionCreator())

        const { data } = await editImagePostApi(id, image);
        dispatch(editPostActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}


//! Удаление статьи
export const deletePostAction = (id) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await deletePostApi(id);
        dispatch(deletePostActionCreator(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}
