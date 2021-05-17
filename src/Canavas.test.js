import React from "react";
import { shallow } from "enzyme";
import Canavas from "./Canavas";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Canavas />);
});

describe("<Canavas /> rendering", () => {
  it("should render a <canvas>", () => {
    expect(wrapper.find("canvas")).toHaveLength(1);
  });
});

describe("generate 32768 colors from 32 unique numbers", () => {
  it("knows that lopping 32  three times will output 32768", () => {
    expect(32 * 32 * 32).toBe(32768);
  });
});
