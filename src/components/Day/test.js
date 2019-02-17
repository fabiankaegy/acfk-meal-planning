import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "react-testing-library";
import Day from "./index";

describe("Day Component", function() {
  let wrapper;
  beforeEach(function() {
    wrapper = render(<Day title="Title" />);
  });

  afterEach(() => {
    cleanup(wrapper);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Day title="Title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("adds recipe after add recipe button is clicked", () => {
    const { getByTestId } = wrapper;
    const addRecipeButton = getByTestId("add-recipe-button");
    const recipes = getByTestId("recipes").childNodes;

    const lengthBefore = recipes.length;
    fireEvent.click(addRecipeButton);
    expect(recipes.length).toBe(lengthBefore + 1);
  });

  it("removes recipe after remove recipe button is clicked", () => {
    const { getByTestId } = wrapper;
    const addRecipeButton = getByTestId("add-recipe-button");
    const removeRecipeButton = getByTestId("remove-recipe-button");
    const recipes = getByTestId("recipes").childNodes;

    fireEvent.click(addRecipeButton);
    expect(recipes.length).toBe(1);

    fireEvent.click(removeRecipeButton);
    expect(recipes.length).toBe(0);
  });
});
