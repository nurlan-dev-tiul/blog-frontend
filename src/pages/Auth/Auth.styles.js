import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const AlertWrapper = styled(Stack)`
    width: 100%;
    margin-top: 20px;
`;

export const FormFooter = styled(Typography)`
    color: #8A9099;
    text-align: center;
    margin-top: 20px;
`;
export const RegisterLink = styled(Link)`
    color: #1976d2;
    display: flex;
    justify-content: center;
    text-decoration: none;
`;




