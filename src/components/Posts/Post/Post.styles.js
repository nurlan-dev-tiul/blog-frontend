import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { authorMixin, userImageBox } from 'styles/mixin';
import { colors } from 'styles/variables';

const { gray } = colors;

export const RecentPost = styled.div`
    width: 100%;
    height: 260px;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 25px;
    @media (max-width: 991px) {
        height: auto;
    }
    @media (max-width: 835px) {
        display: block;
    }
`;

export const ImagePostBox = styled.div`
    width: 35%;
    height: auto;

    @media (max-width: 1228px) {
        width: 30%;
    }
    @media (max-width: 1152px) {
        width: 40%;
    }
    @media (max-width: 991px) {
        width: 30%;
    }
    @media (max-width: 930px) {
        width: 30%;
    }
    @media (max-width: 835px) {
        width: 100%;
        height: 300px;
    }
`;

export const ImagePost = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PostContent = styled.div`
    padding: 25px;
    max-width: 65%;
    @media (max-width: 1228px) {
        max-width: 70%;
    }
    @media (max-width: 1152px) {
        max-width: 60%;
    }

    @media (max-width: 930px) {
        max-width: 60%;
    }

    @media (max-width: 835px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const PostTitle = styled(Link)`
    font-size: 23px;
    line-height: 30px;
    color: #050505;
    font-weight: 600;
    
    @media (max-width: 930px) {
        font-size: 20px;
    }
`;

export const PostDescription = styled.p`
    color: ${gray};
    font-size: 18px;
    padding: 15px 0px;
    font-weight: 300;
    line-height: 30px;

    @media (max-width: 930px) {
        font-size: 17px;
    }
`;

export const PostFooter = styled.div`
    padding-top: 20px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PostUserBox = styled.div`
    display: flex;
    align-items: center;
`;

export const PostDateAndAuthor = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const PostTimestamp = styled.span`
    color: ${gray};
    letter-spacing: 1px;
    font-size: 13px;
    margin-top: 8px;
`;

export const PostAuthor = styled(Link)`
    ${authorMixin}
`;

export const AuthorImageBox = styled.div`
    ${userImageBox}
`;

export const AuthorImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;





