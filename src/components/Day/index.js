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
      <div className="recipes">
        {recipes.map((recipe, key) => (
          <span key={key}>A Recipe will go here</span>
        ))}
        <button onClick={addRecipe}>Add Recipe</button>
        <button onClick={removeRecipe}>Remove Recipe</button>
      </div>
    </div>
  );
};

export default Day;
