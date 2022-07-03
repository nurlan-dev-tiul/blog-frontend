import React from 'react';
import { Category } from 'components/Category';
import { Wrapper, AsideBox } from 'styles/global';

import {
    MainContainer,
    PostsBox
} from './PostLayout.styles';

export const PostLayout = ({children, handleScrollToPost, scrollAmount}) => {

    return (
        <MainContainer>
            <Wrapper>
                <PostsBox>
                    {children}
                </PostsBox>
                <AsideBox>
                    <Category handleScrollToPost={handleScrollToPost} scrollAmount={scrollAmount} />
                </AsideBox>
            </Wrapper>
        </MainContainer>
    )
}
