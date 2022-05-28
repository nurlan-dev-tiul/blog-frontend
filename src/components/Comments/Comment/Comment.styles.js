import styled from '@emotion/styled';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { authorMixin, userImageBox } from 'styles/mixin';
import { colors } from 'styles/variables';


const { gray } = colors;

export const MainContainer = styled.div`
    border-top: 1px solid #E8E9EB;
    margin-top: 25px;
`;

export const Infoline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
`;

export const UserBox = styled.div`
    display: flex;
    align-items: center;
`;

export const AuthorImageBox  = styled.div`
    ${userImageBox};
`;

export const PostAuthor = styled.span`
    ${authorMixin};
    margin-left: 10px;
    margin-right: 10px;
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const RemoveIcon = styled(DeleteOutlineIcon)`
    font-size: 20px;
    margin-bottom: 2px;
    margin-right: 10px;
    color: #555555;
    cursor: pointer;
`;

export const Content = styled.div`
    margin-top: 15px;
`;

export const Text = styled.p`
    color: ${gray};
    line-height: 32px;
    font-size: 17px;
`;

