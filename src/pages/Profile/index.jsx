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

    const { user, followed, unfollowed, photoProfile } = useSelector(state => state.user);
    const { postLikes } = useSelector(state => state.posts);

    React.useEffect(() => {
        dispatch(getUserAction(id))
    }, [id, dispatch, postLikes, followed, unfollowed, photoProfile])

    return (
        <>
            <UserInfo {...user}/>
            <Container>
                <Content>
                    {user?.posts.map(post => (
                        <Post 
                            key={post._id}
                            {...post}
                            hideAuthor
                        />
                    ))}
                    
                </Content>
            </Container>
        </>
    )
}

export default Profile;

