import React from 'react';
import { Recipes } from '../AvailableRecipesContext';
import FullRecipe from '../FullRecipe';
//import Wrapper from '../Wrapper';
import '../App/style.scss';

const RecipeView = props => {
	return (
    <Recipes>
        <FullRecipe />
    </Recipes>
    );
};
    
export default RecipeView;