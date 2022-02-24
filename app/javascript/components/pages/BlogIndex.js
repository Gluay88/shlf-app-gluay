import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, Button } from "reactstrap";

export class BlogIndex extends Component {
  render() {
    return (
      <>
        <Col sm="6">
          {this.props.blogs.map((blog) => {
            return (
              <Card body key={blog.id}>
                <CardTitle>
                  <div>
                    <NavLink to={`/blogshow/${blog.id}`} key={blog.id}>
                      <h5>Title: {blog.name}</h5>
                      <p>Comment: {blog.comment}</p>
                    </NavLink>
                  </div>
                </CardTitle>
              </Card>
            );
          })}
        </Col>
        <br />
        <Button>
          <a href="http://localhost:3000/blognew" style={{ color: "#fff" }}>
            Add your comment
          </a>
        </Button>
      </>
    );
  }
}

export default BlogIndex;
