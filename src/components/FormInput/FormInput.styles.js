import styled from '@emotion/styled';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Typography } from '@mui/material';
import Select from '@mui/material/Select';

const inputStyle = `
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #E8E9EB;
    outline: none;
    padding: 13px;
    border-radius: 15px;
    margin-top: 10px;
`

export const LabelContainer = styled.div`
    margin-top: 20px;
`;

export const InputContainer = styled.div`
    position: relative;
`;

export const FormLabel = styled.label`
    font-size: 14px;
    color: #8A9099;
`;

export const Input = styled.input`
    ${inputStyle}
`;

export const TextArea = styled.textarea`
    ${inputStyle}
`;

export const SelectInp = styled(Select)`
    ${inputStyle}
    padding: 0px;
`;

export const VisableIcon = styled(VisibilityOutlinedIcon)`
    margin: auto;
    position: absolute;
    right: 10px;
    top: 9px;
    bottom: 0;
    cursor: pointer;
    color:#8A9099; 
`;

export const VisableOffIcon = styled(VisibilityOffOutlinedIcon)`
    margin: auto;
    position: absolute;
    right: 10px;
    top: 9px;
    bottom: 0;
    cursor: pointer;
    color:#8A9099;
`;

export const ErrorText = styled(Typography)`
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    color: rgb(239, 83, 80);
`;







