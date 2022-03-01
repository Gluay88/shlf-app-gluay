import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export class BlogShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  handleSubmit = () => {
    this.props.deleteBlog(this.props.blog.id);
    this.setState({ submitted: true });
  };

  render() {
    const { blog } = this.props;
    return (
      <>
        <Col sm="6">
          <Card body>
            <CardTitle>{this.props.blog.name}</CardTitle>
            <h2>&#127827; comment: {this.props.blog.comment}</h2>
          </Card>
        </Col>
        <br />
        <NavLink to={`/blogedit/${this.props.blog.id}`}>
          <Button>Update comment</Button>
        </NavLink>
        <br />
        <NavLink to="/blogindex" onClick={this.handleSubmit}>
          <Button>Delete comment</Button>
        </NavLink>
        {this.state.submitted && <Redirect to={`/blogindex`} />}
      </>
    );
  }
}

export default BlogShow;
