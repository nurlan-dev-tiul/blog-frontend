import React from 'react';
import Logo from 'assets/logo.png';
import {
    FooterContainer,
    LogoBox,
    LogoImg
} from './Footer.styles'


export const Footer = () => {
    return (
        <FooterContainer>
            <LogoBox>
                <LogoImg src={Logo} />
            </LogoBox>
        </FooterContainer>
    )
}
