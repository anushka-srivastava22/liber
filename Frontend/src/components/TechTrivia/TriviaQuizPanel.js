import styles from "./Trivia.module.css";
import {
    Box,
    SimpleGrid
} from "@chakra-ui/react";

export default function TriviaQuizPanel() {

    return (
        <Box mx="5vw" minW="56" pt="24" px="4">
            <Box className={styles.background} >
                <Box right={"0"} width={"20%"} height={"100%"}>
                    
                    <Box as='button' borderRadius='70%' bg='tomato' color='white' px={4} h={8} >
                        1
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
