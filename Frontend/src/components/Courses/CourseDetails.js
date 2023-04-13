import { Box, Image, Divider, Heading, Container } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'

  import { ArrowForwardIcon} from '@chakra-ui/icons'

function CourseDetails()
{
    return (
        <Box>
            <Box>
                <Image src={process.env.PUBLIC_URL+'/images/abc.jpg'} alt='Abc' />
            </Box>
            <Divider sx={{backgroundColor:"#ffd035"}} h="40px"/>
            <Container maxW='6xl' p={4}>
                <Box my={10}>
                    <Heading as='h3' size='lg'>
                        Links
                    </Heading>
                    <Divider sx={{backgroundColor:"#000000"}} mb={4}/>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Assumenda, quia temporibus eveniet a libero incidunt suscipit
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                        </ListItem>
                        </List>
                </Box>

                <Heading as='h3' size='lg'>
                    Videos
                </Heading>
                <Divider sx={{backgroundColor:"#000000"}}/>
            </Container>
        </Box>
    )
}

export default CourseDetails;