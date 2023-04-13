import {
    Box,
    Divider,

} from "@chakra-ui/react";


export default function LeftPanel() {
    return (
        <Box  w='20%' minW="56" pt="24" p={4} h={700} color='white' marginTop={30}>

            <Box color={'black'} marginTop={8}>
                Profile
            </Box>
            <Box color={'black'} marginTop={8}>
                My Accounts
            </Box>
            <Box color={'black'} marginTop={8}>
                My Favourites
            </Box>
            <Box color={'black'} marginTop={8}>
                Notes Keeper
            </Box>
            <Divider orientation='horizontal' width={200} marginTop={15} marginBottom={15} />

            <Box color={'black'} marginTop={8}>
                Help
            </Box>
            <Box color={'black'} marginTop={8}>
                Docs
            </Box>
            <Box color={'black'} marginTop={8}>
                FAQ
            </Box>

        </Box>
    );
}
