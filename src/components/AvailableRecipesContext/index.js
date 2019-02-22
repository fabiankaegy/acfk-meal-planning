import React, { useState, useEffect } from "react";

const AvailableRecipesContext = React.createContext();

const Recipes = props => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://acfk.fabian-kaegy.de/wp-json/wp/v2/acfk_recipes?_embed")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.error;
        }
      })
      .then(recipes => {
        setRecipes(recipes);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <AvailableRecipesContext.Provider value={recipes}>
      {props.children}
    </AvailableRecipesContext.Provider>
  );
};

export { Recipes, AvailableRecipesContext };
