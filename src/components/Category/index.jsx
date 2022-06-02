import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { getCategoriesAction } from 'store/category/category.action';
import { getPostsAction, getPostsByCategoryAction } from 'store/posts/posts.action';
import {
    CategoryBox,
    UlCategory,
    ListCategory,
    CategItem,
    Count
} from './Category.styles';

export const Category = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories } = useSelector(state => state.category);

    React.useEffect(() => {
        dispatch(getCategoriesAction());
    }, [dispatch])

    const getCategoryPosts = (id) => {
        dispatch(getPostsByCategoryAction({categoryId: id}))
    }

    return (
        <CategoryBox>
            <UlCategory>
                {
                    categories?.map((category, index) => (
                    <ListCategory key={index}>
                        <CategItem to={`/category/${category._id}`}>
                            {category.title}
                        </CategItem>
                    </ListCategory>
                    ))
                }
            </UlCategory>
        </CategoryBox>
    )
}
