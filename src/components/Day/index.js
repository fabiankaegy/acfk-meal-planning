/**
 * External dependencies
 */
import React, { useContext, useReducer, useEffect, useRef } from 'react';
/**
 * Internal dependencies
 */
import usePopover from '../Popover/usePopover';
import Button from '../Button';
import Meal from '../Meal';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { AvailableRecipesContext } from '../AvailableRecipesContext';
import { Plus } from '../../icons';
import './style.scss';

/**
 * Reducer to manage the state of the local recipes inside each day
 *
 * @param {*} recipes
 * @param {*} action
 * @return {void}
 */
const recipeReducer = ( recipes, action ) => {
	switch ( action.type ) {
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
			return recipes.filter( ( recipe ) => recipe.identfier !== action.payload.identfier );
		}
		case 'clear': {
			return [];
		}
		case 'populate': {
			return [ ...action.payload ];
		}
		default:
			return recipes;
	}
};

const Day = ( props ) => {
	const availableRecipes = useContext( AvailableRecipesContext );
	const [ recipes, dispatchRecipes ] = useReducer( recipeReducer, [] );
	const addRecipesPopover = usePopover( false );
	const modalRef = useRef();

	const closeWhenClickedOutside = ( event ) => {
		let targetElement = event.target; // clicked element

		do {
			if ( targetElement === modalRef.current ) {
				// This is a click inside. Do nothing, just return.
				return;
			}
			// Go up the DOM
			targetElement = targetElement.parentNode;
		} while ( targetElement );

		// This is a click outside.
		addRecipesPopover.toggle();
	};

	/*
	 * Setup event listeners to detect wether or not the user clicked outside the modal
	 */
	useEffect( () => {
		if ( addRecipesPopover.isShown ) {
			document.addEventListener( 'click', closeWhenClickedOutside );
		}
		return () => {
			document.removeEventListener( 'click', closeWhenClickedOutside );
		};
	}, [ addRecipesPopover.isShown ] );

	/*
	 * Populate the local day state from LocalStorage upon ititial mounting
	 */
	useEffect( () => {
		const localRecipes = window.localStorage.getItem( `${ props.title }-recipes` );

		if ( localRecipes ) {
			dispatchRecipes( {
				type: 'populate',
				payload: JSON.parse( localRecipes ),
			} );
		}
	}, [] );

	/*
	 * Save local recipe state to LocalStorage upon every change to the recipes state
	 */
	useEffect( () => {
		window.localStorage.setItem( `${ props.title }-recipes`, JSON.stringify( recipes ) );
	}, [ recipes ] );

	/*
	 * Add recipe that is passed via the recipeToAdd prop to the recipe state and call callback function
	 */
	useEffect( () => {
		if ( props.recipeToAdd ) {
			addRecipe( props.recipeToAdd );
			props.done();
		}
	}, [ props.recipeToAdd ] );

	/**
	 * Method to add a recipe to the local recipes state
	 *
	 * @param {Object} recipe
	 */
	const addRecipe = ( recipe ) => {
		dispatchRecipes( { type: 'add', payload: recipe } );
	};

	/**
	 * Clears the local recipes state
	 *
	 */
	const clearDay = () => {
		dispatchRecipes( { type: 'clear' } );
	};

	/**
	 * Removes the Recipe with the provided identifier from the local recipes state
	 *
	 * @param {string} identifier
	 */
	const removeRecipe = ( identifier ) => {
		dispatchRecipes( { type: 'remove', payload: identifier } );
	};

	return (
		<li className="day">
			<header className="header">
				<h2 tabIndex={ props.index }>{ props.title }</h2>
				<button tabIndex={ props.index } onClick={ clearDay } aria-label="clear">
					<Plus />
				</button>
			</header>
			<div className="recipes" data-testid="recipes">
				{ recipes.map( ( recipe, key ) => (
					<Meal
						recipe={ recipe }
						key={ key }
						tabIndex={ props.index }
						onClick={ () => {
							removeRecipe( recipe );
						} }
						buttonText="remove"
						showAdditionalInfo={ true }
					/>
				) ) }
				<Button
					onClick={ addRecipesPopover.toggle }
					plus={ true }
					tabIndex={ props.index }
					label={ `add recipe to ${ props.title }` }
					data-testid="add-recipe-button"
				>
					{ addRecipesPopover.isShown && (
						<DialogOverlay>
							<DialogContent>
								<div ref={ modalRef }>

									{ availableRecipes &&
									availableRecipes.map( ( recipe, key ) => (
										<Meal
											onClick={ () => {
												addRecipe( recipe );
												addRecipesPopover.toggle();
											} }
											buttonText="add"
											recipe={ recipe }
											key={ key }
											tabIndex={ props.index }
										/>
									) ) }
								</div>
							</DialogContent>
						</DialogOverlay>
					) }
				</Button>
			</div>
		</li>
	);
};

export default Day;
