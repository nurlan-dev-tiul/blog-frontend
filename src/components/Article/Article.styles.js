import styled from '@emotion/styled';
import { authorMixin, userImageBox } from 'styles/mixin';
import { colors } from 'styles/variables';

const { gray } = colors;

export const ImageBox = styled.div`
    width: 100%;
    height: 400px;
    max-height: 400px;
`;

export const ArticleImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Infoline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
    border-bottom: 1px solid #E8E9EB;
`;

export const UserBox = styled.div`
    display: flex;
    align-items: center;
`;

export const AuthorImageBox  = styled.div`
    ${userImageBox};
`;

export const PostAuthor = styled.span`
    ${authorMixin};
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 431px) {
        display: none;
    }
`;

export const Content = styled.div`
    margin-top: 25px;
    border-bottom: 1px solid #E8E9EB;
    padding-bottom: 25px;
`;

export const Title = styled.h1`
    padding-bottom: 25px;
    font-size: 32px;
`;

export const Text = styled.p`
    color: ${gray};
    font-size: 20px;
    font-weight: 300;
    line-height: 35px;

    @media (max-width: 930px) {
        font-size: 17px;
    }
`;

