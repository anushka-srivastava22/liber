import styles from "./Trivia.module.css";
import {
    Box,
    Grid,
    GridItem,
    Button,
    ButtonGroup,
    SimpleGrid
} from "@chakra-ui/react";

export default function TriviaQuizPage() {
   /*const [ansOnOff, setAnsOnOff] = useState(0);
    const handleAnsClick = () => {
        setAnsOnOff(!ansOnOff)

    }
    onClick={handleAnsClick} style={{colorScheme: ansOnOff?"red":"green"}}*/
    return (
        <Box mx="5vw" minW="56" pt="24" px="4">
            <Box className={styles.background} >

                <Grid
                    h='150px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                    marginTop={"4%"}
                    
                >
                    <GridItem colSpan={4} bg='grey' w='100%' p={4} textAlign={"center"} >Capital of Prayagraj?</GridItem>
                </Grid>
                
                <Grid
                    h='75px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                    marginTop={"4%"}
                >
                    
                    <GridItem colSpan={2}  >
                        <Button colorScheme='teal' size='md' width={"100%"} height={"150%"} >  
                        
                            Bhopal
                        </Button>
                    </GridItem>
                    <GridItem colSpan={2}  >
                        <Button colorScheme='teal' size='md' width={"100%"} height={"150%"} >
                            Lucknow
                        </Button>
                    </GridItem>
                </Grid>
                <Grid
                    h='75px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}

                >
                    <GridItem colSpan={2}  >
                        <Button colorScheme='teal' size='md' width={"100%"} height={"150%"} >
                            Delhi
                        </Button>
                    </GridItem>
                    <GridItem colSpan={2}  >
                        <Button colorScheme='teal' size='md' width={"100%"} height={"150%"} >
                            Chennai
                        </Button>
                    </GridItem>
                </Grid>

            </Box >
        </Box >

    )
}