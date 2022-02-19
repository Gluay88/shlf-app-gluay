import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col } from "reactstrap";

export class ShlfShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.shlf);
    const { shlf } = this.props;
    return (
      <>
        <h2>ShlfShow.js page</h2>
        <br />
        <Col sm="6">
          <Card body>
            <CardTitle>{this.props.shlf.name}</CardTitle>
            <img src={this.props.shlf.image} alt="" />
            <a
              href="https://food.unl.edu/free-resource/food-storage#fruit"
              target="_blank"
            >
              Information from FDA
            </a>
            <h2>{this.props.shlf.name} storage conditions</h2>
            <p>Room Temperature : {this.props.shlf.room_temp}</p>
            <p>
              Refrigerator Temperature : {this.props.shlf.refrigerator_temp}
            </p>
            <p>Freezer Temperature : {this.props.shlf.freezer_temp}</p>
          </Card>
        </Col>
      </>
    );
  }
}

export default ShlfShow;
