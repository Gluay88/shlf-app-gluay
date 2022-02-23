import React, { Component } from "react";
import './Home.css'
import Typed from "react-typed";
// import Particles from "react-particles-js";


export class Home extends Component {
  render() {
    return (
      <>
     
      <div id="footer-bg">
      <div className="main-info"></div>  
      

      <div className="main-title">
      <h1>Keep Calm And Use Shlf !!!!</h1>
      </div>    
      <br></br>
      <br></br>
      <br></br>
      <Typed
      className="typed-text"
      strings={["Team RYDGE", "Because we believe we can change the world", " and it start with saving you money"]}
      typeSpeed={40}
      backSpeed={60}
      loop
      /> 

      
      <div className="btn-main">
      {/* <button href="/shlfindex" >Explore Shlf</button> */}
      </div>

      </div>
      
    
      </>
    );
  }
}

export default Home;
