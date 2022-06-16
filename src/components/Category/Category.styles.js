import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CategoryBox = styled.div`
    position: sticky;
    top: 0;
    right: 0;
    @media (max-width: 1152px) {
        position: static;
    }
`;

export const UlCategory = styled.ul`
    @media (max-width: 1152px) {
        padding: 0;
    }
`;

export const ListCategory = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
    list-style: none; 
    margin-bottom: ${props => props.responsive ? '0px' : '1.4rem'};
`;

export const CategItem = styled(Link)`
    color: #000000;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    display: block;
    padding: 13px 0;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        color:#D93D59;
    }
`;

export const Count = styled.span`
    margin-left: 10px;
`;

export const NotPostsText = styled.h3`
    text-align: center;
    margin-top: 20px;
`;