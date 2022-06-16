import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 20px;
`;


export const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
