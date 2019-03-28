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
	const [ recipeToAdd, setRecipeToAdd ] = useState( null );

	return (
		<div className="main">
			<Week
				recipeToAdd={ recipeToAdd }
				done={ () => {
					setRecipeToAdd( null );
				} }
			/>
			<RecipeList setRecipeToAdd={ setRecipeToAdd } />
		</div>
	);
};

export default Home;
