import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAction } from 'store/category/category.action';
import {
    CategoryBox,
    UlCategory,
    ListCategory,
    CategItem,
} from './Category.styles';

export const Category = ({responsive}) => {

    const dispatch = useDispatch();
    const [scroll, setScroll] = React.useState(0);
    const { categories } = useSelector(state => state.category);

    //! Получаем все категории
    React.useEffect(() => {
        dispatch(getCategoriesAction());
    }, [dispatch])

    //! Когда скролл доходит до 550px, делаем top: 110px для блока категории 
    const handleScroll = () => {
		setScroll(window.scrollY);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

    return (
        <CategoryBox style={scroll > 549 ? {top: '110px'} : {top: '0px'}}>
            <UlCategory>
                {
                    categories?.map((category, index) => (
                    <ListCategory key={index} responsive={responsive}>
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
