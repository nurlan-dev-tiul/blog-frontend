import styled from '@emotion/styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typography } from '@mui/material';

export const AuthPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E9F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AuthContainer = styled.div`
    width: 400px;
    background-color: white;
    border-radius: 12px;
    margin: 0px 20px;
    background-color: #fff;
`;

export const BackLinkBox = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    color: #000;
    opacity: 0.5;
`;

export const ArrowIcon = styled(ArrowBackIosIcon)`
    font-size: 19px;
`;

export const BackLink = styled(Typography)`
    font-size: 17px;
`;

export const FormWrapper = styled.div`
    width: 100%;
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 60px;
`;

export const Form = styled.div`
    padding-left: 50px;
    padding-right: 50px;

    @media (max-width: 400px) {
        padding: 0px 30px;
    }
`;

export const FormHeader = styled(Typography)`
    text-align: center;
    font-weight: bold;
    color: #3F434A;
    padding-bottom: 15px;
`;




