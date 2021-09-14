import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
    id: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
    ({ id, label, error = null, ...rest }, ref) => {
        return (
            <FormControl isInvalid={!!error}>
                {!!label && <FormLabel
                    htmlFor={id}
                >
                    {label}
                </FormLabel>}

                <ChakraInput
                    id={id}
                    backgroundColor="gray.900"
                    focusBorderColor="green.500"
                    variant="filled"
                    _hover={{
                        backgroundColor: 'gray.900'
                    }}
                    size="lg"
                    ref={ref}
                    {...rest}
                />
                {!!error &&
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>}
            </FormControl>
        );
    }

export const Input = forwardRef(InputBase);