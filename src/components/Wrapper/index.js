import React, { useContext, useEffect } from 'react';
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import FullRecipe from '../FullRecipe';

const Wrapper = () => {
	const availableRecipes = useContext(AvailableRecipesContext);

	return (
		<div className="App">{availableRecipes[0] && <FullRecipe recipe={availableRecipes[1]} />}</div>
	);
};

export default Wrapper;
