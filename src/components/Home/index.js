import React, { useState, useEffect } from 'react';
import RecipeList from '../RecipeList';
import Week from '../Week';

const Home = props => {
	const [recipeToAdd, setRecipeToAdd] = useState({});
	useEffect(() => {
		console.log(recipeToAdd);
	}, [recipeToAdd]);
	return (
		<div className="main">
			<Week recipeToAdd={recipeToAdd} />
			<RecipeList setRecipeToAdd={setRecipeToAdd} />
		</div>
	);
};

export default Home;
