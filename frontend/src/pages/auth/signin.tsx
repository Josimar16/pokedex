import Head from 'next/head';
import {
    Box,
    Flex,
    Stack,
    Text,
    Button as ChakraButton,
    Checkbox
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {Button} from "../../components/Button";
import {Input} from "../../components/Form/Input";
import {Logo} from "../../components/Header/Logo";
import {TextLink} from "../../components/TextLink";

type SignInFormData = {
    email: string;
    password: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha é obrigatório').min(6, 'No mínimo 6 caracteres')
});

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {

    }

    return (
        <>
            <Head>
                <title>SignIn | pokedex</title>
            </Head>
            <Flex
                justifyContent="space-between"
                alignItems="center"

                maxW="1120px"
                h="100vh"
                p="0 2rem"
                m="0 auto"
            >
                <Box
                    maxW="600px"
                >
                    <Text fontSize="1.25rem" opacity="0.3" color="gray.50">
                        Embarque nessa jornada na pokedex
                    </Text>
                    <Text
                        fontSize="2.25rem"
                        lineHeight="3rem"
                        fontWeight="980"
                        marginY="1.5rem"
                    >
                        Saiba mais sobre os
                        <Text color="red.500">Pokémon</Text>
                        durante sua viagem.
                    </Text>

                    <Text
                        fontSize="1.25rem"
                        opacity="0.5"
                        color="gray.50"
                    >
                        Informações de todas as espécies de <br />
                        Pokémon que foram encontradas <br />
                        durante as viagens pelo mundo. ⚡ 🔥
                    </Text>

                    <Flex justifyContent="space-between">
                        <Button
                            title="Ver demonstração"
                            mt="2.5rem"
                            bgColor="red.400"
                        />
                        <Button
                            title="Ir para a home"
                            variant="outline"
                            mt="2.5rem"
                            border="2px"
                            borderColor="red.400"
                        />
                    </Flex>
                </Box>
                <Flex
                    as="form"
                    width="100%"
                    maxWidth={360}
                    bg="gray.800"
                    p="8"
                    borderBottomRadius={8}
                    flexDirection="column"
                    onSubmit={handleSubmit(handleSignIn)}
                >

                    <Flex marginBottom="1rem" mx="6" textAlign="center">
                        <Logo />
                    </Flex>
                    <Stack spacing="4">
                        <Input
                            id="email"
                            type="email"
                            label="E-mail"
                            error={formState.errors.email}
                            {...register('email')}
                        />

                        <Input
                            id="password"
                            type="password"
                            label="Senha"
                            error={formState.errors.password}
                            {...register('password')}
                        />

                        <Checkbox
                            colorScheme="red"
                            color="gray.200"
                        >
                            <TextLink title="Mostrar senha" />
                        </Checkbox>

                        <TextLink title="Esqueci minha senha?" />
                    </Stack>

                    <ChakraButton
                        type="submit"
                        marginTop="6"
                        colorScheme="red"
                        size="lg"
                        isLoading={formState.isSubmitting}
                    >
                        Entrar
                    </ChakraButton>

                    <TextLink
                        title="Não é cadastrado? clique aqui."
                        textAlign="center"
                        marginTop="4"
                    />
                </Flex>
            </Flex>
        </>
    );
}