import React, { Component } from "react";
import NotFoundPhoto from "../assets/404.svg";

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 Page Not Found</h1>
        <a href="/" style={{textAlign:"center"}}>Back to home page</a>
        <img src={NotFoundPhoto} alt="404 Page Not Found" width="80%" />
      </div>
    );
  }
}

export default NotFound;
