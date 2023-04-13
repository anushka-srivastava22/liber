import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Image,
    Grid,
    GridItem,
    
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";


export default function MainPanel() {
    return (
        <Box mx="5vw" minW="56" pt="24" px="4">
            <Box p="2" style={{width: "fit-content"}}>
                <InputGroup borderColor={"gray.400"}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray" />}
                    />
                    <Input type="text" placeholder="Search" />
                </InputGroup>
            </Box>
            <br/>
            <Box display={"flex"}>
                <Box p="2" style={{ marginRight: "auto", width: "fit-content" }}>
                    All Courses
                </Box>
                <Box p="2" style={{ marginLeft: "auto", width: "fit-content" }}>
                    Your Courses
                </Box>

            </Box>
            <hr />
            <Grid gap={0}>
                <GridItem w='100%'>
                    <Image src="/images/aa.jpg" alt='Course' />
                </GridItem>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                <GridItem w='100%'>
                    <Image w='100%' src="/images/courses/dsa.png" alt='Course' />
                </GridItem>
                <GridItem w='100%'>
                    <Image w='100%' src="/images/courses/dsa.png" alt='Course' />
                </GridItem>
            </Grid>
        </Box>
    );
}