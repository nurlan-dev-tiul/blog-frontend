import React from 'react';
import { Link } from 'react-router-dom';
import { tabTitle } from 'utils/tabTitle';
import {
    MainContainer,
    Wrapper,
    Title,
    Text
} from './NotFound.styles'

const NotFound = () => {

    //! Change Document Title
    tabTitle('404 - Страница не существует')

    return (
        <MainContainer>
            <Wrapper>
                <Title>404</Title>
                <Text>Мы ничего не нашли по этому адресу</Text>
                <Text>Вернуться на - <Link to='/'>Главную страницу</Link></Text>
            </Wrapper>
        </MainContainer>
    )
}

export default NotFound;
