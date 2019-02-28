import React from 'react';
import RecipeData from '../RecipeData';
import IconWithText from '../IconWithText';

const FullRecipe = props => {
	return (
		<React.Fragment>
			<div className="close-btn">x</div>

			<aside className="ingredients">{props.recipe.ingredients}</aside>

			<div className="lg-img">{props.recipe.image}</div>
			<div className="description">{props.recipe.description}</div>
			<div className="timing">
				<IconWithText icon="" text="My Time" />
			</div>
			<div className="instructions">{props.recipe.content}</div>
		</React.Fragment>
	);
};

export default FullRecipe;
