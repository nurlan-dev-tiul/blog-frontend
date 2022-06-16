import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
    height: 290px;
    position: relative;
    width: 100%;
    @media (max-width: 980px) {
        height: auto;
    }
    @media (max-width: 834px) {
        height: 400px;
    }
`;

export const UserWrapper = styled.div`
    display: flex;

    @media (max-width: 834px) {
        display: block;
        text-align: center;
        margin-top: 20px;
    }

`;

export const InfoWrapper = styled.div`
    display: flex;
    @media (max-width: 834px) {
        display: block;
        text-align: center;
        margin-top: 20px;
        padding-left: 0px;
    }
`;

export const UserBackground = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    box-sizing: border-box;
    margin-left: 0px !important;
    @media (max-width: 834px) {
        height: 400px;
    }
`;

export const ProfileBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 80%;
    height: 150px;
    background-color: #f9f9f9;
    margin: 0 auto;
    border-radius: 22px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    @media (max-width: 1250px) {
        width: 80%;
    }

    @media (max-width: 980px) {
        display: flex;
        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    @media (max-width: 834px) {
        width: 50%;
        display: block;
        height: 300px;
        bottom: 0px;
    }
    @media (max-width: 700px) {
        width: 90%;
    }

`;


export const ProfileImgBox = styled.div`
    width: 162px;
    height: 162;
    border: 7px solid #EFEFF2;
    background-color: #EFEFF2;
    z-index: 101;
    border-radius: 50px;
    position: relative;
    top: -40px;
    overflow: hidden;
    margin-left: 30px;
    
    @media (max-width: 1100px) {
        width: 122px;
        height: 122px;
        margin-left: 20px;
    }
    @media (max-width: 980px) {
        top: -10px;
        width: 80px;
        height: 80px;
        margin-left: 0px;
    }
    @media (max-width: 834px) {
        position: none;
        margin: 0 auto;
    }


`;
export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProfileInfo = styled.div`
    margin-left: 30px;
    margin-right: 30px;

    display: flex;
    flex-direction: column;
    @media (max-width: 1100px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const FullName = styled(Typography)`
    color: #3F434A;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;

    @media (max-width: 980px) {
        font-weight: 700;
        font-size: 19px;
    }
    @media (max-width: 834px) {
        font-weight: 700;
        font-size: 15px;
    }
`;

export const InfoText = styled(Typography)`
    color: #8A9099;
    font-size: 15px;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 2px;
`;

export const PostsLength = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    @media (max-width: 834px) {
        width: 100%;
        justify-content: center;
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    
    @media (max-width: 834px) {
        flex-direction: column;
    }
`;

export const TotalCountSpan = styled.span`
    cursor: pointer;
    &:first-of-type{
        font-size: 17px;
        font-weight: 600;
        margin-right: 5px;
        color: #555555;
    }

`;