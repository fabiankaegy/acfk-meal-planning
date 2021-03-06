/**
 * External dependencies
 */
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
/**
 * Internal dependencies
 */
import IconInfo from '../IconInfo';
import { Cook, Serve, Prep } from '../../icons';

function FullRecipe( props ) {
	const { prepTime, cookingTime, servings, image, title, content, description, ingredients } = props.recipe;

	const raw = ingredients;
	const rawToString = raw.toString();

	const rawList = rawToString.split( ',' );

	const ingredientList = rawList.map( ( ingredient ) => (
		<li className="ingredient" key={ ingredient }>
			{ ingredient }
		</li>
	) );

	return (
		<div className="recipeFull">
			<DocumentTitle title={ `${ title } - Recipe` } />
			<header className="recipeHeader" role="banner">
				<div className="lgImg">{ image && <img src={ image.src } alt={ image.alt } /> }</div>
			</header>
			<aside className="sidebar">
				<div className="closeBtn">
					<Link aria-label="Go Back to the Overview" to={ { pathname: `/` } }>
						BACK
					</Link>
				</div>
				<div className="ingredients">
					<h3>Ingredients</h3>
					<ul className="ingredientList">{ ingredientList }</ul>
				</div>
			</aside>
			<main className="recipeInfo">
				<div className="description">
					<h1 dangerouslySetInnerHTML={ { __html: title } } />
					<p dangerouslySetInnerHTML={ { __html: description } } />
				</div>
				<div className="timing">
					<ul className="iconInfo">
						<IconInfo icon={ <Serve /> } text={ servings } unit="people" label={ `Servings` } />
						<IconInfo icon={ <Prep /> } text={ prepTime } unit="min" label={ `Prep time` } />
						<IconInfo icon={ <Cook /> } text={ cookingTime } unit="min" label={ `Cooking Time` } />
					</ul>
				</div>
				<div className="instructions">
					<h2>Instructions:</h2>
					<p dangerouslySetInnerHTML={ { __html: content } } />
				</div>
			</main>
		</div>
	);
}

export default FullRecipe;
