import React from 'react';
import { LikeAndView } from 'components/LikeAndView';
import { Image } from 'styles/global';
import {
    ImageBox,
    Infoline,
    UserBox,
    AuthorImageBox,
    PostAuthor,
    Content,
    Title,
    Text
} from './Article.styles';

export const Detail = (props) => {

    const {_id, likes, title, description, image, user, numViews, isLiked, createdAt} = props;

    return (
        <>
            <ImageBox>
                <Image src={image} />
            </ImageBox>
            <Infoline>
                <UserBox>
                    <AuthorImageBox>
                        <Image src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png' />
                    </AuthorImageBox>
                    <PostAuthor>{user?.firstName}</PostAuthor>
                </UserBox>
                <LikeAndView
                    postId={_id}
                    numViews={numViews} 
                    date={createdAt}
                    likes={likes}
                    isLiked={isLiked}
                />
            </Infoline>
            <Content>
                <Title>{title}</Title>
                <Text>
                    {description}
                </Text>
            </Content>
        </>
    )
}
