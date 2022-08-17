import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyle = css`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    body{
        position: relative;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    
    @media (max-width: 1152px) {
        display: block;
        position: relative;
    }
`;

export const LoadContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px !important;
    transform: translate(-50%, -50%);
`

export const AsideBox = styled.div`
    width: 25%;
    margin-left: 25px;
    margin-top: 25px;
    @media (max-width: 1152px) {
        width: 100%;
        margin-right: 25px;
        margin-left: 0px;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
`

export const ModalBox = styled.div`
    width: 40%;
    margin: 15px auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    @media (max-width: 950px) {
        width: 60%;
    }

    @media (max-width: 650px) {
        width: 90%;
    }
`;

