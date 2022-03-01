import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import BlogEdit from './BlogEdit';



describe("When a blog post is edited", () => {
    it("displays new context", () => {
      const home = shallow(<Home />)
      const homeHeading = home.find("h3").text()
      expect(homeHeading).toEqual("Welcome to Cat Tinder!")
    })
  })
