import React from 'react';
import { dateFormat } from 'utils/momentDate';
import { useDispatch, useSelector } from 'react-redux';
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

export const LikeAndView = ({postId, numViews, date, likes, positionBox}) => {

    const [isLiked, setIsLiked] = React.useState(false);

    const dispatch = useDispatch();

    const { userDetails } = useSelector(state => state.auth);

    //! Сохраняем лайк
    const handleLike = () => {
        dispatch(setPostLikesAction(postId))
    }

    //! Если в массиве лайков есть наш id тогда состояние будет true
    React.useEffect(() => {
        setIsLiked(likes?.includes(userDetails?._id));
    }, [likes, postId, userDetails])

    return (
        <PostLikeAndView positionBox>
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
}
