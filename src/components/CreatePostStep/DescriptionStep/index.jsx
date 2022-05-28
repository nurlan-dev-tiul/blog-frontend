import React from 'react';
import { FormInput } from 'components/FormInput';
import {
    StepBody
} from '../CreatePostStep.styles';

export const DescriptionStep = () => {
    return (
        <StepBody>
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
        </StepBody>
    )
}
