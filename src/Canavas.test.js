import React from "react";
import { shallow } from "enzyme";
import Canavas from "./Canavas";
import { generateColor } from "./Common";

// test-1 if canvas rendered
describe("<Canavas /> rendering", () => {
  const wrapper = shallow(<Canavas />);
  it("should render a <canvas>", () => {
    expect(wrapper.find("canvas")).toHaveLength(1);
  });
});

// test-1 generate unique colors
it("should generate unique colors", () => {
  const colorArr = [
    { backgroundColor: "rgb(1,1,1)", h: 1, w: 1, x: 0, y: 0 },
    { backgroundColor: "rgb(2,1,1)", h: 1, w: 1, x: 1, y: 0 },
    { backgroundColor: "rgb(1,2,1)", h: 1, w: 1, x: 2, y: 0 },
    { backgroundColor: "rgb(2,2,1)", h: 1, w: 1, x: 3, y: 0 },
    { backgroundColor: "rgb(1,1,2)", h: 1, w: 1, x: 4, y: 0 },
    { backgroundColor: "rgb(2,1,2)", h: 1, w: 1, x: 5, y: 0 },
    { backgroundColor: "rgb(1,2,2)", h: 1, w: 1, x: 6, y: 0 },
    { backgroundColor: "rgb(2,2,2)", h: 1, w: 1, x: 7, y: 0 },
  ];
  const uniqueNums = [1, 2];
  expect(generateColor(uniqueNums)).toEqual(colorArr);
});
