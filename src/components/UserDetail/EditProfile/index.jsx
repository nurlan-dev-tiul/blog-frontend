import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FormInput } from 'components/FormInput';
import { Image, ModalBox } from 'styles/global';
import { FormProvider, set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserSchemaValidation } from 'utils/validateSchema/authSchema';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    ImageContainer,
    ButtonContainer,
    LabelContainer,
    Label,
    Input
} from './EditProfile.styles';
import { addProfilePhotoAction } from 'store/user/user.action';


export const EditProfile = ({firstName, image, email}) => {

    const [avatar, setAvatar] = React.useState(null);
    const dispatch = useDispatch();
    const { photoProfile } = useSelector(state => state.user);

    //! React-hook-form и схема валидации
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(editUserSchemaValidation),
        defaultValues: {
            firstName, 
            email
        }
    });

    const onChangeAvatar = (e) => {
        setAvatar(e.target.files[0])
    }

    const createAvatar = () => {
        dispatch(addProfilePhotoAction(avatar));
    }

    const updateUserInfo = (data) => {
        console.log(data)
    }

    React.useEffect(() => {
        if(photoProfile){
            setAvatar(null)
        }
    }, [photoProfile])

    return (
        <ModalBox>
            <Container>
                <ImageContainer>
                    <Image src={photoProfile ? photoProfile : image} />
                    <LabelContainer>
                        <Label htmlFor="icon-button-file">
                            <Input 
                                accept="image/*" 
                                id="icon-button-file" 
                                type="file" 
                                onChange={onChangeAvatar}
                            />
                            {avatar ? (
                                    <Button 
                                        variant='contained'
                                        onClick={createAvatar}
                                    >
                                        Сохранить
                                    </Button>
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
