import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from 'styles/variables';

const { gray } = colors;


export const PostLikeAndView = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 630px) {
        position: ${props => props.positionBox ? 'unset' : 'absolute'};
        top: 0;
        left: 10;
        margin-top: ${props => props.positionBox ? '0px' : '20px'};
    }
`;

export const LikeBox = styled.div`
    display: flex;
    align-items: center;
`;

export const LikeIcon = styled(FavoriteBorderIcon)`
    margin-right: 5px;
    font-size: 22px;
    cursor: pointer;
    color: ${gray};

    /* @media (max-width: 630px) {
        color: ${props => props.positionBox ? '#fff' : `${gray}`};
    } */

`;

export const IsLikedIcon = styled(FavoriteIcon)`
    margin-right: 5px;
    font-size: 22px;
    cursor: pointer;
    color: red;
`;  

export const ViewBox = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export const ViewIcon = styled(VisibilityOutlinedIcon)`
    margin-right: 5px;
    font-size: 23px;
    color: ${gray};
`;

export const TimestampBox = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`;


export const TimeIcon = styled(AccessAlarmIcon)`
    margin-right: 5px;
    font-size: 21px;
    color: ${gray};
`;
