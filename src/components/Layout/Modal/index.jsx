import React from 'react';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import {
    ModalContainer,
    Wrapper,
    SearchBox,
    SearchInput,
    SearchButton,
    SearchIcon,
    FabBox,
    ButtonClose
} from './Modal.styles';

export const Modal = ({openSearch, handleClose}) => {
    return (
        <ModalContainer open={openSearch}>
            <Wrapper>
                <SearchBox>
                    <SearchInput 
                        placeholder='Я ищу ...' 
                    />
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </SearchBox>
            </Wrapper>
            <FabBox>
                <ButtonClose color="error" aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </ButtonClose>
            </FabBox>
        </ModalContainer>
    )
}
