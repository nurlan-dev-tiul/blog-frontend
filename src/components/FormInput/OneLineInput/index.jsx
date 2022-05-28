import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Box } from '@mui/material';
import { 
    Input,
    VisableIcon,
    VisableOffIcon,
} from '../FormInput.styles';

export const OneLineInput = ({name, type}) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const { formState, register } = useFormContext();

    return (
        <>
            <Input 
                {...register(name)} // ! React hook form таким способом ссылается на этот инпут
                name={name}
                type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
            />
            {type === 'password' && (
                <Box onClick={() => setShowPassword(!showPassword)}>
                    { showPassword ? (
                        <VisableOffIcon /> 
                    ) : ( 
                        <VisableIcon />
                    )}
                </Box>)
            }
        </>
    )
}
