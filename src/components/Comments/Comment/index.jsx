import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { deleteCommentAction } from 'store/comment/comment.action';
import { Typography } from '@mui/material';
import { Image } from 'styles/global';
import { dateFormat } from 'utils/momentDate';
import { 
    MainContainer,
    Infoline,
    UserBox,
    AuthorImageBox,
    PostAuthor,
    Content,
    Text,
    RemoveIcon,
    DateContainer
} from './Comment.styles';

export const Comment = ({id, description, author, date}) => {
    const dispatch = useDispatch();

    const { userDetails } = useSelector(state => state.auth);

    //! Если id авторизованного совпадает с id автора. В html мы будем показывать иконку удаления
    const isAuthor = userDetails?._id === author?._id;

    return (
        <MainContainer>
            <Infoline>
                <UserBox>
                    <AuthorImageBox>
                        <Image src={author?.profilePhoto} />
                    </AuthorImageBox>
                    <PostAuthor>{author?.firstName}</PostAuthor>
                    
                </UserBox>
                <DateContainer>
                    {isAuthor && <RemoveIcon onClick={() => dispatch(deleteCommentAction(id))} />}
                    <Typography fontSize={14} sx={{color: '#555555'}}>{dateFormat(date)}</Typography>
                </DateContainer>
            </Infoline>
            <Content>
                <Text>{description}</Text>
            </Content>
        </MainContainer>
    )
}
