import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Container = styled.div`
    display: flex;

`;

export const Sidebar = styled.div`
    width: 20%;
    margin-top: 25px;
    margin-right: 25px;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
    @media (max-width: 650px) {
        width: 100%;
    }
`;

