import React from "react";
import { shallow } from "enzyme";
import Canavas from "./Canavas";
import { generateColor } from "./Common";

// test-1 canvas rendered
describe("<Canavas /> rendering", () => {
  const wrapper = shallow(<Canavas />);
  it("should render a <canvas>", () => {
    expect(wrapper.find("canvas")).toHaveLength(1);
  });
});

// test-2 generate unique colors
it("should generate unique colors", () => {
  const uniqueNums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  ];
  const colorsSet = new Set();
  const colorsArray = generateColor(uniqueNums);

  colorsArray.forEach((color) => colorsSet.add(color.backgroundColor));
  const isArrayUnique = colorsArray.length === colorsSet.size;

  expect(isArrayUnique).toBeTruthy();
});
