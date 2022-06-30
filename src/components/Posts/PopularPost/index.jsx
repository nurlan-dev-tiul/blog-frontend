import React from 'react'
import { Image } from 'styles/global';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularPostsAction } from 'store/posts/posts.action';
import { dateFormat } from 'utils/momentDate';
import { truncateString } from 'utils/withStrings/workingWithString';
import {
    PopularPostGrid,
    PopularPost,
    ImageBox,
    Overlay,
    InfoPost,
    CategoryDateBox,
    CategoryBox,
    DateBox,
    Title,
    Container,
    Content,
    ImageWrapper
} from './Popular.styles';
import { Link } from 'react-router-dom';

export const PopularPostList = ({postListGrid, postId}) => {

    const dispatch = useDispatch();
    const { popularPosts } = useSelector(state => state.posts)

    React.useEffect(() => {
        dispatch(getPopularPostsAction());
    }, [dispatch]);

    return (
        <>
            {postListGrid ? (
                <PopularPostGrid>
                    {popularPosts?.map((popular, index) => (
                        <ImageBox key={popular?._id}>
                            <Image src={popular?.image} />
                            <Overlay>
                                <InfoPost firstTitle={index === 0}>
                                    <CategoryDateBox>
                                        <CategoryBox>{popular?.category?.title}</CategoryBox>
                                        <DateBox postListGrid>{dateFormat(popular?.createdAt)}</DateBox>
                                    </CategoryDateBox>
                                    <Link to={`/detail/${popular?._id}`}>
                                        <Title postListGrid firstTitle={index  === 0}>
                                            {truncateString(popular?.title, 50, '...')}
                                        </Title>
                                    </Link>
                                </InfoPost>
                            </Overlay>
                        </ImageBox>
                    ))}
                    
                </PopularPostGrid>
            ) : (
                <PopularPost>
                    {popularPosts?.map((popular) => (
                        <Container key={popular?._id}>
                            <ImageWrapper>
                                <Image src={popular?.image} />
                            </ImageWrapper>
                            <Content>
                                <Link to={`/detail/${popular?._id}`}>
                                    <Title>{truncateString(popular?.title, 23, '...')}</Title>
                                </Link>
                                <DateBox>{dateFormat(popular?.createdAt)}</DateBox>
                            </Content>
                        </Container>
                    ))}
                </PopularPost>   
            )}
        </>
    )
}

