import React from "react";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";

export default function FilterStar() {
  return (
    <Box>
      <Text mb="1">Star Rating</Text>
      <RangeSlider
        // aria-label={["min", "max"]}
        defaultValue={[0, 5]}
        min={0}
        max={5}
        step={0.1}
        onChangeEnd={(val) => console.log(val)}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="orange" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0}>
          <Box color="orange">
            <i className="fas fa-star"></i>
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1}>
          <Box color="orange">
            <i className="fas fa-star"></i>
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
    </Box>
  );
}
