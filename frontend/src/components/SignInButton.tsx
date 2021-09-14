import {Button, Text, Flex, ButtonProps, Icon} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

interface SignInButtonProps extends ButtonProps {
    title: string;
    type_sign_in: "google" | "github";
}

const icons = {
    "google": FcGoogle,
    "github": AiFillGithub
}

const background = {
    "google": "white",
    "github": "gray.700"
}

const color = {
    "google": "gray.900",
    "github": "gray.50"
}

export function SignInButton({
    title,
    type_sign_in,
    ...rest
}: SignInButtonProps) {
    return (
        <Button
            w="100%"
            h="3.5rem"
            borderTopRightRadius="0.5rem"
            borderBottomRightRadius="0.5rem"
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

            bgColor={background[type_sign_in]}

            {...rest}
        >
            <Flex
                h="100%"
                alignItems="center"
                justifyContent="center"
            >
                <Icon
                    as={icons[type_sign_in]}
                    w={6}
                    h={6}
                />
            </Flex>
            <Text
                color={color[type_sign_in]}
                marginLeft="8"
            >
                {title}
            </Text>
        </Button>
    );
}