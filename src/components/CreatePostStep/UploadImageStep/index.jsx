import React from 'react';
import { Button, Typography } from '@mui/material';
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
    const [image, setImage] = React.useState(null);
    const { formState, register } = useFormContext();

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        const previewImage = URL.createObjectURL(selectedFile)
        setImage(previewImage)
    }

    return (
        <StepBody>
            <Container>
                <ImageContainer>
                    {image ? (
                        <PreviewImage src={image} />
                    ) : (
                        <ImageIcon src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png" alt="" />
                    )}
                    
                    <InputContainer>
                        <LabelInput htmlFor="contained-button-file">
                            <ImageInput
                                {...register('image')} 
                                accept="image/*" 
                                id="contained-button-file" 
                                multiple 
                                type="file"
                                name='image' 

                            />
                            <Button variant={image ? 'contained' : 'outlined'} component="span">
                                Загрузить картинку
                            </Button>
                        </LabelInput>
                    </InputContainer> 
                </ImageContainer>
                <ErrorText>{formState.errors?.image?.message}</ErrorText>
            </Container>
        </StepBody>
    )
}
