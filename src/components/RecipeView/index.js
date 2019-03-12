import React, { useContext, useEffect } from 'react';
import { Recipes } from '../AvailableRecipesContext';
import FullRecipe from '../FullRecipe';
import Wrapper from '../Wrapper';
import '../App/style.scss';

const RecipeView = props => {
	return (
    <Recipes>
        <Wrapper />
    </Recipes>
    );
};
    
export default RecipeView;