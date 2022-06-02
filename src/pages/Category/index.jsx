import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from 'components/Posts/Post';
import { PostLayout } from 'components/Posts/PostLayout';
import { PaginationComponent } from 'components/Pagination';
import { getPostsByCategoryAction } from 'store/posts/posts.action';
import { useSearchParams, useParams } from 'react-router-dom';

const CategoryPage = () => {

    const { posts, categoryPosts, postLikes, totalPages } = useSelector(state => state.posts);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { id } = useParams()
    const pages = searchParams.get('page') || 1;

    React.useEffect(() => {
        if(pages){
            dispatch(getPostsByCategoryAction(id, pages))
        } else{
            dispatch(getPostsByCategoryAction(id))
        }

    }, [id, dispatch, postLikes, pages])

    return (
        <PostLayout>
            {posts?.map(post => (
                <Post key={post._id} {...post} />
            ))}
            <PaginationComponent 
                pages={pages} 
                categoryId={id} 
                isCategory
                pagesNumber={totalPages}
            />
        </PostLayout>
    )
}

export default CategoryPage;
