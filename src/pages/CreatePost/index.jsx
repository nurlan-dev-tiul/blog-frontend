import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { DescriptionStep } from 'components/CreatePostStep/DescriptionStep';
import { SelectCategoryStep } from 'components/CreatePostStep/SelectCategoryStep';
import { UploadImageStep } from 'components/CreatePostStep/UploadImageStep';
import { CreatePostSchema } from 'utils/validateSchema/postSchema';
import { createPostAction } from 'store/posts/posts.action';
import { tabTitle } from 'utils/tabTitle';
import {
    Container,
    FormContainer,
    CreatePostFooter,
} from './CreatePost.styles';

const CreatePost = () => {

    const [step, setStep] = React.useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector(state => state.posts);

    //! Change Document Title function
    tabTitle('Новая запись')

     //! React-hook-form и схема валидации
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(CreatePostSchema)
    });

    //! Степ блоки
    const StepComponentDisplay = () => {
        if(step === 0) {
            return <DescriptionStep />
        } else if(step === 1) {
            return <UploadImageStep />
        }else{
            return <SelectCategoryStep />
        }
    }

    //! Валидация для степ шагов если какое то свойство пустое то при нажатии на следующий шаг выйдет сообщение
    const handleNext = async() => {
        let isValid = false;
        if(step === 0) {
            isValid = await form.trigger(['title', 'description']);
        } else if(step === 1){
            isValid = await form.trigger('image')
        }

        if(isValid){
            setStep((currentStep) => currentStep + 1);
        }
    }

    //! Отправка данных на сервер
    const createPost = (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('image', data.image[0]);

        dispatch(createPostAction(formData, navigate))
    }

    return (
        <FormProvider {...form}>
            <Container>
                <FormContainer>
                    {StepComponentDisplay()}
                    <CreatePostFooter>
                        {step === 2 ? (
                            <Button 
                                variant='contained' 
                                color='primary' 
                                sx={{width: '100%'}}
                                onClick={form.handleSubmit(createPost)}
                            >
                                {loading ? 'Идет загрузка ...' : 'Опубликовать'}
                            </Button>
                        ) : (
                            <Button 
                                variant='contained' 
                                color='primary' 
                                sx={{width: '100%'}}
                                onClick={handleNext}
                            >
                                Далее
                            </Button>
                        )}
                        {step > 0 ? (
                            <Button 
                                variant='outlined' 
                                color='primary' 
                                sx={{width: '100%', marginTop: '15px'}}
                                onClick={() => setStep((currentStep) => currentStep - 1)}
                            >
                                Назад
                            </Button>
                        ) : null}
                    </CreatePostFooter>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default CreatePost;
