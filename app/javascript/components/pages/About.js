import React, { Component } from "react";
import Gluay from "../assets/gluay_icon.svg";
import Gina from "../assets/gina_icon.svg";
import Deon from "../assets/deon_icon.svg";
import Yann from "../assets/yann_icon.svg";
import "./About.css";

const About = () => {
  return (
    <div id="footer-bg">
    <div className="container py-5">
      <div className="row">
        <div className="pictures">
          <h2>Meet the RYDGers</h2>
          <img src={Gluay} alt="Gluay" width="200px" />
          <p className="jobs">Gluay - Product Manager</p>
          <br />
          <img src={Gina} alt="Gina" width="200px" />
          <p className="jobs">Regina - Project Manager</p>
          <br />
          <img src={Deon} alt="Deon" width="200px" />
          <p className="jobs">Deon - Tech Lead</p>
          <br />
          <img src={Yann} alt="Yann" width="200px" />
          <p className="jobs">Yann - Design Lead</p>
          
        </div>
        <div className="About">
          <br></br>
          <br></br>
          <h1>About Us</h1>
          <br></br>
          <h3 className="text">
            I believe you must bring your whole self to the table if you want to
            thrive in today’s crazy world; your personality, your sense of
            humor, and most importantly, your heart. All of these elements
            brought me to found Shlf back in 2000. Since then, the blog has been
            thriving and has quickly gained a loyal following. I invite you to
            explore my site, learn about my passions, and explore what excites
            and interests you as well.
          </h3>
         
        </div>
        <div className="About">
          <br></br>
          <br></br>
          <h1>What is Shlf ?</h1>
          <br></br>
          <h3>
            I believe you must bring your whole self to the table if you want to
            thrive in today’s crazy world; your personality, your sense of
            humor, and most importantly, your heart. All of these elements
            brought me to found Shlf back in 2000. Since then, the blog has been
            thriving and has quickly gained a loyal following. I invite you to
            explore my site, learn about my passions, and explore what excites
            and interests you as well.
          </h3>
         
        </div>
        </div>
        </div>
        </div>
  
  );
};

export default About;




// <p>Describtion goes here..</p>
// <br/>
// <h5>Why Shlf?</h5>
// <p>Describtion goes here..</p>
// <br/>
// <h5>Who is Shlf user?</h5>
// <p>Describtion goes here..</p>
// <br/>
