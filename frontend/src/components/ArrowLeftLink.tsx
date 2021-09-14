import {Flex, Icon, Text, TextProps} from "@chakra-ui/react";
import {RiArrowLeftSLine} from "react-icons/ri";

interface ArrowLeftLinkProps extends TextProps {
    title: string;
}

export function ArrowLeftLink({title, ...rest}: ArrowLeftLinkProps) {
    return (
        <Flex cursor="pointer">
            <Icon
                as={RiArrowLeftSLine}
                w="6"
                h="6"
                color="gray.200"
                transition="filter 0.2s"
                _hover={{
                    filter: 'brightness(0.8)'
                }}
            />
            <Text
                ml="4"
                color="gray.200"
                transition="filter 0.2s"
                _hover={{
                    filter: 'brightness(0.8)'
                }}
                {...rest}
            >
                {title}
            </Text>
        </Flex>
    );
}