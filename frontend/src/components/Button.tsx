import {Button as ChakraButton, ButtonProps as ChakraButtonProps, Flex} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
    title: string;
}

export function Button({title, ...rest}: ButtonProps) {
    return (
        <ChakraButton
            w="48%"
            h="4rem"
            borderRadius="0.5rem"
            fontSize="1rem"
            fontWeight="bold"

            as={Flex}
            alignItems="center"
            justifyContent="center"
            transition="filter 0.2s"
            _hover={{
                filter: 'brightness(0.8)',
                cursor: 'pointer'
            }}
            {...rest}
        >
            {title}
        </ChakraButton>
    );
}