import React from "react";
import { shallow, mount } from "enzyme";
import Button from "./Button";

it("should render button element", () => {
  const wrapper = shallow(<Button />);
  const button = wrapper.find("button");
  const result = button.text();

  expect(result).toBe("Regenerate Colors");
});

// it("should update state on click", () => {
//   const generateNumbers = jest.fn();
//   const wrapper = mount(<Button onClick={generateNumbers} />);
//   const handleClick = jest.spyOn(React, "useState");
//   handleClick.mockImplementation(size => [size, generateNumbers]);

//   wrapper.find("button").simulate("click");
//   expect(generateNumbers).toBeTruthy();
// });
