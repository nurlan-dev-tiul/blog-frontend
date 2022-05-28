import { colors } from './variables';

const { gray } = colors;

export const authorMixin = `
    color: ${gray};
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 600;
`;

export const userImageBox = `
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${gray};
    overflow: hidden;
`;