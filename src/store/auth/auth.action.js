import { loginApi, registerApi, getProfileApi } from "services/auth/authApi";
import { closeAlertActionCreator, errorAlertActionCreator } from "store/alert/alert.action";

//! Константы Action
export const authAction = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
    LOGOUT_USER: 'AUTH.LOGOUT_USER',
    LOADING: 'AUTH.LODAING'
}

//! Action Creators
export const setUserDetails = (userDetails) => {
    return {
        type: authAction.SET_USER_DETAILS,
        payload: userDetails
    }
}

//! Action Creators
export const loadingActionCreators = () => {
    return {
        type: authAction.LOADING,
    }
}

//! Action thunk запрос на сервер на получение регистрации и отправка данных в store
export const registerAction = (newUser) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        dispatch(loadingActionCreators());

        const {data} = await registerApi(newUser);
        localStorage.setItem('userBlog', JSON.stringify(data.token));
        
        //! Dispatch in store
        dispatch(setUserDetails(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
        
    } catch (error) {
        console.log(error?.response?.data?.message);
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Action thunk запрос на сервер на получение регистрации и отправка данных в store
export const loginAction = (user) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        dispatch(loadingActionCreators());

        const {data} = await loginApi(user);
        localStorage.setItem('userBlog', JSON.stringify(data.token));
        
        //! Dispatch in store
        dispatch(setUserDetails(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
        
    } catch (error) {
        dispatch(errorAlertActionCreator(error?.response?.data?.message))
    }
}

//! Получаем профиль пользователя
export const getProfileAction = () => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    try {
        const { data } = await getProfileApi();

         //! Dispatch in store
        dispatch(setUserDetails(data));

        if(showAlertMessage){
            dispatch(closeAlertActionCreator());
        }
    } catch (error) {
        
    }
}

export const logoutAction = (navigate) => async (dispatch, getState) => {
    const { showAlertMessage } = getState().alert;
    localStorage.clear();
    dispatch({type: authAction.LOGOUT_USER})
    if(showAlertMessage){
        dispatch(closeAlertActionCreator());
    }
    navigate('/');
}

