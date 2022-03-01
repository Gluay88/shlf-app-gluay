import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BlogNew from "./BlogNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When BlogNew renders", () => {
  it("form has 2 inputs", () => {
    const component = shallow(<BlogNew current_user={{ id: 1 }} />);
    const input = component.find("Input");
    expect(input.length).toEqual(2);
  });
});
