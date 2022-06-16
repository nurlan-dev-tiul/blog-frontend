import React from 'react';
import { PostLayout } from 'components/Posts/PostLayout';
import { useSearchParams, useParams } from 'react-router-dom';
import { CategoryPosts } from 'components/Category/CategoryPosts';

const CategoryPage = () => {

    const [searchParams] = useSearchParams();
    const { id } = useParams()
    const pages = searchParams.get('page') || 1;

    return (
        <PostLayout>
            <CategoryPosts 
                categoryId={id}
                pages={pages}
            />
        </PostLayout>
    )
}

export default CategoryPage;
