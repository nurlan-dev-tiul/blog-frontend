import React from 'react';
import { truncateString } from 'utils/withStrings/workingWithString';
import { useSelector } from 'react-redux';
import { LikeAndView } from 'components/LikeAndView';
import { EditPost } from '../EditPost';
import { Modal } from 'components/Modal';
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

export const Post = (props) => {
    const {_id, title, description, image, user, numViews, createdAt, likes, isLiked, isAuthor, category } = props;

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
                    {truncateString(description, 180, '...')}
                </PostDescription>
                <PostFooter>
                        {isAuthor ? (
                            <PostUserBox>
                                <EditIcon onClick={() => setOpenModal(true)} />
                                <DeleteIcon />
                            </PostUserBox>
                            
                        ) : (
                            <PostUserBox>
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

                />
            </Modal>
        </>
    )
}

