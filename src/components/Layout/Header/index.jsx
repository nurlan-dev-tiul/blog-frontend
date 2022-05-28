import React from 'react';
import Logo from 'assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Modal } from '../Modal';
import {
    HeaderBox,
	LogoBox,
	MenuBox,
	LogoImg,
	SearchIcon,
	MenuLink,
	MenuItem,
	AuthIcon,
	UserBox,
	AuthorImageBox,
	PostAuthor,
	
} from './Header.styles';
import { Image } from 'styles/global';
import { ProfileMenu } from '../ProfileMenu';
import { userDetail } from 'store/auth/auth.selector';
import { useSelector } from 'react-redux';

export const Header = () => {

	const [openSearch, setOpenSearch ] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const navigate = useNavigate();

	const { userDetails, isAuth } = useSelector(userDetail);

	const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

	const handleCloseModal = () => {
		setOpenSearch(false)
	}

	return (
		<HeaderBox>
			<MenuBox>
				<LogoBox>
					<LogoImg src={Logo} />
				</LogoBox>
				<SearchIcon onClick={() => setOpenSearch(true)} />
				{/* <MenuLink to='/'>
					<MenuItem>Главная</MenuItem>
				</MenuLink> */}
			</MenuBox>
			<MenuBox>
				
				<Button
					onClick={() => navigate('/create-post')}
					variant='contained' 
					color='success'
				>
					Добавить статью
				</Button>
				{isAuth ? (
					<>
						<UserBox onClick={handleClick}>
							<AuthorImageBox>
								<Image src={userDetails?.profilePhoto} />
							</AuthorImageBox>
							<PostAuthor>{userDetails?.email}</PostAuthor>
						</UserBox>
						<ProfileMenu anchor={anchorEl} onClose={handleClose}/>
					</>
				) : (
					<MenuLink to='/login'><AuthIcon /></MenuLink>
				)}
			</MenuBox>
			<Modal openSearch={openSearch} handleClose={handleCloseModal} />
		</HeaderBox>
	)
}
