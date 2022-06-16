import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide'
import { AppBarComponent } from './AppBar';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = (props) => {
    const {  open, children, title, onClose, fullWidth, headerTitle } = props;

    //! Если fullWidth есть тогда открываем модальное окно на весь экран
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
