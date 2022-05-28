import React from 'react';
import { truncateString } from 'utils/withStrings/workingWithString';
import { useSelector } from 'react-redux';
import { LikeAndView } from 'components/LikeAndView';
import {
    RecentPost,
    ImagePostBox,
    ImagePost,
    PostContent,
    PostTitle,
    PostDescription,
    PostFooter,
    PostDateAndAuthor,
    PostTimestamp,
    AuthorImageBox,
    AuthorImage,
    PostAuthor,
    PostUserBox,
} from './Post.styles';

export const Post = (props) => {
    const {_id, title, description, image, user, numViews, createdAt, likes, isLiked, hideAuthor } = props;
    const { userDetails } = useSelector(state => state.auth);

    return (
        <RecentPost>
            <ImagePostBox>
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
                        {hideAuthor ? (
                            <PostUserBox />
                            
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
    )
}

