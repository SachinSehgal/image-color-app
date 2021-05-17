import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Canavas from "./Canavas";

it("should render Button and Canavas", () => {
  const wrapper = shallow(<App />);
  const canavas = wrapper.find(Canavas);

  expect(canavas.exists()).toBe(true);
});
