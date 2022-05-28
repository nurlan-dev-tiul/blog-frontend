import { getPostsApi, createPostApi, getPostsByCategoryApi, getSinglePostApi, setPostLikesApi } from "services/posts/postsApi"
import { closeAlertActionCreator, errorAlertActionCreator } from "store/alert/alert.action";
import { 
    newPostActionCreator, 
    setAllPostsActionCreator, 
    setSinglePostActionCreator,
    setPostLikesActionCreators
} from "./actions/action.creators";


//* Action thunk 
//! Новый пост
export const createPostAction = (newPost, navigate) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await createPostApi(newPost);
        dispatch(newPostActionCreator(newPost))
        navigate('/');

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Получение всех постов
export const getPostsAction = (category) => async(dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        if(category){
            const { data } = await getPostsByCategoryApi(category);
            dispatch(setAllPostsActionCreator(data));

            if(showAlertMessage){
                dispatch(closeAlertActionCreator());
            }
        } else {
                const { data } = await getPostsApi();
                dispatch(setAllPostsActionCreator(data))
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
