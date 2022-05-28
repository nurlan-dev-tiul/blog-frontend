import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    AuthPage,
    AuthContainer,
    FormWrapper,
    FormHeader,
    Form,
    BackLinkBox,
    ArrowIcon,
    BackLink
} from './Auth.styles';

export const AuthWrapper = ({children, title}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <AuthPage>
            <AuthContainer>
                <BackLinkBox onClick={goBack}>
                    <ArrowIcon />
                    <BackLink>Назад</BackLink>
                </BackLinkBox>
                <FormWrapper>
                    <FormHeader variant='h6'>
                        {title}
                    </FormHeader>
                    <Form>
                        {children}
                    </Form>
                </FormWrapper>
            </AuthContainer>
        </AuthPage>
    )
}
