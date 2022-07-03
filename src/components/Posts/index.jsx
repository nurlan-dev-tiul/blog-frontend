import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PaginationComponent } from 'components/Pagination';
import { getPostsAction } from 'store/posts/posts.action';
import { Post } from './Post';
import { scrollToElement } from 'utils/scrollToElement';

export const Posts = ({pages}) => {
    const dispatch = useDispatch();
    const { posts, postLikes, totalPages } = useSelector(state => state.posts);
    const scrollToElementRef = React.useRef();

    //! Если query запрос есть то отправляем его в запросе 
    React.useEffect(() => {
        if(pages){
            dispatch(getPostsAction(pages));
        }else{
            dispatch(getPostsAction())
        }
    }, [dispatch, pages, postLikes]);

    //! При клике на пагинацию будет скролиться на первый элемент сверху
    const scrollToElementHandle = () => {
        scrollToElement(scrollToElementRef)
    }

    return (
        <>
            <div ref={scrollToElementRef}></div>
            {posts?.map(post => (
                <Post 
                    key={post._id}
                    postLikes={postLikes} 
                    {...post}
                />
            ))}
            <PaginationComponent 
                pages={pages}
                pagesNumber={totalPages}
                scrollHandle={scrollToElementHandle}
            />
        </>
    )
}
