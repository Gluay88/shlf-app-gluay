import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BlogIndex from "./BlogIndex";
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() });

describe("When BlogIndex renders", () => {
  it("form has 2 inputs", () => {
    const component = shallow(<BlogIndex current_user={{ id: 1 }} />)
    const input = component.find("a").text()
    expect(input).toEqual("Add your comment");
  });
});
