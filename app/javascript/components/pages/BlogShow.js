import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class BlogShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.blog);
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
        <Button>Edit your comment</Button>
        <br />
        <Button>Delete your comment</Button>
      </>
    );
  }
}

export default BlogShow;
