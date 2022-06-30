import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import{
    MainContainer
}from './Loading.styles';

export const Loading = () => {
    return (
        <MainContainer>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </MainContainer>
    )
}
