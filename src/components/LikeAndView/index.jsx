import React from 'react';
import Popover from '@mui/material/Popover';
import { dateFormat } from 'utils/momentDate';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { setPostLikesAction } from 'store/posts/posts.action';
import { Views } from './Views';

import {
    PostLikeAndView,
    LikeBox,
    LikeIcon,
    IsLikedIcon,
    TimestampBox,
    TimeIcon
} from './LikeAndView.styles';


export const LikeAndView = ({postId, numViews, date, likes, positionBox, authorPost}) => {

    const [isLiked, setIsLiked] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const dispatch = useDispatch();

    const { userDetails, isAuth } = useSelector(state => state.auth);

    //! Сохраняем лайк
    const handleLike = (event) => {
        if(isAuth){
            dispatch(setPostLikesAction(postId))
        }else{
            setAnchorEl(event.currentTarget);
        }

    }

    //! Если в массиве лайков есть наш id тогда состояние будет true
    React.useEffect(() => {
        setIsLiked(likes?.includes(userDetails?._id));
    }, [likes, postId, userDetails])

    return (
        <PostLikeAndView positionBox={positionBox} authorPost={authorPost}>
            <LikeBox>
                {isLiked ? (
                    <IsLikedIcon onClick={handleLike} />
                ) : (
                    <LikeIcon onClick={handleLike}/>
                )}
                <Typography fontSize={14}>{likes?.length}</Typography>
            </LikeBox>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
        <Typography sx={{ p: 2 }}><Link to='/login'>Войдите в аккаунт</Link></Typography>
        
        </Popover>
            <Views numViews={numViews} />
            <TimestampBox>
                <TimeIcon />
                <Typography fontSize={14}>{dateFormat(date)}</Typography>
            </TimestampBox>
        </PostLikeAndView>
    )
}
