import React, { useState, useContext, useEffect } from "react";
import Popover from "../Popover";
import usePopover from "../Popover/usePopover";
import { AvailableRecipesContext } from "../AvailableRecipesContext";
import "./style.scss";

const Day = props => {
  const availableRecipes = useContext(AvailableRecipesContext);
  const [recipes, setRecipes] = useState([]);
  const popover = usePopover(false);

  useEffect(() => {
    console.log(availableRecipes);
  }, [availableRecipes]);

  const addRecipe = () => {
    popover.toggle();
    let newRecipes = [...recipes];
    newRecipes.push(1);
    setRecipes(newRecipes);
  };

  const removeRecipe = () => {
    let newRecipes = [...recipes];
    newRecipes.pop();
    setRecipes(newRecipes);
  };
  return (
    <div className="day">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="recipes" data-testid="recipes">
        {recipes.map((recipe, key) => (
          <span key={key}>A Recipe will go here</span>
        ))}
      </div>
      <button onClick={addRecipe} data-testid="add-recipe-button">
        Add Recipe
      </button>
      <button onClick={removeRecipe} data-testid="remove-recipe-button">
        Remove Recipe
      </button>
      {popover.isShown && <Popover />}
    </div>
  );
};

export default Day;
