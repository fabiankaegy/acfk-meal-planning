import React, { useState, useContext, useEffect } from 'react';
import Popover from '../Popover';
import usePopover from '../Popover/usePopover';
import Button from '../Button';
import Meal from '../Meal';
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import './style.scss';

const Day = props => {
	const availableRecipes = useContext(AvailableRecipesContext);
	const [recipes, setRecipes] = useState([]);
	const addRecipesPopover = usePopover(false);

	// useEffect(() => {
	// 	setRecipes(availableRecipes);
	// }, [availableRecipes]);

	const addRecipe = recipe => {
		let newRecipes = [...recipes, recipe];
		// add new recipe here
		setRecipes(newRecipes);
	};

	const removeRecipe = atIndex => {
		let newRecipes = [...recipes];
		newRecipes.pop();
		setRecipes(newRecipes);
	};
	return (
		<div className="day">
			<header className="header">
				<h2>{props.title}</h2>
			</header>
			<div className="recipes" data-testid="recipes">
				{recipes.map((recipe, key) => (
					<Meal recipe={recipe} key={key} />
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
