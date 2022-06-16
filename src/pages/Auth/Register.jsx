import React from 'react';
import Alert from '@mui/material/Alert';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormInput } from 'components/FormInput';
import { AuthWrapper } from 'components/Auth';
import { registerSchemaValidation } from 'utils/validateSchema/authSchema';
import { registerAction } from 'store/auth/auth.action';
import { alertMessage } from 'store/alert/auth.selectors';
import { tabTitle } from 'utils/tabTitle';
import { 
    FormFooter,
    RegisterLink,
    AlertWrapper
} from './Auth.styles';

const Register = () => {

    const dispatch = useDispatch();
    const {errorMessage, showAlertMessage} = useSelector(alertMessage);
    const { isAuth } = useSelector(state => state.auth);
    
    //! REact-hook-form
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(registerSchemaValidation),
    });

    //! Отправка данных на сервер
    const postRegister = (newUser) => {
        dispatch(registerAction(newUser));
    }

    //! Если авторизован или зарегистрирован то редирект на главную
    if(isAuth){
        return <Navigate to='/' />
    }
    
    //Change Document Title
    tabTitle('Регистрация')

    return (
        <>
            <AuthWrapper title='Создать учетную запись'>
                <FormProvider {...form}>
                    <FormInput 
                        label='Имя пользователя' 
                        type='text'
                        name='firstName'
                        oneliner
                    />
                    <FormInput 
                        label='Email' 
                        type='text'
                        name='email'
                        oneliner
                    />
                    <FormInput 
                        label='Пароль' 
                        type='password'
                        name='password'
                        oneliner
                    />
                    {showAlertMessage ? (
                        <AlertWrapper spacing={2}>
                            <Alert variant="outlined" severity="error">
                                {errorMessage}
                            </Alert>
                        </AlertWrapper>
                    ) : null}
                    <Button 
                        variant='contained' 
                        color='primary'
                        onClick={form.handleSubmit(postRegister)} 
                        fullWidth
                        sx={{padding: '10px', marginTop: '22px'}}
                    >
                        Зарегистрироваться
                    </Button>
                </FormProvider>
                <FormFooter>У вас уже есть учетная запись?</FormFooter>
                <RegisterLink to='/login'>Войти</RegisterLink>
            </AuthWrapper>
        </>
    )
}

export default Register;
