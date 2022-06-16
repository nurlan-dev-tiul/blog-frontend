import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
    padding: 0px 60px;
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    margin: 20px auto;
    position: relative;
`;

export const LabelContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
`;

export const SaveImgBTN = styled(Button)`
    margin-bottom: 20px;
`;  

export const Label = styled.label`
    z-index: 100px;
`;

export const Input = styled.input`
    display: none;
`;

export const ButtonContainer = styled.div`
    margin: 20px 0px;
    width: 100%;
    padding-bottom: 20px;
`;

