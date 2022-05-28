import React from 'react';
import { useParams } from 'react-router-dom';
import { AsideBox, Wrapper, Image } from 'styles/global';
import { Detail } from 'components/Article';
import { AddComment } from 'components/Comments/AddComment';
import { Comment } from 'components/Comments/Comment';
import {
    ArticleBox,
    CommentsLength
} from './Article.styles'
import { Category } from 'components/Category';
import { PopularPostList } from 'components/Posts/PopularPost';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePostAction } from 'store/posts/posts.action';

const ArticlePage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { post, postLikes } = useSelector(state => state.posts);
    const { comment, deleteComment } = useSelector(state => state.comment);
    const { isAuth } = useSelector(state => state.auth);

    React.useEffect(() => {
        dispatch(getSinglePostAction(id))
    }, [dispatch, comment, deleteComment, postLikes])


    return (
        <Wrapper>
            <ArticleBox>
                <Detail {...post} />
                {isAuth ? <AddComment postId={id} /> : null}
                <CommentsLength>{post?.comments?.length} Комментариев</CommentsLength>
                {post?.comments?.map(com => (
                    <Comment 
                        key={com?._id}
                        id={com?._id}
                        description={com?.description}
                        author={com?.user}
                        date={com?.createdAt}
                    />
                ))}
            </ArticleBox>
            <AsideBox>
                <PopularPostList />
                <Category />
            </AsideBox>
        </Wrapper>
    )
}

export default ArticlePage;
