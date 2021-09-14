import {Text, TextProps} from "@chakra-ui/react";

interface TextLinkProps extends TextProps {
    title: string;
}

export function TextLink({title, ...rest}: TextLinkProps) {
    return (
        <Text
            textAlign="right"
            color="gray.200"
            transition="filter 0.2s"
            _hover={{
                filter: 'brightness(0.8)',
                cursor: 'pointer'
            }}
            {...rest}
        >
            {title}
        </Text>
    );
}