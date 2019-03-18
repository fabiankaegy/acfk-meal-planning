import React from 'react';
import IconInfo from '../IconInfo';
import { Cook } from '../../icons';
import { Prep } from '../../icons';
import { Serve } from '../../icons';

function FullRecipe(props) {
	//const ingredientsList = props.recipe.ingredients.split(',');

	return (
		<div className="recipe-full">
			<header>
				<div className="lg-img">
					{props.recipe.image && <img src={props.recipe.image.src} alt={props.recipe.image.alt} />}
				</div>
			</header>
			<section className="recipe-info">
				<div className="description">
					<p dangerouslySetInnerHTML={{ __html: props.recipe.description }} />
				</div>
				<div className="instructions">
					<p dangerouslySetInnerHTML={{ __html: props.recipe.content }} />
				</div>
			</section>
			<aside className="sidebar">
				<div className="close-btn">BACK</div>
				<div className="ingredients">
					<h3>Ingredients</h3>
					<p dangerouslySetInnerHTML={{ __html: props.recipe.ingredients }} />
				</div>
				<div className="timing">
					<IconInfo icon={<Serve />} text={props.recipe.servings} unit="per" />
					<IconInfo icon={<Prep />} text={props.recipe.prepTime} unit="min" />
					<IconInfo icon={<Cook />} text={props.recipe.cookingTime} unit="min" />
				</div>
			</aside>
		</div>
	);
}

export default FullRecipe;
