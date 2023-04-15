import {
  Image,
  Grid,
  GridItem,
  Text,
  Link,
  Box,
  Input,
  Heading,
  SimpleGrid,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box sx={{ mt: 0 }} style={{ background: "#eeeeee" }}>
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing="20px"
        borderTop={"1px"}
        padding={"25px"}
      >
        <GridItem w="100%">
          <Box display={"flex"} alignItems={"center"}>
            <Image
              borderRadius="full"
              boxSize="60px"
              src="/logo.jpg"
              alt="Logo"
            />
            <Heading as="h5" size="lg" marginLeft={"20px"}>
              Liber
            </Heading>
          </Box>
          <Text fontSize="md" sx={{ pt: 5 }}>
            Online Learning Educational Platform <br></br> Designed for
            Engineers.
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            <GridItem w="100%">
              <Link marginTop={"25px"}>Home</Link>
            </GridItem>
            <GridItem w="100%">
              <Link marginTop={"35px"}>About</Link>
            </GridItem>
            <GridItem w="100%">
              <Link marginTop={"35px"}>Contact</Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          w="100%"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box fontSize="md">
            Reach Us At -<br></br> Civil Lines, Prayagraj
          </Box>
          <Box>
            Subscribe to Newsletter ! <br></br>
            <InputGroup size="md">
              <Input pr="4.5rem" placeholder="Enter your email here... " />
              <InputRightElement width="4.5rem" sx={{ mx: 2 }}>
                <Button h="1.75rem" size="sm" colorScheme="twitter">
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
