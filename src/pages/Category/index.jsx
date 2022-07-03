import React from 'react';
import { PostLayout } from 'components/Posts/PostLayout';
import { useSearchParams, useParams } from 'react-router-dom';
import { CategoryPosts } from 'components/Category/CategoryPosts';
import { scrollToUp } from 'utils/scrollToElement';

const CategoryPage = () => {

    const [searchParams] = useSearchParams();
    const { id } = useParams()
    const pages = searchParams.get('page') || 1;

    const handleScrollToPost = () => {
        scrollToUp()
    }
    return (
        <PostLayout handleScrollToPost={handleScrollToPost} scrollAmount={20}>
            <CategoryPosts 
                categoryId={id}
                pages={pages}
            />
        </PostLayout>
    )
}

export default CategoryPage;
