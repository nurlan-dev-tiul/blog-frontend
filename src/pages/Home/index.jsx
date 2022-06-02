import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from 'components/Posts/Post';
import { PaginationComponent } from 'components/Pagination';
import { PostLayout } from 'components/Posts/PostLayout';
import { getPostsAction } from 'store/posts/posts.action';
import { useSearchParams } from 'react-router-dom';
import {
    MainContainer,
    PostsBox,
} from './Home.styles';


const Home = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { posts, postLikes, totalPages } = useSelector(state => state.posts);
    const pages = searchParams.get('page') || 1;

    React.useEffect(() => {
        if(pages){
            dispatch(getPostsAction(pages))
        }else{
            dispatch(getPostsAction())
        }
    }, [dispatch, postLikes, pages])

    return (
        <PostLayout>
            {posts?.map(post => (
                <Post key={post._id} {...post} />
            ))}
            <PaginationComponent 
                pages={pages}
                pagesNumber={totalPages}
            />
        </PostLayout>
    )
}

export default Home;