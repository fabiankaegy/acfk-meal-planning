/**
 * External dependencies
 */
import React, { useState } from 'react';
/**
 * Internal dependencies
 */
import RecipeList from '../RecipeList';
import Week from '../Week';

const Home = () => {
	const [recipeToAdd, setRecipeToAdd] = useState(null);

	return (
		<div className="main">
			<header>
				<h1>Weekly Meal Plan</h1>
			</header>
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
