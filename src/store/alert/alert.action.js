export const alertAction = {
    ERROR_ALERT_MESSAGE: 'ALERT.ERROR_ALERT_MESSAGE',
    CLOSE_ALERT_MESSAGE: 'ALERT.CLOSE_ALERT_MESSAGE'
}


//! Для ошибок
export const errorAlertActionCreator = (message) => {
    return {
        type: alertAction.ERROR_ALERT_MESSAGE,
        payload: message
    }
}

 //! Чтобы очистить состояние ошибок
export const closeAlertActionCreator = () => {
    return {
        type: alertAction.CLOSE_ALERT_MESSAGE,
    }
}