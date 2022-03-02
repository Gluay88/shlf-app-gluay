import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, Button } from "reactstrap";

export class BlogIndex extends Component {
  render() {
    return (
      <div id="blog-container">
        <Col sm="6">
          {this.props.blogs.map((blog) => {
            return (
              <Card body key={blog.id}>
                <CardTitle>
                  <div>
                    <NavLink to={`/blogshow/${blog.id}`} key={blog.id}>
                      <h5>&#127818; Title: {blog.name}</h5>
                      <p>Comment: {blog.comment}</p>
                    </NavLink>
                  </div>
                </CardTitle>
              </Card>
            );
          })}
        </Col>
        <br />
        <div id="blogindex-button">
          {this.props.current_user && (
            <Button>
              <a href="/blognew" style={{ color: "#fff" }}>
                Add your comment
              </a>
            </Button>
          )}
          {!this.props.current_user && (
            <Button>
              <a href={this.props.sign_in_route}>Sign In</a>
            </Button>
          )}
      </div>
      </div>
    );
  }
}

export default BlogIndex;
