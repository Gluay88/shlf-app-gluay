import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col } from "reactstrap";

export class ShlfIndex extends Component {
  render() {
    return (
      <div id="shlfindex-whole">
      <div id="shlfindex-container">
        <br />
        <Col sm="6">
          {this.props.shlves.map((shlf) => {
            return (
              <Card body key={shlf.id}>
                <CardTitle>
                  <div>
                    <h4>{shlf.name}</h4>
                    <NavLink to={`/shlfshow/${shlf.id}`} key={shlf.id}>
                      <img src={shlf.image} alt="" width="100%" />
                    </NavLink>
                  </div>
                </CardTitle>
              </Card>
            );
          })}
        </Col>
      </div>
      </div>
    );
  }
}
export default ShlfIndex;
