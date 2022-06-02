import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput } from 'components/FormInput';
import { StepBody } from '../CreatePostStep.styles';
import { getCategoriesAction } from 'store/category/category.action';



export const SelectCategoryStep = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category);

    React.useEffect(() => {
        dispatch(getCategoriesAction())
    }, [dispatch])

    return (
        <StepBody>
            <FormInput 
                label='Выберите категорию'
                name='category'
                select
            >
                <MenuItem></MenuItem>
                {categories?.map(category => (
                    <MenuItem 
                        key={category._id}
                        value={category._id}
                    >
                        {category.title}
                    </MenuItem>
                ))}
            </FormInput>
        </StepBody>
    )
}
