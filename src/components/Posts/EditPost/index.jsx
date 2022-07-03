import React from 'react';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from 'components/FormInput';
import { Button, MenuItem } from '@mui/material';
import { Image, ModalBox } from 'styles/global';
import { CreatePostSchema } from 'utils/validateSchema/postSchema';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAction } from 'store/category/category.action';
import { editPostAction, editImagePostAction } from 'store/posts/posts.action';
import { editedPostActionCreator } from 'store/posts/actions/action.creators';
import {
    Container,
    ImageContainer,
    Overlay,
    InputContainer,
    LabelInput,
    ImageInput
} from './EditPost.styles'

export const EditPost = ({id, image, title, description, selectedModalClose}) => {
        const [img, setImage] = React.useState(null);
        const [previewImg, setPreviewImg] = React.useState(null);
        const [loadingImg, setLoadingImg] = React.useState(false);

        const dispatch = useDispatch();

        const { categories } = useSelector(state => state.category);
        const { editedPost } = useSelector(state => state.posts);

        //! React-hook-form и схема валидации
        const form = useForm({
            mode: 'onSubmit',
            resolver: yupResolver(CreatePostSchema),
            defaultValues: {
                title: title, 
                description: description,
            }
        });

        //! Функция для превью картинки перед сохранением
        const handleChange =  (e) => {
            const selectedFile = e.target.files[0];
            const previewImage = URL.createObjectURL(selectedFile);
            setPreviewImg(previewImage);
            setImage(selectedFile);
        }

        //! Отправляем картинку на сервер
        const uploadImage = async () => {
            try {
                setLoadingImg(true)
                const cloudName = 'de1uvccij'
                const formData = new FormData();
    
                formData.append('file', img);
                formData.append('upload_preset', 'mern-blog') //? Это папка куда будут сохраняться img в cloudinary
                formData.append('cloud_name', cloudName) //? cloud name из cloudinary
                
                const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)

                setLoadingImg(false)
                dispatch(editImagePostAction(id, data.url));
            } catch (error) {
                console.log(error);
            }
        }

        //! Отправляем на сервер отредактированную статью
        const updatePost = (data) => {
            dispatch(editPostAction(id, data))
        }

        //! Получаем категории
        React.useEffect(() => {
            dispatch(getCategoriesAction());
        }, [dispatch]);

        //! Если Edited true тогда закрываем модальное
        React.useEffect(() => {
            if(editedPost){
                selectedModalClose();

                //! Отредактировано модальное окно закрылось и снова статус ставим false
                dispatch(editedPostActionCreator())
            }
        }, [dispatch, editedPost, selectedModalClose])

    return (
        <ModalBox>
            <Container>
                <ImageContainer>
                    <Overlay />
                    {previewImg ? (
                        <Image src={previewImg} />
                    ) : (
                        <Image src={image} />
                    )}
                    <InputContainer>
                        <LabelInput htmlFor="contained-button-file">
                            <ImageInput
                                accept="image/*" 
                                id="contained-button-file" 
                                multiple 
                                type="file"
                                name='image'
                                onChange={handleChange}
                            />    
                                {!img ?  <Button 
                                        variant='contained' 
                                        component="span"
                                    >
                                    Выбрать картинку
                                </Button> : null}

                            
                        </LabelInput>
                            {img &&  <Button 
                                variant={'contained'} 
                                component="span"
                                onClick={uploadImage}
                            >
                                {loadingImg ? 'Идет загрузка ...' : 'Сохранить'}
                            </Button> }
                    </InputContainer> 
                </ImageContainer>
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
                        <MenuItem>Категория</MenuItem>
                        {categories?.map(category => (
                            <MenuItem 
                                key={category._id}
                                value={category._id}
                            >
                                {category.title}
                            </MenuItem>
                        ))}
                    </FormInput>
                    <Button 
                        variant='contained' 
                        color='primary'
                        sx={{marginTop: '20px'}}
                        onClick={form.handleSubmit(updatePost)}
                        fullWidth
                    >
                        Сохранить
                    </Button>
                </FormProvider>
            </Container>
        </ModalBox>
    )
}
