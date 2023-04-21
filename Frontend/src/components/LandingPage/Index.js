import ImageSlider from "./ImageSlider";
import MainCard from "./MainCard";
import {Box} from "@chakra-ui/react";
 /* Need a Slider and 3 main card on the index i.e. main page*/
export default function Index() {
  return (
    <Box>
      <Box>
        <ImageSlider />
      </Box>
    
      <Box>
        <MainCard />
      </Box>
    </Box>
  )
}
