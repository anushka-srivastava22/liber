import { useState } from "react";
import { Box, Text, Heading, Image, Flex, Stack, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export default function LandingCard(props) {
    return (
        
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginTop={'20px'}
            marginBottom={'20px'}
            marginLeft={'200px'}
            marginRight={'200px'}
        >

            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src= {props.LandingCardDetail.imgurl}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{props.title}</Heading>

                    <Text py='2'>
                        {props.LandingCardDetail.def}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'  onClick={() => {window.location.href=`${props.LandingCardDetail.link}`}}>
                        Explore
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}