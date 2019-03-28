/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
/**
 * Internal dependencies
 */
import './style.scss';
import { Clock, People } from '../../icons';

const Meal = ( props ) => {
	const {
		recipe: { prepTime, cookingTime, servings, image, title, id },
		onClick,
		tabIndex,
		buttonText,
		showAdditionalInfo = false,
	} = props;
	return (
		<div
			aria-label={ `${ title }, takes ${ prepTime + cookingTime } minutes for ${ servings } servings.` }
			tabIndex={ tabIndex ? tabIndex : -1 }
			className="meal"
			style={ {
				background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url(${
					image.src
				}) center no-repeat`,
				backgroundSize: 'cover',
			} }
		>
			{ showAdditionalInfo && (
				<Fragment>
					<span className="time">
						<Clock />
						{ `${ prepTime + cookingTime } min.` }
					</span>
					<span className="servings">
						<People />
						{ `${ servings } serv.` }
					</span>
				</Fragment>
			) }

			<h3 dangerouslySetInnerHTML={ { __html: title } } />
			<span className="hover-overlay">
				<span>
					<button onClick={ onClick } tabIndex={ tabIndex }>
						{ buttonText }
					</button>
				</span>
				<span className="line" />
				<span>
					<Link
						tabIndex={ tabIndex }
						key={ id }
						to={ {
							pathname: `/recipe/${ id }`,
						} }
					>
						View
					</Link>
				</span>
			</span>
		</div>
	);
};

export default Meal;
