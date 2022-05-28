import React from 'react';
import { useFormContext } from 'react-hook-form';
import{
    SelectInp
} from '../FormInput.styles'

export const SelectInput = ({name, children}) => {

    const { register } = useFormContext();
    return (
        <SelectInp
            {...register(name)}
            name={name}
            displayEmpty
        >
            {children}
        </SelectInp>
    )
}
