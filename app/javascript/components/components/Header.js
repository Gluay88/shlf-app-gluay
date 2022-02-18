import React, { Component } from "react";
import ShlfLogo from "../assets/shlf.svg";

export class Header extends Component {
  render() {
    return (
      <>
        <h4>Header goes here.</h4>
        <a href="#">
          <img src={ShlfLogo} alt="Shlf Logo" width="250px" />
        </a>
      </>
    );
  }
}

export default Header;
