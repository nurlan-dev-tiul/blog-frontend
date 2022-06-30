import styled from '@emotion/styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ToggleIconMenu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { authorMixin, userImageBox } from 'styles/mixin';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const HeaderBox = styled.div`
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    z-index: 300;
    width: 100%;
    height: 78px;
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

export const ToggleBTN = styled.button`
    cursor: pointer;
    display: none;
    padding: 0px;
    margin-right: -6px;
    border: none;
    background-color: transparent;
    @media (max-width: 600px) {
        display: block;
    }
`;

export const MenuIconeBTN = styled(ToggleIconMenu)`
    cursor: pointer;
    font-size: 30px;

    z-index: 100;
`;

export const CloseIconBTN = styled(CloseIcon)`
    cursor: pointer;
    font-size: 30px;

    z-index: 100;
`;

export const CreatePostBTN = styled(Button)`
    z-index: 300;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const DropdownMenu = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`;


export const MenuItemIcon = styled(HomeRoundedIcon)`
    margin-left: 10px;
    font-size: 28px;
    color: #595959;

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
    width: ${props => props.lWidth ? '70px' : '30px'};
    height: ${props => props.lWidth ? '70px' : '30px'};
    margin: ${props => props.lWidth ? '0px auto' : '0px 0px 0px 10px'};;
`;

export const PostAuthor = styled.span`
    ${authorMixin};
    margin-left: 10px;
    font-size: 17px;
    &:hover{
        text-decoration: underline;
    }
`;

