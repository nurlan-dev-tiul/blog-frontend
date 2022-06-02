import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from 'components/FormInput';
import { MenuItem } from '@mui/material';
import { ModalBox } from 'styles/global';
import { CreatePostSchema } from 'utils/validateSchema/postSchema';
import {
    Container
} from './EditPost.styles'


export const EditPost = () => {

        //! React-hook-form и схема валидации
        const form = useForm({
            mode: 'onSubmit',
            resolver: yupResolver(CreatePostSchema),
            defaultValues: {
                title: {}, 
                description: {},
                category: 'Путешествие'
            }
        });


    return (
        <ModalBox>
            <Container>
                <FormProvider {...form}>
                    <FormInput 
                        label='Название'
                        name='title'
                        type='text'
                        oneliner
                    />
                    <FormInput 
                        label='Описание'
                        name='description'
                        type='text'
                        rows='10'
                        multiline
                    />
                    <FormInput 
                        label='Выберите категорию'
                        name='category'
                        select
                    >
                        <MenuItem></MenuItem>
                        {/* {categories?.map(category => (
                            <MenuItem 
                                key={category._id}
                                value={category.title}
                            >
                                {category.title}
                            </MenuItem>
                        ))} */}
                    </FormInput>
                    
                </FormProvider>
            </Container>
        </ModalBox>
    )
}
