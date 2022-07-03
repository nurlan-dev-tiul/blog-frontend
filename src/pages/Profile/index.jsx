import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserAction } from 'store/user/user.action';
import { Post } from 'components/Posts/Post';
import { UserInfo } from 'components/UserDetail/UserInfo';
import {
    Container,
    Content,
    NotPostText
} from './Profile.styles';
import { tabTitle } from 'utils/tabTitle';

const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { user, photoProfile, editSuccess } = useSelector(state => state.user);
    const { postLikes, deleted, editedPost } = useSelector(state => state.posts);
    const { userDetails } = useSelector(state => state.auth);

    React.useEffect(() => {
        dispatch(getUserAction(id))
    }, [dispatch, id, postLikes, photoProfile, editSuccess, deleted, editedPost]);

    const username = user?.firstName;

    //Change Document Title
    tabTitle(username + '- Страница профиля')


    return (
        <>
            <UserInfo {...user} id={id}/>
            <Container>
                <Content>
                    {user?.posts?.length <= 0 ? (
                        <NotPostText>Записей нет</NotPostText>
                    ) : (
                        user?.posts?.map(post => (
                            <Post 
                                key={post._id}
                                {...post}
                                postId={post._id}
                                userInfo={user}
                                isAuthor={userDetails?._id === id}
                                authorPost={true}
                            />
                    )))}
                </Content>
            </Container>
        </>
    )
}

export default Profile;

