import React from 'react';
import { Category } from 'components/Category';
import { Wrapper, AsideBox } from 'styles/global';
import { PopularPostList } from '../PopularPost';
import {
    MainContainer,
    PostsBox
} from './PostLayout.styles';

export const PostLayout = ({children}) => {
    return (
        <MainContainer>
            <PopularPostList postListGrid />
            <Wrapper>
                <PostsBox>
                    {children}
                </PostsBox>
                <AsideBox>
                    <Category />
                </AsideBox>
            </Wrapper>
        </MainContainer>
    )
}
