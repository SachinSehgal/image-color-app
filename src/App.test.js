import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { generateUniqueNumbers } from "./Common";
import Canavas from "./Canavas";

// test 1 - render button and canavas
it("should render Button and Canavas", () => {
  const wrapper = shallow(<App />);
  const canavas = wrapper.find(Canavas);

  expect(canavas.exists()).toBe(true);
});

// test 2 - generate unique numbers
it("should generate unique numbers", () => {
  const resultSet = generateUniqueNumbers(5);
  const resultArray = [...Array.from(resultSet)];
  const isArrayUnique = resultSet.size === resultArray.length;

  expect(isArrayUnique).toBeTruthy();
});
