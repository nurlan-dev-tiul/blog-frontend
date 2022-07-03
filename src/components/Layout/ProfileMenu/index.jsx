import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from 'store/auth/auth.action';
import { Button } from '@mui/material';
import { Image } from 'styles/global';
import { Category } from 'components/Category';
import { scrollToUp } from 'utils/scrollToElement';
import { AuthorImageBox } from '../Header/Header.styles';
import {
    LinkItem,
    ResponseMenuBox,
	ResponseCreateBTN,
	ProfileLink,
	ProfileSignOut,
	UserContainer,
	CategoryContainer,
} from './ProfileMenu.styles';


export const ProfileMenu = ({anchor, onClose, responsiveMenu, openMenu, handleCloseMenu}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const open = Boolean(anchor);
    
    const { userDetails, isAuth } = useSelector(state => state.auth);

    //! Logout 
    const handleLogout = () => {
        dispatch(logoutAction(navigate));
    }

    //! Закрываем меню
    const handleClose = () => {
        handleCloseMenu();
    }

    //! При клике на кнопку добавить статью закрываем меню
    const createPostLink = () => {
        navigate('/create-post')
        handleCloseMenu();
    }

    //! При клике на меню категории будет скроллить вверх к первой статье и закрываться меню
    const handleScrollToPost = () => {
        handleCloseMenu()
        scrollToUp()
    }

    //! UI для маленьких экранов
    if(responsiveMenu){
        return (
            <ResponseMenuBox
                style={openMenu ? { right: 0 } : {}}
            >
            {isAuth ? (
                <UserContainer>
                    <AuthorImageBox lWidth>
                        <Image src={userDetails?.profilePhoto} />
                    </AuthorImageBox>
                    <ProfileLink to={`/profile/${userDetails?._id}`} onClick={handleClose}>Посмотреть профиль</ProfileLink>
                    <ProfileSignOut onClick={handleLogout}>Выйти</ProfileSignOut>
                </UserContainer>
            ) : (
                <Button
                    variant='outlined'
                    fullWidth
                    onClick={() => navigate('/login')}
                >
                    Войти на сайт
                </Button>
            )}
                { isAuth ? (<ResponseCreateBTN 
                    variant='contained' 
                    color='success'
                    onClick={createPostLink}
                    fullWidth
                >
                    Добавить статью
                </ResponseCreateBTN>
                ) : null}
                <CategoryContainer>
                    <Category responsive handleScrollToPost={handleScrollToPost} />
                </CategoryContainer>
            </ResponseMenuBox>
        )
    }

    //! UI для десктопа
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchor}
            open={open}
            onClose={onClose}
        >
            <MenuItem onClick={onClose}>
                <LinkItem to={`/profile/${userDetails?._id}`}>Посмотреть профиль</LinkItem>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
        </Menu>
    )
}
