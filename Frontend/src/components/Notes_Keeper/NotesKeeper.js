import {
    Box,
    IconButton,
    Tooltip,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    useDisclosure,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
    Stack,
    Input,
    Textarea
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import NotesKeeperCard from "./NotesKeeperCard";
import NotesKeeperDetail from "./NotesKeeper.json"
import { AddIcon } from '@chakra-ui/icons';

export default function NotesKeeper() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box pt="24" minHeight="90vh">
            <Box border={"1px"} p="1" boxShadow='xl' onClick={onOpen} borderRadius="full" width={"fit-content"} position="fixed" bottom="28" right="10">
                <Tooltip label="Add Note">
                    <IconButton aria-label='Search database' borderRadius={"full"} icon={<AddIcon w={6} h={6}/>} />
                </Tooltip>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Add your note</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={3}>
                        <Input variant='outline' placeholder='Add Title' />
                        <Textarea placeholder='Add Content' />
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Add Note</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}