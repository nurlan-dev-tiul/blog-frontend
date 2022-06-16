import React from 'react';
import { PostLayout } from 'components/Posts/PostLayout';
import { useSearchParams } from 'react-router-dom';
import { Posts } from 'components/Posts';
import { tabTitle } from '../../utils/tabTitle';

const Home = () => {
    const [searchParams] = useSearchParams();
    const pages = searchParams.get('page') || 1;

    tabTitle('Статьи')

    return (
        <PostLayout>
            <Posts pages={pages} />
        </PostLayout>
    )
}

export default Home;