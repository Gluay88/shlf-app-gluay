import React from "react";
import { Carousel } from "react-responsive-carousel";
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
          <p> . Avoid Waisting Food</p>
          <p> . Save Money</p>
          <p> . Save The World</p>
          <br></br>
        </div>
      </>
      <>
        <img src={images} alt="Why Shlf?" />
        <div className="myCarousel">
          <h2> Who is Shlf User?</h2>
          <p>For Those who don't like to waist.</p>
          <br></br>
        </div>
      </>
      <>
        <img src={images} alt="Why Shlf?" />
        <div className="myCarousel">
          <h2> What is Shlf?</h2>
          <p>Shlf Is A Friendly App To Help You With Your Lifestyle To Educate Users On Proper Storage Techniques. </p>
          <br></br>
        </div>
      </>   
    </Carousel>
  );
};

export default WhyShlfCarousel;
