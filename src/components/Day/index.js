import React, { useState } from "react";
import "./style.scss";

const Day = props => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = () => {
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
    </div>
  );
};

export default Day;
