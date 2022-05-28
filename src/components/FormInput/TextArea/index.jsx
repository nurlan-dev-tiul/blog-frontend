import React from 'react';
import { useFormContext } from 'react-hook-form';
import { 
    TextArea,
} from '../FormInput.styles';

export const MultiLineInput = ({name, type, rows}) => {

    const { register } = useFormContext();

    return (
        <>
            <TextArea 
                {...register(name)} // ! React hook form таким способом ссылается на этот инпут
                name={name}
                type={type}
                rows={rows}
            />
        </>
    )
}
