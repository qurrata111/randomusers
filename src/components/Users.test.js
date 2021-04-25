import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Users from "./Users";
import nock from "nock";

configure({ adapter: new Adapter()});

describe("Users", () => {
  it("renders correctly", () => {
    shallow(<Users />);
  });
  

  it("fetches random users from API", () => {
    
  });
  
 });