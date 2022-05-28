import React from 'react';
import Alert from '@mui/material/Alert';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormInput } from 'components/FormInput';
import { AuthWrapper } from 'components/Auth';
import { loginAction } from 'store/auth/auth.action';
import { alertMessage } from 'store/alert/auth.selectors';
import { loginSchemaValidation } from 'utils/validateSchema/authSchema';
import { 
    FormFooter,
    RegisterLink,
    AlertWrapper
} from './Auth.styles';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const {errorMessage, showAlertMessage} = useSelector(alertMessage);
    const { isAuth } = useSelector(state => state.auth);

    //! Здесь адрес той страницы на которую мы хотели попасть а попали на страницу логина 
    //! и после авторизации редирект будет на страницу на которую изначально хотели попасть
    const fromPage = location.state?.from?.pathname || '/';
    React.useEffect(() => {
        if(isAuth){
            navigate(fromPage, {replace: true}) || <Navigate to='/' />;
        }

    }, [navigate, fromPage, isAuth])

    //! React-hook-form и схема валидации
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(loginSchemaValidation)
    });

    //! Отправка данных логина на сервер
    const postLogin = (user) => {
        dispatch(loginAction(user))
    }

    return (
        <>
            <AuthWrapper title='Вход на сайт'>
                <FormProvider {...form}>
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
                    ): null}
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={form.handleSubmit(postLogin)}
                        fullWidth
                        sx={{padding: '10px', marginTop: '22px'}}
                    >
                        Войти
                    </Button>
                </FormProvider>
                <FormFooter>У вас нет учетной записи?</FormFooter>
                <RegisterLink to='/register'>Зарегистрироваться</RegisterLink>
            </AuthWrapper>
        </>
    )
}

export default Login;
