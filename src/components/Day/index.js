import React, { useContext, useReducer } from 'react';
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
					identfier: Symbol(),
				},
			];
		}
		case 'remove': {
			return recipes.filter(recipe => recipe.identfier !== action.payload.identfier);
		}
		case 'clear': {
			return [];
		}
		default:
			return recipes;
	}
};

const Day = props => {
	const availableRecipes = useContext(AvailableRecipesContext);
	const [recipes, dispatchRecipes] = useReducer(recipeReducer, []);
	const addRecipesPopover = usePopover(false);

	// useEffect(() => {
	// 	setRecipes(availableRecipes);
	// }, [availableRecipes]);

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
