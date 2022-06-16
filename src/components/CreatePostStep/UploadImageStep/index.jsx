import React from 'react';
import { Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import {
    StepBody,
    Container,
    ImageContainer,
    InputContainer,
    ImageInput,
    LabelInput,
    ImageIcon,
    ErrorText,
    PreviewImage
} from '../CreatePostStep.styles';

export const UploadImageStep = () => {
    const [img, setImage] = React.useState(null);
    const [previewImg, setPreviewImg] = React.useState(null);

    //! React-hook-form context
    const { formState, register } = useFormContext();

    //! Функция для превью картинки
    const handleChange =  (e) => {
        const selectedFile = e.target.files[0];
        const previewImage = URL.createObjectURL(selectedFile);
        setPreviewImg(previewImage);
        setImage(selectedFile);
    }
    return (
        <StepBody>
            <Container>
                <ImageContainer>
                    {previewImg ? (
                        <PreviewImage src={previewImg} />
                    ) : (
                        <ImageIcon src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png" alt="" />
                    )}
                    
                    <InputContainer>
                        <LabelInput htmlFor="contained-button-file">
                                <ImageInput
                                    {...register('image', {
                                        onChange: handleChange
                                    })}
                                    accept="image/*" 
                                    id="contained-button-file" 
                                    multiple 
                                    type="file"
                                    name='image'
                                    
                            /> 
                            
                            <Button variant={img ? 'contained' : 'outlined'} component="span">
                                {img ? 'Загрузить другую картинку' : 'Загрузить картинку'}
                            </Button>
                        </LabelInput>
                    </InputContainer> 
                </ImageContainer>
                <ErrorText>{formState.errors?.image?.message}</ErrorText>
            </Container>
        </StepBody>
    )
}
