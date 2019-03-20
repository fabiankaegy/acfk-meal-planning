import React, { useContext, useReducer, useEffect } from 'react';
//import Popover from '../Popover';
//import usePopover from '../Popover/usePopover';
//import Button from '../Button';
import Meal from '../Meal';
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import '../App/style.scss';

const recipeReducer = (recipes, action) => {
	switch (action.type) {
		case 'add': {
			return [
				...recipes,
				{
					...action.payload,
					identfier: Date.now(),
				},
			];
		}
		case 'remove': {
			return recipes.filter(recipe => recipe.identfier !== action.payload.identfier);
		}
		case 'clear': {
			return [];
		}
		case 'populate': {
			return [...action.payload];
		}
		default:
			return recipes;
	}
};

const RecipeList = props => {
	const availableRecipes = useContext(AvailableRecipesContext);
	const [recipes, dispatchRecipes] = useReducer(recipeReducer, []);
	//const addRecipesPopover = usePopover(false);

	useEffect(() => {
		const recipes = localStorage.getItem(`${props.title}-recipes`);
		if (recipes) {
			dispatchRecipes({
				type: 'populate',
				payload: JSON.parse(recipes),
			});
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(`${props.title}-recipes`, JSON.stringify(recipes));
	}, [recipes]);

<<<<<<< HEAD
=======
	const addRecipe = recipe => {
		dispatchRecipes({ type: 'add', payload: recipe });
	};

	const removeRecipe = identifier => {
		dispatchRecipes({ type: 'remove', payload: identifier });
	};
>>>>>>> ac-full-recipe-view
	return (
		<div className="recipeContainer">
			<header className="recipeListHeader">
				<h2>Recipes</h2>
			</header>
			<div className="recipeListContainer">
				<ul className="recipeList">
<<<<<<< HEAD
					{availableRecipes.map((recipe, key) => (
						<li className="recipeListItem" key={key}>
							<Meal recipe={recipe} key={key} />
						</li>
					))}
=======
					{availableRecipes &&
						availableRecipes.map((recipe, key) => (
							<li className="recipeListItem" key={key}>
								<Meal onClick={() => addRecipe(recipe)} recipe={recipe} key={key} />
							</li>
						))}
>>>>>>> ac-full-recipe-view
				</ul>
			</div>
		</div>
	);
};

export default RecipeList;
