import Head from "next/head";
import {Avatar, Box, Flex, Icon, Text} from "@chakra-ui/react";
import { RiArrowLeftSLine } from 'react-icons/ri';
import {TextLink} from "../../../components/TextLink";
import {ArrowLeftLink} from "../../../components/ArrowLeftLink";
import {Profile} from "../../../components/Header/Profile";

export default function Preview() {
    return (
        <>
            <Head>
                <title>Pikachu | pokedex</title>
            </Head>
            <Flex flexDirection="column">
                <Flex
                    w="100vw"
                    h="5rem"
                    bgColor="gray.800"
                >
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"

                        w="1120px"
                        p="0 2rem"
                        m="0 auto"
                    >
                        <ArrowLeftLink title="Pikachu" />

                        <Profile />
                    </Flex>
                </Flex>
                <Box
                    h="calc(100vh - 5rem)"

                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '0.375rem',
                            height: '0.375rem'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px'
                        },
                    }}
                >
                    <Flex
                        flex="1"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="flex-start"

                        w="1120px"
                        p="2rem"
                        m="0 auto"
                    >
                        <Avatar
                            size="4xl"
                            bgColor="transparent"
                            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"
                        />
                    </Flex>
                </Box>
            </Flex>
        </>
    );
}