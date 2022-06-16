import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationComponent } from 'components/Pagination';
import { getPostsByCategoryAction } from 'store/posts/posts.action';
import { Post } from 'components/Posts/Post';
import {
    NotPostsText
} from '../Category.styles'


export const CategoryPosts = ({categoryId, pages}) => {

    const dispatch = useDispatch();

    const { posts, postLikes, totalPages } = useSelector(state => state.posts);
    
    const scrollToElementRef = React.useRef();

    //! Если query запросы есть тогда кладем в запрос, иначе просто получам статьи по категории
    React.useEffect(() => {
        if(pages){
            dispatch(getPostsByCategoryAction(categoryId, pages))
        } else{
            dispatch(getPostsByCategoryAction(categoryId))
        }
    }, [categoryId, dispatch, postLikes, pages]);

    //! При клике на пагинацию будет скролиться на первую статью сверху
    const scrollToElementHandle = () => {
        scrollToElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <>
            <div ref={scrollToElementRef}></div>
            {posts?.length <= 0 ? (
                <NotPostsText>В этой категории пока нет статей</NotPostsText>
            ) : (
                posts?.map(post => (
                    <Post key={post._id} {...post} postLikes={postLikes} />
                ))
            )}
            <PaginationComponent 
                pages={pages}
                categoryId={categoryId} 
                isCategory
                pagesNumber={totalPages}
                scrollHandle={scrollToElementHandle}
            />
        </>
    )
}
