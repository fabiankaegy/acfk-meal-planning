import React, { useContext } from 'react';
import Week from '../Week';
import { Recipes, AvailableRecipesContext } from '../AvailableRecipesContext';
import './style.scss';
import FullRecipe from '../FullRecipe';

const App = () => {
	const availableRecipes = useContext(AvailableRecipesContext);
	return (
		<div className="App">
			<Recipes>
				<FullRecipe recipe={availableRecipes[0]} />
			</Recipes>
		</div>
	);
};

export default App;
