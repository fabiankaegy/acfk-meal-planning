/**
 * External dependencies
 */
import React, { useContext, useReducer, useEffect } from 'react';
/**
 * Internal dependencies
 */
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import Button from '../Button';
import Meal from '../Meal';
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
	const addRecipesModal = useModal();

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
					onClick={ addRecipesModal.toggle }
					plus={ true }
					tabIndex={ props.index }
					label={ `add recipe to ${ props.title }` }
					data-testid="add-recipe-button"
				>
					{ addRecipesModal.isShown && (
						<Modal close={ addRecipesModal.toggle }>
							{ availableRecipes &&
									availableRecipes.map( ( recipe, key ) => (
										<Meal
											onClick={ () => {
												addRecipe( recipe );
												addRecipesModal.toggle();
											} }
											buttonText="add"
											recipe={ recipe }
											key={ key }
											tabIndex={ props.index }
										/>
									) ) }
						</Modal>
					) }
				</Button>
			</div>
		</li>
	);
};

export default Day;
