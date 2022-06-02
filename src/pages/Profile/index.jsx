import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserAction } from 'store/user/user.action';
import { Post } from 'components/Posts/Post';
import { Subscriptions } from 'components/UserDetail/Subscriptions';
import { UserInfo } from 'components/UserDetail/UserInfo';
import {
    Container,
    Sidebar,
    Content
} from './Profile.styles';

const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { user, followed, unfollowed, photoProfile, editUserSuccess } = useSelector(state => state.user);
    const { postLikes } = useSelector(state => state.posts);
    const { userDetails } = useSelector(state => state.auth);

    React.useEffect(() => {
        dispatch(getUserAction(id))
    }, [id, dispatch, postLikes, followed, unfollowed, photoProfile, editUserSuccess])

    return (
        <>
            <UserInfo {...user} id={id}/>
            <Container>
                <Content>
                    {user?.posts.map(post => (
                        <Post 
                            key={post._id}
                            {...post}
                            userInfo={user}
                            isAuthor={userDetails?._id === id}
                        />
                    ))}
                    
                </Content>
            </Container>
        </>
    )
}

export default Profile;

