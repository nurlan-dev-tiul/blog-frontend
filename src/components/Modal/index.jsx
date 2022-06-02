import React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide'
import { AppBarComponent } from './AppBar';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = (props) => {
    const {  open, children, title, onClose, fullWidth, headerTitle } = props;

    if(fullWidth){
        return (
        <Dialog 
            onClose={onClose} 
            open={open}
            TransitionComponent={Transition}
            fullScreen
        >
            <AppBarComponent onClose={onClose} headerTitle={headerTitle} />
            <DialogTitle>{title}</DialogTitle>
                {children}
            </Dialog>
        )
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
                {children}
        </Dialog>
    )
}
