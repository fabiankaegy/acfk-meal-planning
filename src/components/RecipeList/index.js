import React, { useContext } from 'react';
//import Popover from '../Popover';
//import usePopover from '../Popover/usePopover';
//import Button from '../Button';
import Meal from '../Meal';
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import '../App/style.scss';

const RecipeList = ({ setRecipeToAdd }) => {
	const availableRecipes = useContext(AvailableRecipesContext);

	return (
		<div className="recipeContainer">
			<header className="recipeListHeader">
				<h2>Recipes</h2>
			</header>
			<div className="recipeListContainer">
				<ul className="recipeList">
					{availableRecipes.map((recipe, key) => (
						<li className="recipeListItem" key={key}>
							<Meal
								recipe={recipe}
								key={key}
								onClick={() => {
									setRecipeToAdd(recipe);
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RecipeList;
