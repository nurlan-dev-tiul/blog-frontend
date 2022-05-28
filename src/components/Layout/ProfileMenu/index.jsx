import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from 'store/auth/auth.action';
import {LinkItem} from './ProfileMenu.styles';

export const ProfileMenu = ({anchor, onClose}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const open = Boolean(anchor);
    const { userDetails } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logoutAction(navigate));
    }

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
