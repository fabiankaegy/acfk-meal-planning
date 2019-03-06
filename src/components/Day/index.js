import React, { useContext, useReducer, useEffect } from 'react';
import Popover from '../Popover';
import usePopover from '../Popover/usePopover';
import Button from '../Button';
import Meal from '../Meal';
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import './style.scss';

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

const Day = props => {
	const availableRecipes = useContext(AvailableRecipesContext);
	const [recipes, dispatchRecipes] = useReducer(recipeReducer, []);
	const addRecipesPopover = usePopover(false);

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

	const addRecipe = recipe => {
		dispatchRecipes({ type: 'add', payload: recipe });
	};

	const removeRecipe = identifier => {
		dispatchRecipes({ type: 'remove', payload: identifier });
	};
	return (
		<div className="day">
			<header className="header">
				<h2>{props.title}</h2>
			</header>
			<div className="recipes" data-testid="recipes">
				{recipes.map((recipe, key) => (
					<Meal
						recipe={recipe}
						key={key}
						onClick={() => {
							removeRecipe(recipe);
						}}
					/>
				))}
				<Button onClick={addRecipesPopover.toggle} plus={true} data-testid="add-recipe-button">
					{addRecipesPopover.isShown && (
						<Popover>
							{addRecipesPopover.isShown &&
								availableRecipes &&
								availableRecipes.map((recipe, key) => (
									<Meal onClick={() => addRecipe(recipe)} recipe={recipe} key={key} />
								))}
						</Popover>
					)}
				</Button>
			</div>
		</div>
	);
};

export default Day;
