import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

export default function MainCard(){
    return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='/images/courses/CN.png'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>The perfect latte</Heading>

            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Buy Latte
          </Button>
          </CardFooter>
        </Stack>
      </Card>
    )
}