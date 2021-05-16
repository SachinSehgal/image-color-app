import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Canavas from "./Canavas";
import Button from "./Button";

it("should render Button and Canavas", () => {
  const wrapper = shallow(<App />);
  const canavas = wrapper.find(Canavas);
  const button = wrapper.find(Button);

  expect(canavas.exists()).toBe(true);
  expect(button.exists()).toBe(true);
});
