import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BlogEdit from "./BlogEdit";
// import MockBlogs from "../MockBlogs"

Enzyme.configure({ adapter: new Adapter() });

describe("When BlogEdit renders", () => {
  it("shows content of blog", () => {
    const BlogEditWrapper = shallow(<BlogEdit Blog={{}} />);
    const BlogEditForm = BlogEditWrapper.find("FormGroup");
    expect(BlogEditForm.length).toEqual();
  });
});