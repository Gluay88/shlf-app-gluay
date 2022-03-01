import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BlogShow from "./BlogShow";
// import MockBlogs from "../MockBlogs"

Enzyme.configure({ adapter: new Adapter() });

describe("When BlogShow renders", () => {
  it("shows content of blog", () => {
    const BlogShowrapper = shallow(<BlogShow Blog={{}} />);
    const BlogShowForm = BlogShowWrapper.find("FormGroup");
    expect(BlogShowForm.length).toEqual();
  });
  it("", () => {
    const BlogShowrapper = shallow(<BlogShow Blog={{}} />);
    const BlogShowForm = BlogShowWrapper.find("");
    expect(BlogShowForm.length).toEqual();
  });
});