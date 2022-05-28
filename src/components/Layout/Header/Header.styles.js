import styled from '@emotion/styled';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { authorMixin, userImageBox } from 'styles/mixin';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export const HeaderBox = styled.div`
    width: 100%;
    padding: 22px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E8E9EB;
    background-color: #fff;
`;

export const LogoBox = styled.div`
    width: 120px;
    overflow: hidden;
    margin-right: 20px;
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const MenuBox = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchIcon = styled(ManageSearchOutlinedIcon)`
    font-size: 32px;
    cursor: pointer;
    color: #595959;
    margin-left: 10px;
`;

export const MenuItem = styled(Typography)`
    margin-left: 10px;
    font-size: 17px;
    color: #595959;
    font-weight: 600;
`;

export const MenuLink = styled(Link)`
    display: flex;
    align-items: center;
`;

export const AuthIcon = styled(AccountCircleOutlinedIcon)`
    font-size: 30px;
    cursor: pointer;
    color: #595959;
    margin-right: 15px;
    margin-left: 15px;
`;

export const UserBox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const AuthorImageBox  = styled.div`
    ${userImageBox}
    width: 30px;
    height: 30px;
    margin-left: 10px;
`;

export const PostAuthor = styled.span`
    ${authorMixin};
    margin-left: 10px;
    font-size: 17px;
    &:hover{
        text-decoration: underline;
    }
`;

