import React from "react";
import { shallow } from "enzyme";
import Canavas from "./Canavas";

function generateColor(data) {
  let colorArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        colorArray.push(`rgb(${data[k]},${data[j]},${data[i]})`);
      }
    }
  }
  return colorArray;
}

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Canavas />);
});

describe("<Canavas /> rendering", () => {
  it("should render a <canvas>", () => {
    expect(wrapper.find("canvas")).toHaveLength(1);
  });
});

it("should generate unique colors", () => {
  const colorArr = ["rgb(1,1,1)", "rgb(2,1,1)", "rgb(1,2,1)", "rgb(2,2,1)", "rgb(1,1,2)", "rgb(2,1,2)", "rgb(1,2,2)", "rgb(2,2,2)"];
  const uniqueNums = [1, 2];
  expect(generateColor(uniqueNums)).toEqual(colorArr);
});


