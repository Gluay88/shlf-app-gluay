import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BlogIndex from "./BlogIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When BlogIndex Loads...", () => {
  it("displays a header with text", () => {
    const BlogIndex = shallow(<BlogIndex />);
    const header = BlogIndex.find("h1");
    expect(header.length).toEqual(1);
  });
});
