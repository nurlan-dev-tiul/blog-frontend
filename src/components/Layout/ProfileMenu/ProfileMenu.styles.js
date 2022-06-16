import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const LinkItem = styled(Link)`
    color: inherit;
`;

export const ResponseMenuBox = styled.div`
    position: fixed;
    top: 78px;
    right: -300px;
    bottom: 0;
    background-color: #fff;
    width: 300px;
    height: calc(100% - 70px);
    transition: 0.3s ease right;
    padding: 15px 25px;
    display: none;
    overflow-y: auto;

    @media (max-width: 600px) {
        display: block;
    }
`;

export const UserContainer = styled.div`
    margin: 0px auto;
    text-align: center;
`;

export const CategoryContainer = styled.div`
    margin-top: 10px;
`;

export const ResponseCreateBTN = styled(Button)`
    margin-top: 10px;
    text-transform: none;
`;

const ProfileLinkStyle = css`
    padding: 5px 10px;
    border: 1px solid #E8E9EB;
    margin-top: 10px;
    display: block;
    color: #000000;
    font-weight: 600;
    letter-spacing: 1px;
`

export const ProfileLink = styled(Link)`
    ${ProfileLinkStyle}
    font-size: 14px;
`;

export const ProfileSignOut = styled.button`
    ${ProfileLinkStyle}
    background-color: transparent;
    width: 100%;
    font-size: 13px;
    cursor: pointer;
`
