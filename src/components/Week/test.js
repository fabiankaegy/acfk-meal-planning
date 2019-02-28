import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Week from "./index";

configure({ adapter: new Adapter() });

describe("Week Component", function() {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<Week />);
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
