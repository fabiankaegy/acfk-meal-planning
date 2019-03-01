import React from 'react';
import IconWithText from '../IconWithText';

const FullRecipe = props => {
	return (
		<div>
			<div className="close-btn">x</div>

			<aside className="ingredients">{props.recipe.ingredients[0]}</aside>

			<div className="lg-img">{props.recipe.image.src}</div>
			<div className="description">{props.recipe.description}</div>
			<div className="timing">
				<IconWithText icon="" text="My Time" />
			</div>
			<div className="instructions">{props.recipe.content}</div>
		</div>
	);
};

export default FullRecipe;
