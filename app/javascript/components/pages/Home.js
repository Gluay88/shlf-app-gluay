import React, { Component } from "react";
import Typed from "react-typed";
import WhyShlf from "../components/WhyShlf";

export class Home extends Component {
  render() {
    return (
      <>
        <div id="footer-bg">
          <div className="main-info"></div>

          <div className="main-title">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Keep Calm And Use Shlf !!!!</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Typed
            className="typed-text"
            strings={[
              "Team RYDG",
              "We believe we can change the world",
              " and it starts with saving you money",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />

          <div className="btn-main"></div>
        </div>

        <WhyShlf />
      </>
    );
  }
}

export default Home;
