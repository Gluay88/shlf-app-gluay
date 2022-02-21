import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class BlogNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            newBlog: {
                name: "",
                comment: "",
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { newBlog } = this.state
        newBlog[e.target.name] = e.target.value
        this.setState({newBlog: newBlog})
    }

    handleSubmit = () => {
        this.props.createBlog(this.state.newBlog)
        this.setState({submitted: true})
    }

  render() {
    return (
      <>
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
            <Input type="string" name="comment"
            placeholder="Enter you comment"
            onChange={this.handleChange}
            value={this.state.newBlog.comment}
            />
          </FormGroup>
          <Button
        name="submit"
        onClick={this.handleSubmit}
        >
            Create a new blog    
        </Button>
        </Form>
        {this.state.submitted && <Redirect to="blogindex" />}
      </>
    );
  }
}

export default BlogNew;
