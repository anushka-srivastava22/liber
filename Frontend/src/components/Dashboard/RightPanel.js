import {
    Box,
    Container,
    Divider,
    Avatar,
    AvatarBadge,
    Text,
} from "@chakra-ui/react";


export default function RightPanel() {
    return (
        <Box w='20%' minW="56" pt="24" p={4} h={700} color='white' marginTop={30}>

            <Container maxW='1000px' color={'black'} marginTop={8}>
                <Avatar size={"md"}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                <Text fontSize='xl'>Anushka </Text>
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                My Favourites
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                Notes Keeper
            </Container>
            <Divider orientation='horizontal' width={150} marginTop={15} marginBottom={15} />

            <Container maxW='1000px' color={'black'} marginTop={8}>
                Keypoints
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                My Course
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                My Quiz
            </Container>

        </Box>
    );
}
