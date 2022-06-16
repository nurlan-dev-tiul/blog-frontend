import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FormInput } from 'components/FormInput';
import { Image, ModalBox } from 'styles/global';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserSchemaValidation } from 'utils/validateSchema/authSchema';
import { useDispatch, useSelector } from 'react-redux';
import { addProfilePhotoAction, editUserAction } from 'store/user/user.action';
import {
    Container,
    ImageContainer,
    ButtonContainer,
    LabelContainer,
    SaveImgBTN,
    Label,
    Input
} from './EditProfile.styles';

export const EditProfile = ({firstName, image, email, selectedValueClose}) => {

    const [avatar, setAvatar] = React.useState(null);
    const [previewImg, setPreviewImg] = React.useState(null);
    
    const dispatch = useDispatch();
    const { editSuccess, loading } = useSelector(state => state.user);

    //! React-hook-form и схема валидации
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(editUserSchemaValidation),
        defaultValues: {
            firstName, 
            email
        }
    });

    //! Для превью картинки
    const onChangeAvatar = (e) => {
        const selectedFile = e.target.files[0];
        const previewImage = URL.createObjectURL(selectedFile);
        setPreviewImg(previewImage);
        setAvatar(selectedFile);
    }

    //! Отправка аватарки на сервер
    const createAvatar = () => {
        dispatch(addProfilePhotoAction(avatar));
    }

    //! Обновление данных пользователя
    const updateUserInfo = (data) => {
        dispatch(editUserAction(data));
    }

    React.useEffect(() => {
        if(image){
            setAvatar(null)
        }
    }, [image]);

    //! При клике Сохранить закроется модальное окно
    React.useEffect(() => {
        if(editSuccess){
            selectedValueClose();
        }
    }, [editSuccess])

    return (
        <ModalBox>
            <Container>
                <ImageContainer>
                    {previewImg ? (
                        <Image src={previewImg} />
                    ) : (
                        <Image src={image} />
                    )}
                    <LabelContainer>
                        <Label htmlFor="icon-button-file">
                            <Input 
                                accept="image/*" 
                                id="icon-button-file" 
                                type="file" 
                                onChange={onChangeAvatar}
                            />
                            {avatar ? (
                                    <SaveImgBTN 
                                        variant='contained'
                                        onClick={createAvatar}
                                    >
                                        {loading ? 'Загрузка' : 'Сохранить'}
                                    </SaveImgBTN>
                            ) : (
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera sx={{fontSize: '50px', zIndex: "100px"}} />
                            </IconButton>
                        )}
                        </Label>
                    </LabelContainer>
                </ImageContainer>
                <FormProvider {...form}>
                    <FormInput 
                        label='Имя' 
                        type='text'
                        name='firstName'
                        oneliner
                    />
                    <FormInput 
                        label='Email' 
                        type='text'
                        name='email'
                        oneliner
                    />
                    <ButtonContainer>
                        <Button 
                            variant="contained" 
                            fullWidth
                            onClick={form.handleSubmit(updateUserInfo)}
                        >
                            Сохранить
                        </Button>
                    </ButtonContainer>
                </FormProvider>
            </Container>
        </ModalBox>
    )
}
