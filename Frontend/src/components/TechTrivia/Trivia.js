import {
    Box,
    SimpleGrid,
} from "@chakra-ui/react";

import styles from "./Trivia.module.css";

import TriviaCards from "./TriviaCards";


export default function Trivia() {
    return (
        <Box mx="5vw" minW="56" pt="24" px="4">
            <Box className={styles.background} >
                <Box pt="3" >
                    <SimpleGrid minChildWidth="360px" spacing="18px">

                        <TriviaCards />

                    </SimpleGrid>
                </Box>
            </Box >
        </Box >

    )
}