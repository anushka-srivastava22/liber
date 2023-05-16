import React from "react";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    imgurl: "/images/courses/CN.png",
  },
  {
    imgurl: "/images/courses/DSA.png",
  },
  {
    imgurl: "/images/courses/AD.png",
  },
];

const divStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "590px",
  backgroundSize: "cover",
};

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyles, backgroundImage: `url(${image.imgurl})` }}
            ></div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
