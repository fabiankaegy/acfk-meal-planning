/**
 * External dependencies
 */
import React, { useContext } from 'react';
/**
 * Internal dependencies
 */
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import FullRecipe from '../FullRecipe';

const Wrapper = ( { match } ) => {
	const availableRecipes = useContext( AvailableRecipesContext );
	const selectedRecipe = availableRecipes.filter(
		( recipe ) => recipe.id === parseFloat( match.params.id )
	);

	return (
		<div className="App">{ selectedRecipe[ 0 ] && <FullRecipe recipe={ selectedRecipe[ 0 ] } /> }</div>
	);
};

export default Wrapper;
