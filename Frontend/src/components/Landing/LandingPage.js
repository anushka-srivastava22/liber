import ImageSlider from "./ImageSlider";
import { Heading } from "@chakra-ui/react";
import LandingCards from "./LandingCards";
export default function LandingPage() {
  return (
    <>
      <ImageSlider />
      <Heading noOfLines={1} style={{marginTop:"30px", marginBottom:"30px", marginLeft:"550px"}}>
        What We Provide You?
      </Heading>
      <LandingCards />
    </>



  )
}
