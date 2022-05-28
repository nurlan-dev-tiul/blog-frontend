import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import {
    ViewIcon,
    ViewBox,
} from '../LikeAndView.styles'

export const Views = React.memo(({numViews}) => {
    
    return (
        <ViewBox>
            <ViewIcon />
            <Typography fontSize={14}>{numViews}</Typography>
        </ViewBox>
    )
})
