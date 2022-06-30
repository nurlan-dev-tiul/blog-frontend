import React from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';
import {
    Container
} from './Pagination.styles';

export const PaginationComponent = ({pages, categoryId, isCategory, pagesNumber, scrollHandle}) => {

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
                            <PaginationItem 
                                {...item}
                                component={Link}
                                onClick={() => scrollHandle()}
                                to={`/category/${categoryId}?page=${item.page}`} 
                            />
                        )}
                    />
                ) : (
                    pagesNumber > 1 && <Pagination 
                        count={pagesNumber || 0}
                        page={Number(pages) || 0}
                        variant="outlined" 
                        shape="rounded"
                        siblingCount={0}
                        renderItem={(item) => (
                            <PaginationItem 
                                {...item} 
                                component={Link}
                                onClick={() => scrollHandle()}
                                to={`/?page=${item.page}`} 
                            />
                        )}
                    />

                )}                    
                
                
            </Stack>
        </Container>
    )
}
