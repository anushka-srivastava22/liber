//import ImageSlider from "./ImageSlider";
import {Box,SimpleGrid} from "@chakra-ui/react";
import LandingCard from "./LandingCard";
import CourseCards from "../Courses/CourseCards";
import LandingCards from "./LandingCards";
// import MyCard from "./MyCard";
 /* Need a Slider and 3 main card on the index i.e. main page*/
export default function LandingPage() {
  return (
    <Box>
      <Box>
          <SimpleGrid minChildWidth="280px" spacing="18px">
            <LandingCards />
          </SimpleGrid>
      </Box>
      
    </Box>
  )
}
