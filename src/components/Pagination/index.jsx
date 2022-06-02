import React from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction, getPostsByCategoryAction } from 'store/posts/posts.action';
import {
    Container
} from './Pagination.styles';

export const PaginationComponent = ({pages, categoryId, isCategory, pagesNumber}) => {

    // const { numberOfPages } = useSelector(state => state.posts);

    return (
        <Container>
            <Stack spacing={2}>
                {isCategory ? (
                    pagesNumber > 1 && <Pagination 
                        count={pagesNumber || 0}
                        page={Number(pages) || 0}
                        variant="outlined" 
                        shape="rounded"
                        siblingCount={0} 
                        renderItem={(item) => (
                            <PaginationItem {...item} component={Link} to={`/category/${categoryId}?page=${item.page}`} />
                        )}
                    />
                ) : (
                    <Pagination 
                        count={pagesNumber || 0}
                        page={Number(pages) || 1}
                        variant="outlined" 
                        shape="rounded"
                        siblingCount={0}
                        renderItem={(item) => (
                            <PaginationItem {...item} component={Link} to={`/?page=${item.page}`} />
                        )}
                    />
                )}
                
                
            </Stack>
        </Container>
    )
}