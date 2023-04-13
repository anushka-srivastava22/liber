import React, { useState } from "react";
import { Badge, Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FilterKeywords() {
  const [allKeywords, setAllKeywords] = useState(
    ["FCFS", "SJF", "Stack", "Queue", "Graph", "Trees"].sort()
  );
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  //   React.useEffect(() => {
  //     console.log("Selected Keywords: ", selectedKeywords);
  //     console.log("All Keywords: ", allKeywords);
  //   }, [selectedKeywords, allKeywords]);

  const handleSelectKeywords = (ele) => {
    if (ele.trim() !== "") {
      var filtered = allKeywords.filter(function (value, index, arr) {
        return value !== ele;
      });
      setSelectedKeywords((s) => {
        return [...s, ele];
      });
      setTimeout(() => {
        setAllKeywords(filtered);
      }, 500);
    }
  };

  const handleKeywordRemoval = (ele) => {
    if (ele.trim() !== "") {
      var filtered = selectedKeywords.filter(function (value, index, arr) {
        return value !== ele;
      });
      setAllKeywords((s) => {
        return [...s, ele].sort();
      });

      setSelectedKeywords(filtered);
    }
  };

  return (
    <Box>
      <Text mb="2">Keywords</Text>
      <Menu>
        <MenuButton as={Button} size="sm" mb="1" variant='outline' textAlign={"left"} rightIcon={<ChevronDownIcon />}  w="100%">
          Select Keyword(s)
        </MenuButton>
        <MenuList style={{height: "200px", overflowY: "scroll"}}>
            {allKeywords.map((ele, idx) => (
                <MenuItem key={idx} onClick={() => handleSelectKeywords(ele)}>{ele}</MenuItem>
            ))}
        </MenuList>
      </Menu>
      {/* <Select
        placeholder="Select option"
        mb="1"
        onChange={handleSelectKeywords}
      >
        {allKeywords.map((ele, idx) => (
          <option key={idx} value={ele}>
            {ele}
          </option>
        ))}
      </Select> */}

      {selectedKeywords.map((ele, idx) => {
        return (
          <Badge
            variant="solid"
            fontSize={"xs"}
            colorScheme="blue"
            p="1"
            mt="1"
            ml="1"
            borderRadius={10}
            key={idx}
          >
            {ele}
            <i
              className="fas fa-times"
              style={{ paddingInline: 5, cursor: "pointer" }}
              onClick={() => handleKeywordRemoval(ele)}
            ></i>
          </Badge>
        );
      })}
    </Box>
  );
}
