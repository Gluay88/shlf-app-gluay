import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col } from "reactstrap";

export class BlogIndex extends Component {
  render() {
    return (
      <>
        <h4>BlogIndex.js Page</h4>
        <Col sm="6">
          {this.props.blogs.map((blog) => {
            return (
              <Card body key={blog.id}>
                <CardTitle>
                  <div>
                    <NavLink to={`/blogshow/${blog.id}`} key={blog.id}>
                      <h5>Name: {blog.name}</h5>
                      <p>comment: {blog.comment}</p>
                    </NavLink>
                  </div>
                </CardTitle>
              </Card>
            );
          })}
        </Col>
      </>
    );
  }
}

export default BlogIndex;
