import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../assets/fruit.png";

const WhyShlfCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      <>
        <img src={images} alt="Why Shlf?" />
        <div className="myCarousel">
          <h2> Why Shlf?</h2>
          <p>shlf is an awesome app that is the best at what we have</p>
          <br></br>
        </div>
      </>
      <>
        <img src={images} alt="Why Shlf?" />
        <div className="myCarousel">
          <h2> Who is Shlf User?</h2>
          <p>shlf is an awesome app that is the best at what we have</p>
          <br></br>
        </div>
      </>
      <>
        <img src={images} alt="Why Shlf?" />
        <div className="myCarousel">
          <h2> What is Shlf?</h2>
          <p>shlf is an awesome app that is the best at what we have</p>
          <br></br>
        </div>
      </>
    </Carousel>
  );
};

export default WhyShlfCarousel;
