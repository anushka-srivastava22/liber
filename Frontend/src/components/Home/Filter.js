import { React } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Box,
} from "@chakra-ui/react";
import FilterDomain from "./FilterDomain";
import FilterStar from "./FilterStar";
import FilterKeywords from "./FilterKeywords";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<i className="far fa-chart-bar"></i>}
        bg="#331e6d"
        colorScheme={""}
        onClick={onOpen}
      >
        Filter
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter Metrics</DrawerHeader>
          <DrawerBody>
            <Divider mb="4" />
            <Box px="6">
              <FilterDomain />
              <Divider my="6" color={"#00000025"} />
              <FilterStar />
              <Divider my="6" color={"#00000025"} />
              <FilterKeywords />
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Filter</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
