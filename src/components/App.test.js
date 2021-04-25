import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter()});

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });

  it("includes one headers", ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h2").length).toEqual(1);
  });

  it("includes divs", ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(4);
  })

  it("includes one Users component", ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Users").length).toEqual(1);
  })

});