import {
    Box,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react';
import { useState } from "react";



export default function NotesKeeperCard(props) {
    return (
        <Box
            bg="#821b9110"
            p="1"
            borderRadius="2"
            boxShadow="md"
            cursor="pointer"
            style={{
                border: "1px solid #00000050",
                backdropFilter: "blur(5px)",
            }}

        >
            <Image
                height="160px"
                width="100%"
                objectFit="cover"
                src="/images/courses/dsa.png"
                alt="Dan Abramov"
            />
            <Box px="2">
                <Heading as="h4" size="md" pt="2">
                    {props.title}
                </Heading>
                <Text fontSize="md" textColor="gray.600" mt="2">
                    {props.notesKeeper.content.substring(0, 100)}...
                </Text>
            </Box>
        </Box>

    );
}