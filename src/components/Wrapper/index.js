import React, { useContext } from 'react';
import { AvailableRecipesContext, Recipes } from '../AvailableRecipesContext';
import FullRecipe from '../FullRecipe';

const Wrapper = ({ match }) => {
	const availableRecipes = useContext(AvailableRecipesContext);

	return (
		<div className="App">
			<Recipes>
				{availableRecipes[0] && <FullRecipe recipe={availableRecipes[match.params.id]} />}
			</Recipes>
		</div>
	);
};

export default Wrapper;
