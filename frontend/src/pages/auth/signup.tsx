import Head from 'next/head';
import {
    Box,
    Flex,
    Stack,
    Text,
    Button as ChakraButton
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {SignInButton} from "../../components/SignInButton";
import {Input} from "../../components/Form/Input";
import {Logo} from "../../components/Header/Logo";
import {TextLink} from "../../components/TextLink";

type SignInFormData = {
    name: string;
    email: string;
}

const signInFormSchema = yup.object().shape({
    name: yup.string().required('Nome completo é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email('E-mail inválido')
});

export default function SignUp() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const handleSignUp: SubmitHandler<SignInFormData> = async (data) => {

    }

    return (
        <>
            <Head>
                <title>SignUp | pokedex</title>
            </Head>
            <Flex
                justifyContent="space-between"
                alignItems="center"

                maxW="1120px"
                h="100vh"
                p="0 2rem"
                m="0 auto"
            >
                <Flex
                    as="form"
                    width="100%"
                    maxWidth={360}
                    bg="gray.800"
                    p="8"
                    borderBottomRadius={8}
                    flexDirection="column"
                    onSubmit={handleSubmit(handleSignUp)}
                >

                    <Flex marginBottom="1rem" mx="6" textAlign="center">
                        <Logo />
                    </Flex>
                    <Stack spacing="4">
                        <Input
                            id="name"
                            type="text"
                            label="Nome completo"
                            error={formState.errors.name}
                            {...register('name')}
                        />

                        <Input
                            id="email"
                            type="email"
                            label="E-mail"
                            error={formState.errors.email}
                            {...register('email')}
                        />
                    </Stack>

                    <ChakraButton
                        type="submit"
                        marginTop="6"
                        colorScheme="green"
                        size="lg"
                        isLoading={formState.isSubmitting}
                    >
                        Salvar
                    </ChakraButton>

                    <TextLink
                        title="Já é cadastrado? clique aqui."
                        textAlign="center"
                        marginTop="4"
                    />
                </Flex>
                <Box
                    maxW="600px"
                >
                    <Text fontSize="1.25rem" opacity="0.3" color="gray.50">
                        Não quero deixar você fora dessa jornada
                    </Text>
                    <Text
                        fontSize="2.25rem"
                        lineHeight="3rem"
                        fontWeight="980"
                        marginY="1.5rem"
                    >
                        Saiba tudo sobre a <br />
                        vida dos <Text as="span" color="green.500">Pokémon</Text> <br/>
                        em um só lugar.
                    </Text>

                    <Text
                        fontSize="1.25rem"
                        opacity="0.5"
                        color="gray.50"
                    >
                        Entre conosco nessa e seja o "treinador"<br />
                        de um Pokémon, isso se ele gostar<br />
                        de você, vale a pena correr o risco.
                    </Text>

                    <Flex flexDirection="column" justifyContent="center">
                        <SignInButton
                            title="Entrar com o google"
                            type_sign_in="google"
                            mt="2.5rem"
                            mb="1rem"
                        />
                        <SignInButton
                            title="Entrar com o github"
                            type_sign_in="github"
                        />
                    </Flex>
                </Box>
            </Flex>
        </>
    );
}