import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StepBody = styled.div`

`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
    border: 1px dashed #848482;
    width: 100%;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageIcon = styled.img`
    width: 170px;
    margin-bottom: 40px;
`;

export const InputContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;

`;

export const ImageInput = styled.input`
    display: none;
`;

export const LabelInput = styled.label`

`;

export const ErrorText = styled(Typography)`
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    color: rgb(239, 83, 80);
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
