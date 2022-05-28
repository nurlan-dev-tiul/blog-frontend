import { alertAction } from "./alert.action";

const initialState = {
    errorMessage: null,
    showAlertMessage: false
};

export const alertReducer = (state = initialState, action) => {
    switch(action.type){
        case alertAction.ERROR_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                errorMessage: action.payload,
            }
        case alertAction.CLOSE_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: false,
                errorMessage: null
            }    
        default:
            return state
    }
}