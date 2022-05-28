import React from 'react';
import { PopularPostList } from 'components/Posts/PopularPost';
import { Post } from 'components/Posts/Post';
import { Category } from 'components/Category';
import { Wrapper, AsideBox } from 'styles/global';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from 'store/posts/posts.action';
import { useSearchParams } from 'react-router-dom';
import { firstLetterUpperCase } from 'utils/withStrings/workingWithString';
import {
    MainContainer,
    PostsBox,
} from './Home.styles';

const Home = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { posts, postLikes } = useSelector(state => state.posts);
    const category = searchParams.get('category');
    const categ = firstLetterUpperCase(category);

    React.useEffect(() => {
        if(category){
            dispatch(getPostsAction(categ))
        }else{
            dispatch(getPostsAction())
        }
        
    }, [dispatch, category, postLikes])



    return (
        <MainContainer>
            <PopularPostList postListGrid />
            <Wrapper>
                <PostsBox>
                    {posts?.map(post => (
                        <Post key={post._id} {...post} />
                    ))}
                    
                </PostsBox>
                <AsideBox>
                    <Category />
                </AsideBox>
            </Wrapper>
        </MainContainer>
    )
}

export default Home;