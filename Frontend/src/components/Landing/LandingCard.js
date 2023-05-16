import { useState } from "react";
import {  Box, Text, Heading, Image,  Flex } from '@chakra-ui/react';

export default function LandingCard(props)
{
    return (
        <Box display={Flex}>
            <Box>
                <Image 
                    src={props.LandingCardDetail.imgurl} 
                    height="100%"
                    width="160px"
                    objectFit="cover"
                />
            </Box>
            <Box>
                <Heading as="h4" size="md" pt="2">
                    {props.title}
                </Heading>
                <Text fontSize="md" textColor="gray.600" mt="2">
                    {props.LandingCardDetail.def.substring(0, 100)}
                </Text>
            </Box>
        </Box>
    )
}