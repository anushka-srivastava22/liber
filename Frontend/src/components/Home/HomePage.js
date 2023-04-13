import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import styles from "./HomePage.module.css";
import Filter from "./Filter";
import CourseCards from "../Courses/CourseCards";


export default function HomePage() {
  return (
    <Box className={styles.background}>
      <Box mx="5vw" minW="56" pt="24" px="4">
        <Box display={"flex"}>
          <Box p="2" style={{ marginRight: "auto", width: "fit-content" }}>
              <Filter/>
          </Box>
          <Box p="2" style={{ marginLeft: "auto", width: "fit-content" }}>
            <InputGroup borderColor={"gray.400"}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Box>
        </Box>
        <hr />
        <Box pt="4">
          <SimpleGrid minChildWidth="280px" spacing="18px">
            {/* 
                Image - 160px x 280px 
                Font-Style - CantoraOne
                Font-Size - 36px
            */}
            <CourseCards/>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
