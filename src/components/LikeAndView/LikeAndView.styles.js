import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from 'styles/variables';

const { gray } = colors;


export const PostLikeAndView = styled.div`
    display: flex;
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
