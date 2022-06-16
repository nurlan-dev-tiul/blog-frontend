import React from 'react';
import Logo from 'assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Image } from 'styles/global';
import { ProfileMenu } from '../ProfileMenu';
import { useSelector } from 'react-redux';
import {
    HeaderBox,
	LogoBox,
	MenuBox,
	LogoImg,
	ToggleBTN,
	CloseIconBTN,
	MenuIconeBTN,
	MenuLink,
	MenuItemIcon,
	CreatePostBTN,
	AuthIcon,
	UserBox,
	AuthorImageBox,
	PostAuthor,
	DropdownMenu,
} from './Header.styles';

export const Header = () => {

	const [openMenu, setOpenMenu ] = React.useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const navigate = useNavigate();

	const { userDetails, isAuth } = useSelector(state => state.auth);
	
	const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

	//! Для адаптивного меню кнопка открытия и закрытия меню
	const menuToggleHandler = () => {
		setOpenMenu(!openMenu)
	}

	const handleCloseMenu = () => {
		if(openMenu) {
			setOpenMenu(false)
		}
	}

	return (
		<HeaderBox>
			<MenuBox>
				<LogoBox>
					<LogoImg src={Logo} />
				</LogoBox>
				<MenuLink to='/'>
					<MenuItemIcon />
				</MenuLink>
			</MenuBox>
			<MenuBox>
				<CreatePostBTN
					onClick={() => navigate('/create-post')}
					variant='contained' 
					color='success'
				>
					Добавить статью
				</CreatePostBTN>
				{isAuth ? (
					<DropdownMenu>
						<UserBox onClick={handleClick}>
							<AuthorImageBox>
								<Image src={userDetails?.profilePhoto} />
							</AuthorImageBox>
							<PostAuthor>{userDetails?.email}</PostAuthor>
						</UserBox>
						<ProfileMenu anchor={anchorEl} onClose={handleClose}/>
					</DropdownMenu>
				) : (
					<MenuLink to='/login'><AuthIcon /></MenuLink>
				)}
				<ToggleBTN onClick={menuToggleHandler}>
					{openMenu ?<CloseIconBTN /> : <MenuIconeBTN />}
				</ToggleBTN>
				{/* Adaptive menu */}
				<ProfileMenu responsiveMenu openMenu={openMenu} handleCloseMenu={handleCloseMenu}/>
			</MenuBox>
		</HeaderBox>
	)
}
