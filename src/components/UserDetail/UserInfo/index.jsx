import React from 'react';
import UserBack from 'assets/user-background.png';
import { useSelector } from 'react-redux';
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
    PostsLength,
    InfoBox,
    TotalCountSpan,
    InfoWrapper,
    InfoText,
    UserInfoWrapper
} from './UserInfo.styles';
import { Modal } from 'components/Modal';
import { EditProfile } from '../EditProfile';

export const UserInfo = React.memo((props) => {
    const {
            _id: userId, 
            profilePhoto, 
            firstName, 
            email,
            posts, 
        } = props;
    const [openEditProfile, setOpenEditProfile] = React.useState(false);

    const { userDetails } = useSelector(state => state.auth);
    const isAuth = userDetails?._id === userId;

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
                        <UserInfoWrapper>
                            <FullName>{firstName}</FullName>
                            <InfoText>{email}</InfoText>
                        </UserInfoWrapper>
                        <PostsLength>
                            <InfoBox>
                                <TotalCountSpan>{posts?.length}</TotalCountSpan>
                                <TotalCountSpan>публикации</TotalCountSpan>
                            </InfoBox>
                        </PostsLength>
                        
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
                        ) : null }
                    </ProfileInfo>
                </InfoWrapper>
            </ProfileBox>

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
})
