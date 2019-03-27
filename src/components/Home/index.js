import React, { useState } from 'react';
import RecipeList from '../RecipeList';
import Week from '../Week';

const Home = props => {
	const [recipeToAdd, setRecipeToAdd] = useState(null);

	return (
		<div className="main">
			<Week
				recipeToAdd={recipeToAdd}
				done={() => {
					setRecipeToAdd(null);
				}}
			/>
			<RecipeList setRecipeToAdd={setRecipeToAdd} />
		</div>
	);
};

export default Home;
