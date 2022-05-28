import React, { useCallback } from 'react';
import { dateFormat } from 'utils/momentDate';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import {
    PostLikeAndView,
    LikeBox,
    LikeIcon,
    IsLikedIcon,
    TimestampBox,
    TimeIcon
} from './LikeAndView.styles';
import { setPostLikesAction } from 'store/posts/posts.action';
import { Views } from './Views';

export const LikeAndView = React.memo(({postId, numViews, date, likes}) => {

    const dispatch = useDispatch();

    const { posts } = useSelector(state => state.posts);
    const { userDetails } = useSelector(state => state.auth);
    const isLiked = likes?.includes(userDetails?._id);

    const handleLike = () => {
        dispatch(setPostLikesAction(postId))
    }

    return (
        <PostLikeAndView>
            <LikeBox>
                {isLiked ? (
                    <IsLikedIcon onClick={handleLike} />
                ) : (
                    <LikeIcon onClick={handleLike}/>
                )}
                <Typography fontSize={14}>{likes?.length}</Typography>
            </LikeBox>
            <Views numViews={numViews} />
            <TimestampBox>
                <TimeIcon />
                <Typography fontSize={14}>{dateFormat(date)}</Typography>
            </TimestampBox>
        </PostLikeAndView>
    )
})
