import styled from '@emotion/styled';
import { authorMixin, userImageBox } from 'styles/mixin';
import { colors } from 'styles/variables';

const { gray } = colors;

export const ArticleBox = styled.article`
    width: 75%;
    padding-top: 25px;
    padding-bottom: 25px;
    @media (max-width: 1152px) {
        width: 100%;
    }
`;

export const CommentsLength = styled.h2`
    margin-top: 25px;
`;