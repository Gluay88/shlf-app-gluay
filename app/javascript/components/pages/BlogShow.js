import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export class BlogShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { blog } = this.props;
    return (
      <>
        <h1>BlogShow.js</h1>
        <Col sm="6">
          <Card body>
            <CardTitle>{this.props.blog.name}</CardTitle>
            <h2>comment: {this.props.blog.comment}</h2>
          </Card>
        </Col>
        <br />
        <NavLink to={`/blogedit/${this.props.blog.id}`}>
          <Button>Edit comment</Button>
        </NavLink>
        <br />
        <NavLink to="/blogindex" onClick={this.handleSubmit}>
        <Button>Delete comment</Button>
      </NavLink>
      </>
    );
  }
}

export default BlogShow;
