import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Box } from '@mui/material';
import { 
    InputContainer,
    LabelContainer,
    FormLabel, 
    ErrorText
} from './FormInput.styles';
import { OneLineInput } from './OneLineInput';
import { MultiLineInput } from './TextArea';
import { SelectInput } from './SelectInput';

export const FormInput = ({name, label, type, rows, multiline, oneliner, select, children}) => {

    const { formState } = useFormContext();

    return (
        <>
            <LabelContainer> 
                <FormLabel>{label}</FormLabel>
            </LabelContainer>  
            <InputContainer>
                {oneliner && <OneLineInput name={name} type={type} />}
                {select && <SelectInput name={name}>{children}</SelectInput>}
                {multiline && <MultiLineInput 
                    name={name} 
                    type={type}
                    rows={rows} 
                />}

            </InputContainer>
            <ErrorText>{formState.errors[name]?.message}</ErrorText>
        </>
    )
}
