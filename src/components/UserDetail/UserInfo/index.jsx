import React from 'react';
import UserBack from 'assets/user-background.png';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'styles/global';
import { Button } from '@mui/material';
import {
    Wrapper,
    ProfileBox,
    UserBackground,
    UserWrapper,
    ProfileImgBox,
    ProfileInfo,
    FullName,
    SubscriptionInfo,
    InfoBox,
    TotalCountSpan,
    InfoWrapper,
    InfoText
} from './UserInfo.styles';
import { followUserAction, unFollowUserAction } from 'store/user/user.action';
import { Modal } from 'components/Modal';
import { Subscriptions } from '../Subscriptions';
import { EditProfile } from '../EditProfile';
import { useParams } from 'react-router-dom';

export const UserInfo = (props) => {
    const {
            _id: userId, 
            profilePhoto, 
            firstName, 
            email, 
            isFollowing, 
            posts, 
            followers, 
            following, 
        } = props;
    const [openFollowers, setOpenFollowers] = React.useState(false);
    const [openFollowing, setOpenFollowing] = React.useState(false);
    const [openEditProfile, setOpenEditProfile] = React.useState(false);
    const dispatch = useDispatch();

    const { id } = useParams()

    const { userDetails } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.user);
    const isAuth = userDetails?._id === userId;

    const handleCloseFollowersModal = () => {
        setOpenFollowers(false)
    }

    const handleCloseFollowingModal = () => {
        setOpenFollowing(false)
    }

    const handleCloseEditModal = () => {
        setOpenEditProfile(false)
    }

    return (
        <Wrapper>
            <UserBackground src={UserBack} />
            <ProfileBox>
                <UserWrapper>
                    <ProfileImgBox>
                        <Image src={profilePhoto} />
                    </ProfileImgBox>
                    <ProfileInfo>
                        <FullName>{firstName}</FullName>
                        <SubscriptionInfo>
                            <InfoBox>
                                <TotalCountSpan>{posts?.length}</TotalCountSpan>
                                <TotalCountSpan>публикации</TotalCountSpan>
                            </InfoBox>
                            <InfoBox>
                                <TotalCountSpan>{followers?.length}</TotalCountSpan>
                                <TotalCountSpan onClick={() => setOpenFollowers(true)}>подписчиков</TotalCountSpan>
                            </InfoBox>
                            <InfoBox>
                                <TotalCountSpan>{following?.length}</TotalCountSpan>
                                <TotalCountSpan onClick={() => setOpenFollowing(true)}>подписок</TotalCountSpan>
                            </InfoBox>
                        </SubscriptionInfo>
                        <InfoText>{email}</InfoText>
                    </ProfileInfo>
                </UserWrapper>
                <InfoWrapper>
                    <ProfileInfo>
                        {isAuth ? (
                            <Button 
                                variant='outlined' 
                                color='primary'
                                onClick={() => setOpenEditProfile(true)} 
                            >
                                Редактировать
                            </Button>
                        ) : user?.isFollowing ? (
                            <Button 
                                variant='outlined' 
                                color='primary'
                                onClick={() => dispatch(unFollowUserAction(id))}
                            >
                                Отписаться
                            </Button>
                        ) : (
                            <Button 
                                variant='contained' 
                                color='primary'
                                onClick={() => dispatch(followUserAction(id))}
                            >
                                Подписаться
                            </Button>
                        )}
                        
                    </ProfileInfo>
                </InfoWrapper>
            </ProfileBox>
            <Modal 
                title='Список подписчиков'
                onClose={handleCloseFollowersModal}
                open={openFollowers}
            >
                <Subscriptions 
                    followers={followers}
                    selectedValueClose={handleCloseFollowersModal}
                />
            </Modal>
            <Modal 
                title='Ваши подписки'
                onClose={handleCloseFollowingModal}
                open={openFollowing}
            >
                <Subscriptions 
                    following={following}
                    selectedValueClose={handleCloseFollowingModal}
                />
            </Modal>
            <Modal 
                headerTitle='Редактировать профиль'
                onClose={handleCloseEditModal}
                open={openEditProfile}
                fullWidth
            >
                <EditProfile 
                    firstName={firstName}
                    email={email}
                    image={profilePhoto}
                    selectedValueClose={handleCloseEditModal}
                />
            </Modal>
        </Wrapper>
    )
}
