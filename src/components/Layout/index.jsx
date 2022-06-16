import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header'
import {
    Wrapper
} from './Layout.styles';

export const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <Outlet />
        </Wrapper>
    )
}
