import React from 'react';
import IconInfo from '../IconInfo';
import { Clock } from '../../icons';
import { Plus } from '../../icons';
import { People } from '../../icons';

const FullRecipe = props => {
	return (
		<div className="recipe-full">
			<header>
				<div className="lg-img">
					<img src={props.recipe.image.src} alt={props.recipe.image.alt} />
				</div>
			</header>
			<aside className="sidebar">
				<div className="close-btn">
					<a href="#">BACK</a>
				</div>
				<div className="ingredients">
					<h3>Ingredients</h3>
					<p dangerouslySetInnerHTML={{ __html: props.recipe.ingredients }} />
				</div>
				<div className="timing">
					<IconInfo icon={<People />} text={props.recipe.servings} />
					<IconInfo icon={<Plus />} text={props.recipe.prepTime} />
					<IconInfo icon={<Clock />} text={props.recipe.cookingTime} />
				</div>
			</aside>
			<section className="recipe-info">
				<div className="description">
					<p dangerouslySetInnerHTML={{ __html: props.recipe.description }} />
				</div>
				<div className="instructions">
					<p dangerouslySetInnerHTML={{ __html: props.recipe.content }} />
				</div>
			</section>
		</div>
	);
};

export default FullRecipe;
