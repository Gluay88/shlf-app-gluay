import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class BlogNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBlog: {
        name: "",
        comment: "",
        user_id: this.props.current_user.id,
        shlf_id: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { newBlog } = this.state; 
    newBlog[e.target.name] = e.target.value;
    this.setState({ newBlog: newBlog });
  };

  handleChangeTwo = (e) => { 
    let { newBlog } = this.state;
    newBlog.shlf_id = e.target.value;
    this.setState({ newBlog: newBlog });
  };

  handleSubmit = () => {
    this.props.createBlog(this.state.newBlog);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <select value={this.state.newBlog.shlf_id} onChange={this.handleChangeTwo}>
          <option value="" disabled>Pick your Shlf</option>
          <option value="1">Apple</option>
          <option value="2">Banana</option>
          <option value="3">Blueberry</option>
          <option value="4">Strawberry</option>
          <option value="5">Pineapple</option>
          <option value="6">Grapefruit</option>
          <option value="7">Grape</option>
          <option value="8">Peach</option>
          <option value="9">Melon</option>
        </select>

        <Form>
          <FormGroup>
            <Label for="name">Name: </Label>
            <Input
              type="string"
              name="name"
              placeholder="Enter your name"
              onChange={this.handleChange}
              value={this.state.newBlog.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Comment: </Label>
            <Input
              type="string"
              name="comment"
              placeholder="Enter you comment"
              onChange={this.handleChange}
              value={this.state.newBlog.comment}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Create a new blog
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="blogindex" />}
      </>
    );
  }
}

export default BlogNew;
