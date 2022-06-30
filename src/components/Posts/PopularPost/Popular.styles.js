import styled from '@emotion/styled';

import { colors } from 'styles/variables';

const { gray } = colors;

export const PopularPostGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    grid-gap: 25px;
    
    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 250px;
    }

`;

export const ImageBox = styled.div`
    position: relative;
    background-color: #d7d7d8;
    overflow: hidden;
    cursor: pointer;

    &:nth-of-type(7n+1){
        grid-column: span 2;
        grid-row: span 2;
        font-size: 30px;
    }

    &:hover img{
        transform: scale(1.1);
    }

    @media (min-width: 1400px) {
        &:nth-of-type(7n+1){
            grid-column: unset;
            grid-row: unset;
        }
    }

    @media (max-width: 1125px) {
        &:nth-of-type(7n+1){
            grid-column: span 1;
            grid-row: span 2;
        }
    }

    @media (max-width: 640px) {
        &:nth-of-type(7n+1){
            grid-column: span 2;
            grid-row: unset;
        }
    }

    @media (max-width: 600px) {
        &:nth-of-type(7n+1){
            grid-column: unset;
            grid-row: unset;
        }
    }
`;

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    background: rgb(0,0,0,0.7);  
    color: #fff;
    z-index: 50;
`;

export const InfoPost = styled.div`
    z-index: 1;
    width: 100%;
    height: ${props => props.firstTitle ? '32%' : '40%'};
    padding: 5px;

    @media (max-width: 640px) {
        height: 40%;
    }

    @media (min-width: 1400px) {
        height: 40%;
    }    
`;

export const CategoryDateBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 15px;

    @media (max-width: 1125px) {
        font-size: ${props => props.firstTitle ? '25px' : '17px'};
        padding: 0px 5px;
    }
    @media (min-width: 1400px) {
        padding: 0px 5px;
    }   
`;

export const CategoryBox = styled.div`
    padding: 8px;
    border-radius: 12px;
    background-color: cadetblue;
    font-size: 15px;
`;

export const DateBox = styled.div`
    margin-left: 15px;
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.postListGrid ? '#fff' : `${gray}`};
`;

export const Title = styled.h6`
    margin-top: ${props => props.postListGrid ? '10px' : '0px'};
    line-height: ${props => props.postListGrid ? null : '20px'};
    color: ${props => props.postListGrid ? '#fff' : '#000'};
    padding-left: 15px;
    font-size: ${props => props.firstTitle ? '40px' : '17px'};

    @media (max-width: 1125px) {
        font-size: ${props => props.firstTitle ? '25px' : '17px'};
        padding-left: 5px;
        padding-right: 5px;
    }
    @media (max-width: 640px) {
        font-size: 17px;
    }
    @media (min-width: 1400px) {
        font-size: 17px;
        padding-left: 5px;
    }   
`;

export const PopularPost = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1150px) {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        gap: 10px;
    } 
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    } 
`;

export const Container = styled.div`
    display: flex;
    padding-bottom: 15px;
`;

export const ImageWrapper = styled.div`
    width: 30%;
    height: 67px;
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    line-height: 31px;
`;

