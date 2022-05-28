import React from 'react';
import { useDispatch } from 'react-redux'; 
import TextField from '@mui/material/TextField';
import {
    MainContainer,
    CreateBtn
} from './AddComment.styles';
import { createCommentAction } from 'store/comment/comment.action';

export const AddComment = ({postId}) => {

    const [comment, setComment] = React.useState('');
    const dispacth = useDispatch();

    const createComment = () => {
        const data = {
            postId,
            description: comment
        }
        dispacth(createCommentAction(data))
        setComment('');
    }

    return (
        <MainContainer>
            <TextField
                id="standard-multiline-static"
                label="Написать комментарии"
                multiline
                rows={4}
                variant="standard"
                name='description'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                fullWidth
                InputProps={{endAdornment: 
                    <CreateBtn 
                        variant='contained' 
                        color='success'
                        disabled={!comment}
                        onClick={createComment}
                    >
                        Добавить
                    </CreateBtn>}}
            />
        </MainContainer>
    )
}
