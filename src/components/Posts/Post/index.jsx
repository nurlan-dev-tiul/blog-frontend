import React from 'react';
import { truncateString } from 'utils/withStrings/workingWithString';
import { useDispatch } from 'react-redux';
import { LikeAndView } from 'components/LikeAndView';
import { EditPost } from '../EditPost';
import { Modal } from 'components/Modal';
import { deletePostAction } from 'store/posts/posts.action';
import {
    RecentPost,
    ImagePostBox,
    CategoryText,
    ImagePost,
    PostContent,
    PostTitle,
    PostDescription,
    PostFooter,
    PostDateAndAuthor,
    AuthorImageBox,
    AuthorImage,
    PostAuthor,
    PostUserBox,
    EditIcon,
    DeleteIcon
} from './Post.styles';

export const Post = React.memo((props) => {
    const {
        _id, 
        postId, 
        title, 
        description, 
        image, 
        user, 
        numViews, 
        createdAt, 
        likes, 
        isLiked, 
        isAuthor, 
        category, 
        postLikes,
        authorPost
    } = props;

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = React.useState(false);

    const handleCloseEditModal = () => {
        setOpenModal(false)
    }

    return (
        <>
        <RecentPost>
            <ImagePostBox>
                <CategoryText>
                    {category?.title}
                </CategoryText>
                <ImagePost src={image} />
            </ImagePostBox>
            <PostContent>
                <PostTitle to={`/detail/${_id}`}>
                    {truncateString(title, 40, '...')}
                </PostTitle>
                <PostDescription>
                    {truncateString(description, 175, '...')}
                </PostDescription>
                <PostFooter authorPost={authorPost}>
                        {isAuthor ? (
                            <PostUserBox>
                                <EditIcon onClick={() => setOpenModal(true)} />
                                <DeleteIcon onClick={() => dispatch(deletePostAction(_id))} />
                            </PostUserBox>
                            
                        ) : (
                            <PostUserBox authorPost={authorPost}>
                                <AuthorImageBox>
                                    <AuthorImage src={user?.profilePhoto} />
                                </AuthorImageBox>
                                <PostDateAndAuthor>
                                    <PostAuthor to={`/profile/${user?._id}`}>{user?.firstName}</PostAuthor>
                                </PostDateAndAuthor>
                            </PostUserBox>
                        )}
                    <LikeAndView
                        postId={_id}
                        numViews={numViews} 
                        date={createdAt} 
                        likes={likes} 
                        isLiked={isLiked}
                        postLikes={postLikes}
                        authorPost={authorPost}
                    />
                </PostFooter>
            </PostContent>
        </RecentPost>
        <Modal 
            headerTitle='Редактировать статью'
            onClose={handleCloseEditModal}
            open={openModal}
            fullWidth
        >
            <EditPost
                id={postId}
                image={image}
                title={title}
                description={description}
                category={category?.title}
                selectedModalClose={handleCloseEditModal}
            />
            </Modal>
        </>
    )
})

