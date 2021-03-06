import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex alignItems="center">
            {showProfileData && <Box marginRight="4" textAlign="right">
                <Text>Josimar Junior</Text>
                <Text color="orange.400" fontSize="small">
                    Charizard
                </Text>
            </Box>}

            <Avatar
                size="md"
                name="Josimar Martins"
                borderWidth="2px"
                borderColor="orange.400"
                src="https://avatars.githubusercontent.com/u/49077388?s=400&u=ec9520ac11646eea256440b5db57ede4af4bf6be&v=4"
            />
        </Flex>
    );
}