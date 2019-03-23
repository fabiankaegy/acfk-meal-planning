import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "react-testing-library";
import Week from "./index";

describe("Week Component", function() {
  let wrapper;

  beforeEach(function() {
    wrapper = render(<Week />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Week />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
