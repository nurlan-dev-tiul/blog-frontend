import React from 'react';
import { useParams } from 'react-router-dom';
import { AsideBox, Wrapper } from 'styles/global';
import { Detail } from 'components/Article';
import { AddComment } from 'components/Comments/AddComment';
import { Comment } from 'components/Comments/Comment';
import { Category } from 'components/Category';
import { PopularPostList } from 'components/Posts/PopularPost';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePostAction } from 'store/posts/posts.action';
import { tabTitle } from 'utils/tabTitle';
import {
    ArticleBox,
    CommentsLength
} from './Article.styles'

const ArticlePage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { post, postLikes} = useSelector(state => state.posts);
    const { comment, deleteComment } = useSelector(state => state.comment);
    const { isAuth } = useSelector(state => state.auth);

    React.useEffect(() => {
        dispatch(getSinglePostAction(id))
    }, [dispatch, id, comment, deleteComment, postLikes]);

    // Change Document Title
    const postTitle = post?.title;
    if(postTitle) {
        tabTitle(postTitle)
    }else{
        tabTitle('Детальная страница')
    }

    return (
        <Wrapper>
            <ArticleBox>
                <Detail {...post} postLikes={postLikes}/>
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
                <PopularPostList postId={id} />
                <Category />
            </AsideBox>
        </Wrapper>
    )
}

export default ArticlePage;
